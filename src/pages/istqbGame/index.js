import renderToRoot from '../../js/root';
import html from './index.html';
import './styles.css';
import questions from '../../resources/questions.json';
import { hideProgressBar, showProgressBar } from '../../js/utils';
import getImage from './images/getImage';

const getQuestionImage = (image) => {
    return `<img alt="${image}" src="${image}" />`;
};

class IstqbGamePage {

    constructor(observer) {
        localStorage.removeItem('answers');

        this.observer = observer;
        this.availableQuestions = [...questions];
        this.currentQuestion = {};
        this.questionCounter = 0;
        this.score = 0;
        this.acceptingAnswers = false;
        this.maxQuestions = Number.parseInt(localStorage.getItem('maxQuestions')) || 40;
        console.log(this.maxQuestions);
    }

    goToNextQuestion = async (e) => {
        this.selectedChoice.parentElement.classList.remove(this.classToApply);
        await this.setNewQuestion(e);
    };

    onSelectAnswer = async (e) => {
        if (!this.acceptingAnswers) {
            return;
        }
        this.acceptingAnswers = false;

        this.selectedChoice = e.target;
        const selectedAnswer = Number.parseInt(this.selectedChoice.dataset.number);
        const isAnswerCorrect = selectedAnswer === this.currentQuestion.answer;

        this.classToApply = isAnswerCorrect ? 'correct' : 'incorrect';
        this.selectedChoice.parentElement.classList.add(this.classToApply);

        const prevAnswers = JSON.parse(localStorage.getItem('answers')) || [];
        localStorage.setItem('answers', JSON.stringify([
            ...prevAnswers,
            [this.selectedChoice.parentElement.firstElementChild.textContent, isAnswerCorrect, this.currentQuestion.LO]
        ]));

        if (isAnswerCorrect) {
            this.score++;
            localStorage.setItem('score', this.score);
            const id = setTimeout(() => {
                this.goToNextQuestion(e);
                clearTimeout(id);
            }, 200);
            return;
        }

        this.nextQuestionButton.classList.remove('hidden');
        this.explanationContainerEls[selectedAnswer - 1].classList.remove('hidden');
    };

    setNewQuestion = async () => {
        if (this.availableQuestions.length === 0 || this.questionCounter >= this.maxQuestions) {
            return window.routeByPath('/end');
        }

        this.questionCounter++;
        this.progressTextEl.innerText = `Q: ${this.questionCounter}/${this.maxQuestions}`;
        this.progressBarFullEl.style.width = `${(this.questionCounter / this.maxQuestions) * 100}%`;

        this.questionIndex = Math.floor(Math.random() * this.availableQuestions.length);
        this.currentQuestion = this.availableQuestions[this.questionIndex];

        this.image.innerHTML = '';
        if (this.currentQuestion.image) {
            const image = await getImage(this.currentQuestion.image);
            this.image.innerHTML = getQuestionImage(image);
        }

        this.questionEl.innerText = this.currentQuestion.question;
        this.choicesEls.forEach((choiceEl) => {
            const { number } = choiceEl.dataset;
            choiceEl.innerText = this.currentQuestion[number];
            this.explanationContainerEls[number - 1].classList.add('hidden');
            this.explanationsEls[number - 1].innerText = this.currentQuestion.explanation[number];
        });

        document.getElementById('main-page').scrollTop = 0;

        this.availableQuestions.splice(this.questionIndex, 1);

        this.acceptingAnswers = true;
    };

    async render() {
        renderToRoot(html);

        this.questionEl = document.getElementById('question');
        this.choicesEls = Array.from(document.getElementsByClassName('choice-text'));
        this.explanationContainerEls = Array.from(document.getElementsByClassName('explanation-container'));
        this.explanationsEls = Array.from(document.getElementsByClassName('info-text'));
        this.progressTextEl = document.getElementById('progressText');
        this.progressBarFullEl = document.getElementById('progressBarFull');
        this.image = document.getElementById('image');
        this.nextQuestionButton = document.getElementById('next-question-button');

        this.choicesEls.forEach(choiceEl => choiceEl.addEventListener('click', this.onSelectAnswer));
        this.nextQuestionButton.addEventListener('click', (e) => {
            this.goToNextQuestion(e);
            this.nextQuestionButton.classList.add('hidden');
        });

        await this.setNewQuestion();

        showProgressBar();
        this.gamePage = document.getElementById('game');
        this.observer(this.gamePage, undefined, hideProgressBar);
    }
}

export default function getIstqbPage(observer) {
    return new IstqbGamePage(observer);
}
