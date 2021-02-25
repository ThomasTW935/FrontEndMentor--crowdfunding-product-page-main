console.log(123)
toggleModal()

function toggleModal(){
    let buttons = document.querySelectorAll('.header__toggle')
    let nav = document.querySelector('.header__nav')
    buttons.forEach(button =>{
        button.addEventListener('click', ()=>{
            console.log(button)
            nav.classList.toggle('hide')
            buttons[0].classList.toggle('hide')
            body.classList.toggle('overflow--hidden')
        })
    })
}

