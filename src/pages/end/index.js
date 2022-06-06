import renderToRoot from '../../js/root';
import html from './index.html';
import './styles.css';

class EndPage {

    constructor() {
        this.score = JSON.parse(localStorage.getItem('score')) || 0;
        this.answers = JSON.parse(localStorage.getItem('answers')) || [];
    }

    render = () => {
        renderToRoot(html);

        this.scores = document.getElementById('scores');
        this.questionsList = document.getElementById('questions');
        this.goHomeBtn = document.getElementById('go-home-btn');

        if (this.answers.length) {
            const percentage = this.score / this.answers.length * 100;
            this.scores.innerText = `Correct answers: ${this.score} out of ${this.answers.length} (${percentage}%)`;
        }

        this.questionsList.innerHTML = this.answers.map((answer) => {
            const [question, isAnswerCorrect] = answer;
            return `<li class="${isAnswerCorrect ? 'passed' : 'failed'}">${question}</li>`;
        }).join('');

        this.goHomeBtn.addEventListener('click', () => {
            window.routeByPath('/');
        });
    };
}

export default function getEndPage() {
    return new EndPage();
}
