console.log("HellO Bhupendra.....!"); 

function SignUp(){

  let F_name = document.getElementById("F-name").value;
  // console.log(F_name,"nslgdsfjl");
  let L_name = document.getElementById("L-name").value;
  let email = document.getElementById("email").value;
  let dob = document.getElementById("dob").value;
  let password = document.getElementById("password").value;
  let co_password = document.getElementById("co-password").value;
  
  const user = {
    fullName:F_name,
    lastName:L_name,
    email:email,
    dob:dob,
    password:password,
    co_password:co_password
  }

  console.log(user);
  
  const data = localStorage.setItem("user",user)
  console.log(data);
} 