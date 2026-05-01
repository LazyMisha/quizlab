import observer from './observer';

import getNotFoundPage from '../pages/404';
import getHomePage from '../pages/home';
import getIstqbPage from '../pages/istqbGame';
import getAboutPage from '../pages/about';
import getEndPage from '../pages/end';

const routes = {
    404: getNotFoundPage,
    '/': getHomePage,
    '/game': getIstqbPage,
    '/united24': getAboutPage,
    '/end': getEndPage,
};

const getBasePath = () => {
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    return pathParts[0] === 'quizlab' ? '/quizlab' : '';
};

const getRoutePath = () => {
    const basePath = getBasePath();
    const path = window.location.pathname.replace(basePath, '') || '/';
    return path.startsWith('/') ? path : `/${path}`;
};

const handleLocation = () => {
    const path = getRoutePath();
    const page = routes[path] || routes[404];
    if (typeof page === 'function') {
        page(observer).render();
        return;
    }
    page.then(page => page.default(observer).render());
};

const routeByPath = (path) => {
    window.history.pushState({}, '', `${getBasePath()}${path}`);
    handleLocation();
    document.getElementById('main-page').scrollTop = 0;
};

window.onpopstate = handleLocation;
window.onhashchange = handleLocation;
window.routeByPath = routeByPath;

handleLocation();
