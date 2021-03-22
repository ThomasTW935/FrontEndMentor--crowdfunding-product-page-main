let data = {
    stats: {
        backed: 89914,
        backers: 5007,
        daysLeft: 56,
        goal: 100000
    },
    items:{
        bamboo: 101,
        black: 64,
        mahogany: 0,
    }
}
let setItems = ()=>{
    let items = document.querySelectorAll('.value')
    items.forEach(item=>{
        for(key in data.items){
            if(item.classList.contains(key)){
                item.innerHTML = data.items[key]
            }
        }
    })
}
let formHandler= (button)=>{
    let dataValue = button.attributes['data-value'].value
    let input = document.querySelector(`.pledgeInput--${dataValue}`)
    const numbersOnly = /[0-9]/;
    let value = parseInt(input.value);
    let min = parseInt(input.min)
    return numbersOnly.test(value) && value >= min
}

let progressBarChange = ()=>{
    let progress = data.stats.backed / data.stats.goal
    let progressBar = document.querySelector('.progress')
    progressBar.style.transform = `scaleX(${progress})`
}
let setStats = (data)=>{
    let stats = document.querySelectorAll('.stat')
    stats.forEach(stat=>{
        for(key in data.stats){
            if(stat.id == key){
                let value = (key == 'backed') ? '$' + data.stats[key] : data.stats[key] 
                stat.children[0].innerHTML = value
            }
        }
    })
    progressBarChange()
}

let init = ()=>{
    toggleModal()
    setStats(data)
    
    setItems()
}

init()

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
                if(formHandler(button)){
                    mainModal.classList.toggle('hide')
                    mainCompleted.classList.toggle('hide')
                }
            } else if(button.classList.contains('toggle__completed--hide')){
                mainCompleted.classList.toggle('hide')
                mainBg.classList.toggle('hide')
            }
        })
    })
}