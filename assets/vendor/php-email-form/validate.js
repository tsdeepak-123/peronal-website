   
   
    function validate(){
  var name=document.submit.name.value;
  var email=document.submit.email.value;
  var subject=document.submit.subject.value;
  var message=document.submit.message.value;
  var reg = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  var nameerror= (/^[A-Za-z]+$/);
  var error=document.getElementById("error-message");

  if(name==""){
      error.innerHTML='Please enter your name'
      return false;
  }
  if(nameerror.test(name)==false){
    error.innerHTML='invalid name'
    return false;
}
  if(name.length<5){
     error.innerHTML='Name should contain atleast 5 elements'
      return false;
  }
  if(email==""){
      error.innerHTML='Please enter your email id'
      return false;
  }
  if(reg.test(email)==false){
    error.innerHTML='invalid email id'
    return false;
  }
  if(subject.length<5){
    error.innerHTML='subject should contain atleast 5 elements'
    return false;
  }
  if(message.length<10){
    error.innerHTML='Should contain 30 words'
    return false;
  }
  if(message.length>100){
    error.innerHTML='Exeeds limit'
    return false;
  }
  return true;

}
