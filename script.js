//code for the GO TO TOP button in the lower right-hand corner
top = document.getElementById('topbutton');
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//code for the dark mode/theme
/*function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  element.classList.toggle("dark-text");*/
}