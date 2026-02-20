document.getElementById('login-btn').addEventListener('click', function() {
    const number = document.getElementById('input-number').value;
    const pin = document.getElementById('input-pin').value;
    if (number == '01707589250' && pin == '1234') {
        alert('Successfully Log-In');
        // window.location.replace('./home.html'); //vanish previous activity consol data
        window.location.assign('./home.html');
    } else {
        alert('Log-In Failed');
        return;
    }

})