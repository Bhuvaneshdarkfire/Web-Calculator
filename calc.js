var inp = document.getElementById("inp");

function display(event) {
    var bin = event.target.textContent;
    console.log(bin);

    const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const operators = ["+", "-", "*", "/", "="];

    if (num.includes(bin)) {
        inp.value += bin;
    } else if (bin == "AC") {
        inp.value = "";
    } else if (bin == "DEL") {
        inp.value = inp.value.slice(0, -1);
    } else if (operators.includes(bin)) {
        if (bin == "=") {
            try {
                inp.value = eval(inp.value);
            } catch (e) {
                inp.value = "Error";
            }
        } else {
            inp.value += bin;
        }
    }
}