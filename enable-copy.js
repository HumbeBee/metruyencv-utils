(async () => {
    document.querySelectorAll('[oncopy], [oncut]').forEach(el => {
        el.removeAttribute('oncopy');
        el.removeAttribute('oncut');

        el.oncopy = null;
        el.oncut = null;

        el.style.userSelect = 'text'; // Make sure text is selectable
    });
})();