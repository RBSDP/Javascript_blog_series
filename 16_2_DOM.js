console.log(window)

function changeBackGroundColoe(color){
    document.body.style.backgroundColor = color
}

const ThemeButton = document.getElementById("ThemeButton")

ThemeButton.addEventListener("click", () =>{

    const backgroundcolor = document.body.style.backgroundColor

    if(!backgroundcolor || backgroundcolor == 'black'){
        changeBackGroundColoe("white")
        ThemeButton.innerText = "black"
    } else{
         changeBackGroundColoe("black")
        ThemeButton.innerText = "white"

    }
})

