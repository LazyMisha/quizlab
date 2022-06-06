import observer from './observer';

const routes = {
    404: import('../pages/404'),
    '/': import('../pages/home'),
    '/game': import('../pages/istqbGame'),
    '/united24': import('../pages/about'),
    '/end': import('../pages/end'),
};

const handleLocation = () => {
    const path = window.location.pathname;
    const page = routes[path] || routes[404];
    if (typeof page === 'function') {
        page().render();
        return;
    }
    page.then(page => page.default(observer).render());
};

const routeByPath = (path) => {
    window.history.pushState({}, '', path);
    handleLocation();
    document.getElementById('main-page').scrollTop = 0;
};

window.onpopstate = handleLocation;
window.onhashchange = handleLocation;
window.routeByPath = routeByPath;

handleLocation();
