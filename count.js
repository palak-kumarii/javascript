let count = 0;

function increase() {
    count++;
    document.getElementById("count").innerText = count;
    document.getElementById("count").style.color = "darkgreen";
}

function decrease() {
    count--;
    document.getElementById("count").innerText = count;
    document.getElementById("count").style.color = "red";
}

function reset() {
    count = 0;
    document.getElementById("count").innerText = count;
    document.getElementById("count").style.color = "black";
}