document.getElementById('back-button').addEventListener('click', function() {
    window.history.back(); // This goes back to the previous page in the browser history
});

document.addEventListener('DOMContentLoaded', function () {
    const dobInput = document.getElementById('dob');
    const lastbloodInput = document.getElementById('lastblood');
    const ageInput = document.getElementById('age');
    const vaildInput = document.getElementById('vaild');

    function calculateAge() {
        const dobValue = dobInput.value;

        if (dobValue) {
            // Calculate age
            const dob = new Date(dobValue);
            const today = new Date();
            let age = today.getFullYear() - dob.getFullYear();
            const m = today.getMonth() - dob.getMonth();
            
            if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
                age--;
            }

            // Update age field
            ageInput.value = age;
        } else {
            ageInput.value = ''; // Clear age field if DOB is not provided
        }
    }

    function calculateVaildDate() {
        const lastbloodValue = lastbloodInput.value;

        if (lastbloodValue) {
            // Calculate vaild date
            const lastblood = new Date(lastbloodValue);
            const vaildDate = new Date(lastblood.getTime() + 142 * 24 * 60 * 60 * 1000); // Adding 142 days

            // Update vaild date field
            vaildInput.value = vaildDate.toISOString().split('T')[0];
        } else {
            vaildInput.value = ''; // Clear vaild date field if last blood date is not provided
        }
    }

    // Add event listeners to trigger calculation on input change
    dobInput.addEventListener('input', calculateAge);
    lastbloodInput.addEventListener('input', calculateVaildDate);
});

document.getElementById('registration-form').addEventListener('submit', function(e) {
    // Show the notification
    const notification = document.getElementById('result');
    notification.classList.add('show');

    // Redirect to one.html after 2 seconds
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
});
