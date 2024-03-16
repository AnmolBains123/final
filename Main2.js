<script> alert("Hello, World!") </script> ///this line is what causes the alert notification, any text between the quotation marks will be displayed in the notification box when the website is opened


<button type="button">Click Me!</button>
<button type="button" id="myButton">Click Me!</button>

function myFunction(){
alert("Hello!");
} 


function mOver(some_tag) {
some_tag.innerHTML = "Thank You”;
some_tag.style.color = “blue”;
}
function mOut(element) {
some_tag.innerHTML = "Mouse Over Me";
some_tag.style.color = “orange”;
} 




window.onload=function(){
var user = document.getElementById("username");
console.log(user.value); // the user input value.
console.log(user.type); // the type of the form element.
}  


<input type="text" id="myinput" oninput="inputHandler()">
<p id="emptyParagraph">Dynamically change on webpage input without
prompt</p>
function inputHandler()
{
var myvalue = document.getElementById("myinput").value;
document.getElementById("emptyParagraph").innerHTML = "Your Input:
" + myvalue;
} 


localStorage.setItem("username", "ITM"); // store the items
  localStorage.setItem('password', password);
console.log(localStorage.getItem("username"));// → ITM
localStorage.removeItem("username"); // remove from the localstorage 


  alert("Form submitted successfully!");
}
</script>
