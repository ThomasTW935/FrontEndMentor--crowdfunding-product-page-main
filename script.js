toggleModal()

function toggleModal(){
    let buttons = document.querySelectorAll('.modal__toggle')
    let nav = document.querySelector('.header__nav')
    let mainModal = document.querySelector('.main__modal')
    let mainBg = document.querySelector('.main__modalBg')
    let mainCompleted = document.querySelector('.main__completed')
    buttons.forEach(button =>{
        button.addEventListener('click', ()=>{
            if(button.classList.contains('header__toggle')){
                nav.classList.toggle('hide')
                buttons[0].classList.toggle('hide')
                body.classList.toggle('overflow--hidden')
            } else if(button.classList.contains('pledge__toggle')){
                mainModal.classList.toggle('hide')
                mainBg.classList.toggle('hide')
            } else if(button.classList.contains('toggle__completed--show')){
                mainModal.classList.toggle('hide')
                mainCompleted.classList.toggle('hide')
            } else if(button.classList.contains('toggle__completed--hide')){
                mainCompleted.classList.toggle('hide')
                mainBg.classList.toggle('hide')
            }
            console.log(button.classList)
        })
    })
}

