function sendMail() {
    const params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email_id").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    }
  
    emailjs.send("service_yoixet3","template_9hfqdii",params).then(alert("Email Sent!!"))
  }