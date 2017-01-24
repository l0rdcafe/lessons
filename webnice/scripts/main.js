var myHeading = document.querySelector('h1');
myHeading.textContent = 'Master stroke';

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
