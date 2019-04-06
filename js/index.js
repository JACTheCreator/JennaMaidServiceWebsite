function findTotal() {
    var total = 0;
    if (document.getElementById("mominc").checked == true) {
        total += 5000;
    }
    if (document.getElementById("ac").checked == true) {
        total += 6500;
    }
    if (document.getElementById("sec").checked == true) {
        total += 10000;
    }
    if (document.getElementById("hks").checked == true) {
        total += 7800;
    }
    if (document.getElementById("oc").checked == true) {
        total += 5300;
    }
    if (document.getElementById("rc").checked == true) {
        total += 5900;
    }


    document.getElementById("total").innerHTML =  "$" +  total + ".00";
}