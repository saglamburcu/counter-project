let value = document.querySelector("#value")
let buttons = document.querySelectorAll(".btn") //array
let counter = 0;
//console.log(buttons)

buttons.forEach(item => {
    //console.log(item) -> all buttons have arrived.
    item.addEventListener("click", function(event) {
        //console.log(event.target.id) -> arrived id info from event.
        let idInfo = event.target.id;
        if (idInfo == "increase") {
            counter++;
        } else if (idInfo =="decrease") {
            counter--;
        } else {
            counter = 0;
        }

        if (counter > 0) {
            value.style.color = "green"
        } else if (counter == 0) {
            value.style.color = "black"
        } else {
            value.style.color = "red"
        }

        value.innerHTML = counter;
    })
})