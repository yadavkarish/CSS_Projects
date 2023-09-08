function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "karishmayadav0901@gmail.com",
        Password : "8EC2CB84DCCB43A6CE64718808F9B84F7D96",
        To : '09karishma2001@gmail.com',
        From : document.querySelector(".email").value,
        Subject : "contact-form enquiry",
        Body : "name: "+document.querySelector(".name").value+"<br/>"+
        "email: "+document.querySelector(".email").value+"<br/>"+
          "subject:"+document.querySelector(".subject").value+"<br/>"
        +"message: "+document.querySelector(".message").value
    }).then(
      message => console.log(message)
    );
}


// alert("hello");
var typed = new Typed(".text",{
    strings:["Web Developer","PHP Developer","Java Developer"],
    typeSpeed:100,
    backSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true 
});

