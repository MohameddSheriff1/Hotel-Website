document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("nav-links").classList.toggle("show");
});

function emailvalidation() {
    let email = document.getElementById("valemail").value;
    let emailMsg = document.getElementById("emailmsg");
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

    emailMsg.innerText = emailPattern.test(email) ? "Valid email" : "Invalid email";
}

function phonevalidation() {
    let phone = document.getElementById("phoneval").value;
    let phoneMsg = document.getElementById("phonemsg");
    let phonePattern = /^01[0-9]{9}$/;

    phoneMsg.innerText = phonePattern.test(phone) ? "Valid phone number" : "Invalid phone number";
}
