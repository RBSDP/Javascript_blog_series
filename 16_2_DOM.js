console.log(window)

function changeBackGroundColoe(color){
    document.body.style.backgroundColor = color
}

const themeButton = document.getElementById("ThemeButton")
console.log(themeButton)

themeButton.addEventListener("click", () =>{

    const backgroundcolor = document.body.style.backgroundColor

    if(!backgroundcolor || backgroundcolor == 'black'){
        changeBackGroundColoe("white")
        themeButton.innerText = "Dark Mode"
    } else{
         changeBackGroundColoe("black")
        themeButton.innerText = "Light Mode"

    }
})

