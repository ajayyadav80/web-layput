function show(id) {
    document.getElementById("clayout").style.display = "none";
    document.getElementById("routerbox").style.display = "none";
    document.getElementById("tlayout").style.display = "none";
    document.getElementById(id).style.display = "block";
}

function f() {
    r = document.getElementById("rr").value
    g = document.getElementById("gg").value
    b = document.getElementById("bb").value
    a = document.getElementById("aa").value
    document.getElementById("color").style.backgroundColor = "rgba(" + r + ", " + g + ", " + b + ", " + a + " )"
    document.getElementById("hex").style.backgroundColor = "rgba(" + r + ", " + g + ", " + b + ", " + a + " )"
    document.getElementById("num").style.backgroundColor = "rgba(" + r + ", " + g + ", " + b + ", " + a + " )"
    document.getElementById("hex").innerHTML = "#" + f1(r) + f1(g) + f1(b)
    document.getElementById("num").innerHTML = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")"
}

function f1(i) {
    hex = Number(i).toString(16);
    if (hex.length == 1) {
        hex = "0" + hex;
    }
    return hex;
}
