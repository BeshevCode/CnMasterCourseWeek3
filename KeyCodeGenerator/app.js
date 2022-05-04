document.addEventListener("keydown", (event) => {
    let numDisplay = document.getElementById ("numDisplay")
    let numCode = document.getElementById ("codeDisplay")
    let numKey = document.getElementById ("keyDisplay")
    let numWhich = document.getElementById ("whichDisplay")

    let keyDown = event.key 
    let keyCode = event.code
    let keyWhich = event.which

    numDisplay.innerHTML = `<p class = "pressedBtn"> ${keyDown} was pressed</p>`
 
    numCode.innerHTML = `<p class ="pressedBtn"> ${keyCode} was pressed</p>`

    numKey.innerHTML = `<p class ="pressedBtn"> ${keyDown} was pressed</p>`

    numWhich.innerHTML = `<p class ="pressedBtn"> ${keyWhich} was pressed</p>`
})