document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async e => {
        e.preventDefault();
        const responseBox = document.getElementById('form-response');
        responseBox.innerHTML = "<div class='alert alert-info'>Sending...</div>";

        try {
            const response = await fetch(form.action, { method: 'POST', body: new FormData(form) });
            const result   = await response.json();

            if (result.success) {
                responseBox.innerHTML = `<div class='alert alert-success'>${result.message}</div>`;
                form.reset();
            } else {
                responseBox.innerHTML = `<div class='alert alert-danger'>${result.message}</div>`;
            }
        } catch {
            responseBox.innerHTML = "<div class='alert alert-danger'>An unexpected error occurred. Please try emailing us directly.</div>";
        }
    });
});
