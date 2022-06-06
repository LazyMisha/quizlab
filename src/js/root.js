const root = document.getElementById('main-page');

export default function renderToRoot(html) {
    root.innerHTML = html;
}
