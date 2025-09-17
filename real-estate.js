let menu = document.querySelector('#menu-bars');
let navber = document.querySelector('.navbar')

menu.onclick =() =>
{
    navber.classList.toggle('active');
    menu.classList.toggle('fa-times');
}


window.onscroll = () =>{
     navber.classList.remove('active');
    menu.classList.remove('fa-times');
}