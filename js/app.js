const nav = document.querySelector(".nav-links");
const open=document.getElementById('openMenu')
const close=document.getElementById('closeMenu')


const Open=()=>{
    nav.classList.toggle('active')
    open.classList.toggle('show')
    close.classList.toggle('show')

}

