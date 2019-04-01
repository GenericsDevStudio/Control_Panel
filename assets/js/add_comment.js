function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput1").value;
    var inputValue1 = document.getElementById("myInput2").value;
    var n = document.createTextNode(inputValue);
    var c = document.createTextNode(inputValue1);
    li.appendChild(n, c);
    if (inputValue === '' || inputValue1 === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
}
