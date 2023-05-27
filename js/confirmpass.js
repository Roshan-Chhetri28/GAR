function check(){
  // document.querySelectorAll("button").innerHTML=disabled;
  let password = document.getElementById("password").value;
  
  let password2 = document.getElementById("repass").value;
  let errorMessage = document.getElementById("error");
  let errorTOThrow = "";
  try{
    
    if(password.length<6){
      errorTOThrow += "<br /> Password too short.";
    }
    if(/[A-Z]/g.test(password) == false){
      errorTOThrow += "<br /> Password should include at least one capital letter.";
    }
    if(/\d/g.test(password) == false){
      errorTOThrow += "<br /> Password should include at least one digit.";
    }
    if(password != password2){
      errorTOThrow += "<br /> Passwords should match.";
    }
    throw errorTOThrow;
  }
  catch(err){
    errorMessage.innerHTML = err;
  }
}