
const form = document.getElementById('contact-form');


function SendEmail() {
    fetch("https://ksalab.runasp.net/SendMail"
, {
        method: "POST",
        body: JSON.stringify({
            "name": document.getElementById('username').value,
            "email": document.getElementById('useremail').value,
            "subject": document.getElementById('usersub').value,
            "message": document.getElementById('usermsg').value
        }),
        headers: {
            "Content-type": "application/json",
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
});
