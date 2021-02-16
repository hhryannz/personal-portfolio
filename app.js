window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.justifyContent = "flex-end";
    document.getElementById("name").style.display = "block";
  } else {
    document.getElementById("header").style.justifyContent = "center";
    document.getElementById("name").style.display = "none";
  }
}