let photo = document.querySelectorAll(".can")[0]
let pic = document.querySelectorAll(".liloandstich")[0]
function animatePicture() {
    pic.style.display = "block"
    setTimeout(() => pic.style.opacity = "1", 0)
}
function unAnimatePicture() {
    pic.style.opacity = "0"
    setTimeout(() => pic.style.display = "none", 1000)
}
