function addBar() {
    const vertical = document.getElementById('#menu-bar');
    if (vertical.style.display === "block") {
         vertical.style.display = "none";
    } else {
      vertical.style.display = "block";
    }
  }

const bar = document.getElementById('#bars'); 

bar.addEventListener('click', addBar());