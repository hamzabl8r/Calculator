const display = document.getElementById("display")

function calcul(input) {
    display.textContent += input
}

function Clear() {
    display.textContent = ""
}

function Remove() {
    display.textContent = display.textContent.slice(0, -1)
}

function calculate() {
    try {
        display.textContent = eval(display.textContent)
    } catch (error) {
        display.textContent = "Error"
    }
}
