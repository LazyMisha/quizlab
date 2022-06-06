import renderToRoot from '../../js/root';
import html from './index.html';
import './styles.css';
import renderMatrixEffect from '../../js/matrix';

class HomePage {

    constructor() {
        localStorage.removeItem('maxQuestions');
    }

    setMarkSign = ({ target }) => {
        const maxQuestions = target.textContent;
        localStorage.setItem('maxQuestions', maxQuestions.substring(1));
        this.cardsEls.forEach(cardEl => {
            cardEl.firstChild.classList.add('hidden');
        });
        target.firstChild.classList.remove('hidden');
    };

    render(){
        renderToRoot(html);

        this.startGameBtnEl = document.getElementById('start-game-button');
        this.cardsEls = Array.from(document.getElementsByClassName('select-number-card'));

        this.cardsEls.forEach(cardEl => {
            cardEl.addEventListener('click', this.setMarkSign);
        });

        this.startGameBtnEl.addEventListener('click', () => {
            window.routeByPath('/game');
        });

        renderMatrixEffect();
    }
}

export default function getHomePage() {
    return new HomePage();
}
