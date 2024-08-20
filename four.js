document.getElementById('back-button').addEventListener('click', function() {
    window.history.back(); // This goes back to the previous page in the browser history
});

document.getElementById('registration-form').addEventListener('submit', function(e) {
    // No need to prevent default, let the form submit

    // Show the notification
    const notification = document.getElementById('result');
    notification.classList.add('show');

    // Redirect to one.html after 2 seconds
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
});
