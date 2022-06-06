export default function observer(element, onRender = () => {}, onHide = () => {}) {
    const observer = new MutationObserver(function() {
        if (document.contains(element)) {
            onRender();
        } else {
            onHide();
            observer.disconnect();
        }
    });
    observer.observe(document,
        {
            attributes: false,
            childList: true,
            characterData: false,
            subtree:true
        });
}
