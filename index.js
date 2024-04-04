let btn = document.querySelector(".btn")
btn.addEventListener("click", decimal)
function decimal() {
    let decimal = document.getElementById("number").value
    let otherDecimal 
    let other = 0
    let binary = 0
    let diff = 1

    otherDecimal = decimal
        while(otherDecimal > 0){
            other = otherDecimal % 2
            binary = binary + other * diff
            otherDecimal = parseInt(otherDecimal / 2)
            diff = diff * 10 
        }
        let h2 = document.createElement("h2")
        h2.innerHTML = `${binary}`
        let cont = document.querySelector(".result")
        cont.append(h2)
}