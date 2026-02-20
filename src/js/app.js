document.addEventListener('DOMContentLoaded', () => {
    
    toggleMenu()
})

function toggleMenu() {
    const btn = document.querySelector('.mobile-menu')
    const nav = document.querySelector('.navegation')
    btn.addEventListener('click', () =>{
        nav.classList.toggle('active')
        btn.classList.toggle('active')
    } )
}