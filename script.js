const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')
const milisegundoss = document.querySelector('#milisegundos')
const start = document.querySelector('#startBtn')
const pausar = document.querySelector('#pauseBtn')
const resetar = document.querySelector('#resetBtn')

let interval
let minutes = 0
let seconds = 0
let milisegunds = 0
let pausado = false

start.addEventListener('click', ()=>{
    start.style.display = 'none'
    
    interval = setInterval(()=>{
        if(!pausado){
            milisegunds += 10
            
            if(milisegunds === 1000){
                seconds++
                milisegunds = 0
            }

            if(seconds === 60){
                minutes++
                seconds = 0
            }

            

            minutos.textContent = formatoTime(minutes)
            segundos.textContent = formatoTime(seconds)
            milisegundoss.textContent= formatoMili(milisegunds)
            

            function formatoTime (time){
                return time < 10 ? `0${time}`: time
            }

            function formatoMili(time){
                return time < 100 ? time.padStart(3, '0') : time

            }

            

            

        }

    }, 10)
    resetar.style.display= "flex"
    pausar.style.display = 'flex'
    

    pausar.addEventListener('click', ()=>{
        start.textContent = 'Continuar'
        start.style.display = 'block'
        

        clearInterval(interval)
    })

    resetar.addEventListener('click', ()=>{
        clearInterval(interval)
        minutes = 0
        seconds = 0
        milisegunds = 0
        minutos.textContent = "00"
        segundos.textContent = "00"
        milisegundoss.textContent = "000"
        pausar.style.display = 'none'
        resetar.style.display = 'none'
        start.style.display = 'block'


        start.textContent = 'Iniciar'


    })

    
    
})

