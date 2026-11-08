document.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.querySelector('.showreel-play-btn');
    const modalEl = document.getElementById('showreelModal');
    if (!playBtn || !modalEl) return;

    const iframe   = document.getElementById('showreelIframe');
    const videoSrc = iframe.dataset.src;

    playBtn.addEventListener('click', () => {
        if (window.bootstrap?.Modal) {
            bootstrap.Modal.getOrCreateInstance(modalEl).show();
        } else {
            // Fallback if Bootstrap JS hasn't loaded
            modalEl.style.display = 'block';
            modalEl.classList.add('show');
            document.body.classList.add('modal-open');
        }
        iframe.src = videoSrc;
    });

    // Stop video when modal closes (prevents audio continuing in background)
    modalEl.addEventListener('hide.bs.modal', () => { iframe.src = ''; });

    modalEl.querySelector('[data-bs-dismiss="modal"]').addEventListener('click', () => {
        iframe.src = '';
        if (!window.bootstrap) {
            modalEl.style.display = 'none';
            modalEl.classList.remove('show');
            document.body.classList.remove('modal-open');
        }
    });
});
