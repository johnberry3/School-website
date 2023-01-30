// const menu = document.querySelector('.menu');
// menu.addEventListener('click', e=>{
//   document.querySelector('.mobile-nav').classList.add('.show');
//   document.querySelector('.overlay').style.display = 'block';
//   document.querySelector('body').classList.add('.lock');
// });

//   document.querySelector('#exit').addEventListener('click', e=>{
//   document.querySelector('.mobile-nav').classList.remove('.show');
//   document.querySelector('.overlay').style.display = 'none';
//   document.body.classList.remove('.lock')
// });

const bar = document.querySelector('.mobile');
const open = document.querySelector('.close');
bar.addEventListener("click", e=>{
    document.querySelector('.mobile-Nav').style.display = 'block';
    document.querySelector('.body').classList.add('.lock');
});

open.addEventListener("click",e=>{
    document.querySelector('.mobile-Nav').style.display ='none';
    document.querySelector('body').classList.remove('.lock')
});