const showProgressBar = () => {
    document.getElementById('progressBar').classList.remove('hidden');
    document.getElementById('progressText').classList.remove('hidden');
};

const hideProgressBar = () => {
    document.getElementById('progressBar').classList.add('hidden');
    document.getElementById('progressText').classList.add('hidden');
};

export {
    showProgressBar,
    hideProgressBar,
};
