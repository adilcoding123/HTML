function validate(e) {
    e.preventDefault();

    const email=document.getElementById('email').value;
    const pass=document.getElementById('password').value;
    const age=document.getElementById('age').value;
    const msgBox=document.getElementById('message');

    let message='';

    if(email=== ''){
        message="enter an email";
        msgBox.style.color="red";
       
    }
    else if(pass=== ''){
        message="enter an pass";
        msgBox.style.color="red";}
    else if(age=== ''){
        message="enter your age";
        msgBox.style.color="red";}
    else{
        message="login succesfull";
        msgBox.style.colol="green";
    }
    msgBox.innerText=message;
}