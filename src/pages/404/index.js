import renderToRoot from '../../js/root';
import html from './index.html';

class NotFoundPage {
    render() {
        renderToRoot(html);
    }
}

export default function getNotFoundPage() {
    return new NotFoundPage();
}
