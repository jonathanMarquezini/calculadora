function insert(num) {
    var res = document.querySelector("#resultado").innerHTML
    document.querySelector("#resultado").innerHTML = res + num
}

function insertObj(num) {
    var res = document.querySelector("#resultado").innerHTML
    document.querySelector("#resultado").innerHTML = res + num
}

function apagar() {
    document.querySelector("#resultado").innerHTML = ""
}

function back() {
    const res = document.querySelector("#resultado").innerHTML
    document.querySelector("#resultado").innerHTML = res.substring(0, res.length -1)
}

function resFinally() {
    const res = document.querySelector("#resultado").innerHTML
    document.querySelector("#resultado").innerHTML = eval(res)
}