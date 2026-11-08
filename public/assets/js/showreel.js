// Showreel modal using the native <dialog> element (no Bootstrap JS needed).
// The YouTube iframe only gets its src when opened, and loses it on close so audio stops.
document.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.querySelector('.showreel-play-btn');
    const dialog  = document.getElementById('showreelModal');
    if (!playBtn || !dialog) return;

    const iframe = document.getElementById('showreelIframe');

    playBtn.addEventListener('click', () => {
        iframe.src = iframe.dataset.src;
        dialog.showModal();
    });

    dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());

    // Clicking the backdrop (outside the dialog's content box) closes it
    dialog.addEventListener('click', e => {
        if (e.target === dialog) dialog.close();
    });

    // Fires for the close button, backdrop click and the Esc key
    dialog.addEventListener('close', () => {
        iframe.removeAttribute('src');
        playBtn.focus();
    });
});
