function sendMail(){
    let parms={
        name:document.getElementById('nameinput1').value,
        email:document.getElementById('emailInput').value,
        message:document.getElementById('messageInput').value,
    }
    emailjs.send("service_2zs6kg2","template_lv02zbr",parms).then(alert("email sent"));
}