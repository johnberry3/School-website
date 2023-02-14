//MOBILE NAV TOGGLER
const bar = document.querySelector('.mobile');
const open = document.querySelector('.close');
function openNav(){
        document.querySelector('.mobile-Nav').style.display = 'block';
        document.querySelector('.body').classList.add('.lock');
}
function closeNav(){
        document.querySelector('.mobile-Nav').style.display ='none';
        document.querySelector('body').classList.remove('.lock')
}
bar.addEventListener("click", openNav);
open.addEventListener("click", closeNav);



//PRINCIPAL TEXT READ MORE/READLESS
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  //ANIMATION
  const click = document.getElementById('#animate');

  function PicAnimate(){
     const animi = document.querySelector(".animy").style.display = "block"; 
  }

  click.addEventListener("click", PicAnimate);