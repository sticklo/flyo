let drawer = document.querySelector(".drawer")
let backdrop = document.querySelector(".backdrop")
const ham = document.querySelector(".hamburger")
let header_img = document.getElementsByTagName("img")[0]
console.log(header_img)
ham.addEventListener("click", () => {
    if(ham.innerHTML == "&#215;") ham.innerHTML = "&#9776;"
    if(ham.innerHTML == "&#9776;") ham.innerHTML = "&#215;"
    drawer.style.transform = "translateX(0)"
    backdrop.style.display = "block"
})

backdrop.addEventListener("click", () => {
    drawer.style.transform = "translateX(-100vw)"
    backdrop.style.display = "none"

})

document.querySelector(".close").addEventListener("click", ()=>{
    drawer.style.transform = "translateX(-100vw)"
    backdrop.style.display = "none"
})
