var slideIndex = 1;
function plusDivs(n, ele) {
  showDivs(slideIndex += n, ele);
}

function showDivs(n, ele) {
  var i;
  var x = document.getElementsByClassName(ele);
  if (n > x.length) {slideIndex = 1;}    
  if (n < 1) {slideIndex = x.length;}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}