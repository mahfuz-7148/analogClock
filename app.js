let hourr = document.getElementById('hour')
let minutess = document.getElementById('min')
let secondss = document.getElementById('sec')

const displayTime = () => {
    let date = new Date()
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()

    let hourRotate = 30 * hh 
    let minuteRotate = 6 * mm
    let secondRotate = 6 * ss

    hourr.style.transform = `rotate(${hourRotate}deg`
    minutess.style.transform = `rotate(${minuteRotate}deg`
    secondss.style.transform = `rotate(${secondRotate}deg`
}

setInterval(displayTime, 1000)