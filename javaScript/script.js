import { $, getId, getClass, getTag} from "./main-js.js"

function birthday() {
    setInterval(() => {
        $.body.style.backgroundColor = "rgb(" + Math.floor(Math.random()  * 255) + "," + Math.floor(Math.random()  * 255) + "," + Math.floor(Math.random()  * 255) + ")"
    }, 100);
    for (let index = 1; index < 8; index++) {
        const newGif = $.createElement('img')
        newGif.classList.add("gif" + index)
        newGif.classList.add("gif")
        newGif.src = "Gifs/gif" + index + ".gif"
        $.body.append(newGif)
    }
    const HappyBirthdayText = $.createElement('div')
    HappyBirthdayText.classList.add('center')
    HappyBirthdayText.innerHTML = "happy birthday mamamd"
    $.body.append(HappyBirthdayText)
    let music = getId('music')
    music.play()
}
getId("start").addEventListener('click', e => {
    e.target.style.display = "none"
    const timerElem = getId("timer")
    timerElem.classList.add('active')
    let timer = setInterval(() => {
        if (timerElem.innerHTML != "0") {
            timerElem.innerHTML = +timerElem.innerHTML - 1
        } else {
            clearInterval(timer)
            timerElem.style.display = "none"
            $.body.classList.add("active")
            birthday()
        }
    }, 500);
    
})

