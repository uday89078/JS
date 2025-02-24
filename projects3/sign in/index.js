document.getElementById("signup").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission for validation

    // Get values from the form fields
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let country = document.getElementById("country").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;

    let user = {
        name: name,
        email: email,
        country: country,
        phone: phone,
        password: password
    };
    console.log(user);


    
});


document.getElementById("signin").addEventListener("submit", function(event) { 
    event.preventDefault();

    
    let name = document.getElementById("signin-name").value;
    let password = document.getElementById("signin-password").value;
    let email = document.getElementById('signin-email').value;
 
    let sudent = { 
        email: email,
        password: password,
        name: name
    };
    console.log(sudent);
});