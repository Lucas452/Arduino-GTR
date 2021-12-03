(function () {
    emailjs.init("user_61dtIJ9rmcvjBobYeYiv3");
})();

function sendmail() {
    let fullName = document.getElementById("a").value;
    let userEmail = document.getElementById("correo").value;
    let userAsunto = document.getElementById("SUBJECT").value;
    let userMessage = document.getElementById("mensaje").value;

    var contactParams = {
        from_name: fullName,
        from_email: userEmail,
        from_subject: userAsunto,
        message: userMessage
    };

    emailjs.send('service_6c66i8r', 'template_9cgzsbr', contactParams).then(function (res) { })
}