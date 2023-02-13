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