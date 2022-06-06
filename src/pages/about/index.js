import renderToRoot from '../../js/root';
import html from './index.html';
import './styles.css';
import logo from '../../img/logo.svg';

class AboutPage {
    render() {
        renderToRoot(html);

        const united24Btn = document.getElementById('united24-button');
        united24Btn.src = logo;
        united24Btn.addEventListener('click', () => {
            window.open('https://u24.gov.ua/', '_blank').focus();
        });
    }
}

export default function getAboutPage() {
    return new AboutPage();
}
