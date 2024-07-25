document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('maintenanceForm');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        try {
            const response = await fetch('/submit', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            alert(result.message);
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    });
});