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
let updateData = (item,amount,data)=>{
    data.stats.backed += amount
    data.stats.backers++
    data.items[item]--

    setStats(data)
}
let setItems = (data)=>{
    for(key in data.items){
        let items = document.querySelectorAll(`.item__${key}Con .value`)
        items.forEach(item=>{
            item.innerHTML = data.items[key]
        })
        if(data.items[key] < 1){
            let cons = document.querySelectorAll(`.item__${key}Con`)
            cons.forEach(con=>{
                con.classList.add('card--disabled')
            })
        }
    }
}
let formHandler= (button)=>{
    const numbersOnly = /[0-9]/;
    let value,min
    let dataValue = button.attributes['data-value'].value
    if(!button.classList.contains('minimum')){
        let input = document.querySelector(`.pledgeInput--${dataValue}`)
        value = parseInt(input.value);
        min = parseInt(input.min)
    } else {
         value = parseInt(button.attributes['data-minimum'].value)
         min = value
    }
    if(numbersOnly.test(value) && value >= min){
        updateData(dataValue,value,data)
    }
    return numbersOnly.test(value) && value >= min
}

let progressBarChange = (data)=>{
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
    progressBarChange(data)
    setItems(data)
}

let init = ()=>{
    toggleModal()
    setStats(data)
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
            } else if(button.classList.contains('toggle__completed--show') || button.classList.contains('minimum')){
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