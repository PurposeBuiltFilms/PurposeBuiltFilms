// Contact form: submits to Formspree in the background and shows the result inline.
// Without JS the form still posts to Formspree and lands on its thank-you page.
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const responseBox = document.getElementById('form-response');
    const submitBtn   = form.querySelector('button[type="submit"]');

    // textContent (not innerHTML) so messages from the server can never inject markup
    function showMessage(type, text) {
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.textContent = text;
        responseBox.replaceChildren(alert);
    }

    form.addEventListener('submit', async e => {
        e.preventDefault();
        showMessage('info', 'Sending...');
        submitBtn.disabled = true;

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { Accept: 'application/json' },
            });

            if (response.ok) {
                showMessage('success', "Thanks, your message has been sent. We'll be in touch soon.");
                form.reset();
                return;
            }

            // Formspree returns { errors: [{ message }] } for validation problems
            const result = await response.json().catch(() => ({}));
            const detail = result.errors?.map(err => err.message).join(' ');
            showMessage('danger', detail || 'Sorry, your message could not be sent. Please try again or email us directly.');
        } catch {
            showMessage('danger', 'An unexpected error occurred. Please try emailing us directly at info@purposebuiltfilms.com.');
        } finally {
            submitBtn.disabled = false;
        }
    });
});
