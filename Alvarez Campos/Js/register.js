const button=document.getElementById("reg");
button.addEventListener("click", () =>{
  const name=document.getElementById("name").value;
  const lname=document.getElementById("lname").value;
  const mail=document.getElementById("mail").value;
  const bday=document.getElementById("bday").value;
  const nat=document.getElementById("nat").value;
  const term=document.getElementById("term").checked;
  if(term){ 
     if(name != "" && lname!="" && mail != "" && mail!="" && bday!="" && nat!=""){
      const message = `Thank you.\nName: ${name}.\nLast Name: ${lname}.\nMail: ${mail}.\nBirthday: ${bday}.\nNationality: ${nat}.`;
      alert(message);
     }else{
      alert('Error, information missing');
     }   
    }
    else{
      alert('Please indicate that you have read and agree to the Terms and Conditions.');
      
    }      
});