function validate(e) {
    e.preventDefault();

    const name=document.getElementById('name').value;
    const school=document.getElementById('schoo;').value;
    const addres=document.getElementById('addres').value;
    const msgBox=document.getElementById('message');

    let message='';

    if(name=== ''){
        message="enter an name";
        msgBox.style.color="red";
       
    }
    else if(school=== ''){
        message="enter an school name";
        msgBox.style.color="red";}
    else if(addres=== ''){
        message="enter your addres";
        msgBox.style.color="red";}
    else{
        message="login succesfull";
        msgBox.style.colol="green";
    }
    msgBox.innerText=message;
}