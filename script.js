document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Simple validation (all fields are required)
    let firstname = document.getElementById('firstname').value.trim();
    let lastname = document.getElementById('lastname').value.trim();
    let email = document.getElementById('email').value.trim();
    let contact = document.getElementById('contact').value.trim();
    let address = document.getElementById('address').value.trim();
    let city = document.getElementById('city').value.trim();

    if (firstname && lastname && email && contact && address && city) {
        document.getElementById('message').textContent = "Registration complete";
    } else {
        document.getElementById('message').textContent = "Please fill out all fields";
        document.getElementById('message').style.color = "red";
    }
});
