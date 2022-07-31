const love = document.querySelector('.love')
const times = document.querySelector('#times')
let timesClicked = 0

love.addEventListener('dblclick', (e) =>{
    createHeart(e)
   
})
    
const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const lefOffset = e.target.offsetLeft 
    const topOffset = e.target.offsetTop

    const xInside = x - lefOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    love.appendChild(heart)

    times.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 1000)
}
