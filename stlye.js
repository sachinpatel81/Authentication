function checklogin(){
   let email =document.getElementById('form2Example17').value;
   let password =document.getElementById('form2Example27').value;
   if(email === "" && password === ""){
      // document.write("enter a valid email id")
      console.log("enter a valid email id & password")
   }
   else{
      // document.write("email ="+email)
      // document.write("password ="+password)
      console.log(email)
      console.log(password)
   }
   
  
   
}
function checkregisation(){
   let yourname =document.getElementById('yourname').value;
   let username =document.getElementById('username').value;
   let password =document.getElementById('password').value;
   let DOB =document.getElementById('DOB').value;
   let city =document.getElementById('city').value;
   let selectgender = "";
   if(document.getElementById('male').checked){
      selectgender = document.getElementById('male').value;
   }
   else{
      selectgender = document.getElementById('female').value;      
   }
   

   console.log(yourname)
   console.log(username)
   console.log(password)
   console.log(DOB)
   console.log(city)
   console.log(selectgender)
   
   


}
