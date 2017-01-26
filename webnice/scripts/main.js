alert('ضربة معلم!!');

var myImage = document.querySelector('img');
myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/amr.gif') {
    myImage.setAttribute ('src', 'images/sharm.gif');
  } else {
    myImage.setAttribute ('src', 'images/amr.gif');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your nickname.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Bless up, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Bless up, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
