function checklogin() {
   let email = document.getElementById('form2Example17').value;
   let password = document.getElementById('form2Example27').value;
   if (email === "" && password === "") {
      // document.write("enter a valid email id")
      console.log("enter a valid email id & password")
   }
   else {
      // document.write("email ="+email)
      // document.write("password ="+password)
      console.log(email)
      console.log(password)
   }



}
function checkregisation() {
   let yourname = document.getElementById('yourname').value;
   let username = document.getElementById('username').value;
   let password = document.getElementById('password').value;
   let DOB = document.getElementById('DOB').value;

   let selectgender = "";
   if (document.getElementById('male').checked) {
      selectgender = document.getElementById('male').value;
   }
   else {
      selectgender = document.getElementById('female').value;
   }
   let city = document.getElementById('city').value;

   if (yourname === "") {
      console.log("enter a valid yourname")
      document.getElementById('yournameError').textContent ="enter a valid yourname"
      document.getElementById('yournameError').style.color = "red"

   }
   else if (username === "") {
      console.log("enter a valid username")
      document.getElementById('usernameError').textContent ="enter a valid username"
      document.getElementById('usernameError').style.color = "red"

   }
   else if (password === "") {
      console.log("enter a valid password")
      document.getElementById('passwordError').textContent ="enter a valid password"
      document.getElementById('passwordError').style.color = "red"
   }
   else if (DOB === "") {
      console.log("enter a valid DOB")
      document.getElementById('DOBError').textContent ="enter a valid DOB"
      document.getElementById('DOBError').style.color = "red"
   }
   else if (selectgender === "") {
      console.log("enter a valid gender")
      document.getElementById('genderError').textContent ="enter a valid gender"
      document.getElementById('genderError').style.color = "red"
   }
   else if (city === "") {
      console.log("enter a valid city")
      document.getElementById('cityError').textContent ="enter a valid city"
      document.getElementById('cityError').style.color = "red"
   

   }
   else if (password.length < 3){
      console.log("enter maximum 3 letter password")
      document.getElementById('error').textContent ="enter maximum 3 letter password"
   }
   else 
   {
      console.log(yourname)
      console.log(username)
      console.log(password)
      console.log(DOB)
      console.log(selectgender)
      console.log(city)
      document.getElementById('error').textContent =""


   }
   
}
