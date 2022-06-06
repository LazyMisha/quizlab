import '../styles.css';
import './router';
import logo from '../img/logo.svg';

const logoEl = document.getElementById('united-logo');
const logoCntEl = document.getElementById('logo-container');
const homeBtnEl = document.getElementById('home-btn');

logoEl.src = logo;
logoCntEl.addEventListener('click', () => {
    window.routeByPath('/united24');
});
homeBtnEl.addEventListener('click', () => {
    window.routeByPath('/');
});

