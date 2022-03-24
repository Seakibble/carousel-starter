const $images = document.querySelector('.carousel__images').children
const $leftBtn = document.querySelector('.carousel__left')
const $rightBtn = document.querySelector('.carousel__right')

let active = 0

for (const $image of $images) {
    $image.style.display = 'none'
}

$images[active].style.display = 'block'


function backward() {
    $images[active].style.display = 'none'
    active--
    if ($images[active] == undefined) active = $images.length-1
    $images[active].style.display = 'block'
    
}

$leftBtn.addEventListener('click', function () {
    backward()
})

function forward() {
    $images[active].style.display = 'none'
    active++

    if ($images[active] == undefined) active = 0

    $images[active].style.display = 'block'
}

$rightBtn.addEventListener('click', function () {
    forward()
})

setInterval(forward, 4000)