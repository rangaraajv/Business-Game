function addFunction() {
    var fromName = document.getElementById("from").value;
    var toName = document.getElementById("to").value;
    if(fromName == "Ranga" && toName == "Visnu"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("rtvis").value;
        var c = parseInt(a)+parseInt(b);
        document.getElementById("rtvis").value = c;
        var d = document.getElementById("rtot").value;
        var tot = parseInt(c)+parseInt(d);
        document.getElementById("rtot").value = tot;
    }
    if(fromName == "Ranga" && toName == "Divakar"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("rtd").value;
        var c = parseInt(a)+parseInt(b);
        document.getElementById("rtd").value = c;
        var d = document.getElementById("rtot").value;
        var tot = parseInt(c)+parseInt(d);
        document.getElementById("rtot").value = tot;
    }
    if(fromName == "Ranga" && toName == "Vignesh"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("rtvig").value;
        var c = parseInt(a)+parseInt(b);
        document.getElementById("rtvig").value = c;
        var d = document.getElementById("rtot").value;
        var tot = parseInt(c)+parseInt(d);
        document.getElementById("rtot").value = tot;
    }
    if(fromName == "Ranga" && toName == "Bank"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("rtb").value;
        var c = parseInt(a)+parseInt(b);
        document.getElementById("rtb").value = c;
        var d = document.getElementById("rtot").value;
        var tot = parseInt(c)+parseInt(d);
        document.getElementById("rtot").value = tot;
    }
}
function subFunction() {
    var fromName = document.getElementById("from").value;
    var toName = document.getElementById("to").value;
    if(fromName == "Ranga" && toName == "Visnu"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("rtvis").value;
        var c = parseInt(b)-parseInt(a);
        document.getElementById("rtvis").value = c;
        var d = document.getElementById("rtot").value;
        var tot = parseInt(d)-parseInt(a);
        document.getElementById("rtot").value = tot;
    }
    if(fromName == "Ranga" && toName == "Divakar"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("rtd").value;
        var c = parseInt(b)-parseInt(a);
        document.getElementById("rtd").value = c;
        var d = document.getElementById("rtot").value;
        var tot = parseInt(d)-parseInt(a);
        document.getElementById("rtot").value = tot;
    }
    if(fromName == "Ranga" && toName == "Vignesh"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("rtvig").value;
        var c = parseInt(b)-parseInt(a);
        document.getElementById("rtvig").value = c;
        var d = document.getElementById("rtot").value;
        var tot = parseInt(d)-parseInt(a);
        document.getElementById("rtot").value = tot;
    }
    if(fromName == "Ranga" && toName == "Bank"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("rtb").value;
        var c = parseInt(b)-parseInt(a);
        document.getElementById("rtb").value = c;
        var d = document.getElementById("rtot").value;
        var tot = parseInt(d)-parseInt(a);
        document.getElementById("rtot").value = tot;
    }
}