function addFunction() {
    var fromName = document.getElementById("from").value;
    var toName = document.getElementById("to").value;
    //Ranga Section
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
    //Visnu Section
    if(fromName == "Visnu" && toName == "Ranga"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("vtr").value;
        var c = parseInt(a)+parseInt(b);
        document.getElementById("vtr").value = c;
        var d = document.getElementById("vtot").value;
        var tot = parseInt(c)+parseInt(d);
        document.getElementById("vtot").value = tot;
    }
    if(fromName == "Visnu" && toName == "Divakar"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("vtd").value;
        var c = parseInt(a)+parseInt(b);
        document.getElementById("vtd").value = c;
        var d = document.getElementById("vtot").value;
        var tot = parseInt(c)+parseInt(d);
        document.getElementById("vtot").value = tot;
    }
    if(fromName == "Visnu" && toName == "Vignesh"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("vtvig").value;
        var c = parseInt(a)+parseInt(b);
        document.getElementById("vtvig").value = c;
        var d = document.getElementById("vtot").value;
        var tot = parseInt(c)+parseInt(d);
        document.getElementById("vtot").value = tot;
    }
    if(fromName == "Visnu" && toName == "Bank"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("vtb").value;
        var c = parseInt(a)+parseInt(b);
        document.getElementById("vtb").value = c;
        var d = document.getElementById("vtot").value;
        var tot = parseInt(c)+parseInt(d);
        document.getElementById("vtot").value = tot;
    }
    //Divakar Section
    if(fromName == "Divakar" && toName == "Ranga"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("dtr").value;
        var c = parseInt(a)+parseInt(b);
        document.getElementById("dtr").value = c;
        var d = document.getElementById("dtot").value;
        var tot = parseInt(c)+parseInt(d);
        document.getElementById("dtot").value = tot;
    }
    if(fromName == "Divakar" && toName == "Visnu"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("dtvis").value;
        var c = parseInt(a)+parseInt(b);
        document.getElementById("dtvis").value = c;
        var d = document.getElementById("dtot").value;
        var tot = parseInt(c)+parseInt(d);
        document.getElementById("dtot").value = tot;
    }
    if(fromName == "Divakar" && toName == "Vignesh"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("dtvig").value;
        var c = parseInt(a)+parseInt(b);
        document.getElementById("dtvig").value = c;
        var d = document.getElementById("dtot").value;
        var tot = parseInt(c)+parseInt(d);
        document.getElementById("dtot").value = tot;
    }
    if(fromName == "Divakar" && toName == "Bank"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("dtb").value;
        var c = parseInt(a)+parseInt(b);
        document.getElementById("dtb").value = c;
        var d = document.getElementById("dtot").value;
        var tot = parseInt(c)+parseInt(d);
        document.getElementById("dtot").value = tot;
    }
    //Vignesh Section
    if(fromName == "Vignesh" && toName == "Ranga"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("vgtr").value;
        var c = parseInt(a)+parseInt(b);
        document.getElementById("vgtr").value = c;
        var d = document.getElementById("vgtot").value;
        var tot = parseInt(c)+parseInt(d);
        document.getElementById("vgtot").value = tot;
    }
    if(fromName == "Vignesh" && toName == "Visnu"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("vgtvis").value;
        var c = parseInt(a)+parseInt(b);
        document.getElementById("vgtvis").value = c;
        var d = document.getElementById("vgtot").value;
        var tot = parseInt(c)+parseInt(d);
        document.getElementById("vgtot").value = tot;
    }
    if(fromName == "Vignesh" && toName == "Divakar"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("vgtd").value;
        var c = parseInt(a)+parseInt(b);
        document.getElementById("vgtd").value = c;
        var d = document.getElementById("vgtot").value;
        var tot = parseInt(c)+parseInt(d);
        document.getElementById("vgtot").value = tot;
    }
    if(fromName == "Vignesh" && toName == "Bank"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("vgtb").value;
        var c = parseInt(a)+parseInt(b);
        document.getElementById("vgtb").value = c;
        var d = document.getElementById("vgtot").value;
        var tot = parseInt(c)+parseInt(d);
        document.getElementById("vgtot").value = tot;
    }
    //Bank Section
    if(fromName == "Bank" && toName == "Ranga"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("btr").value;
        var c = parseInt(a)+parseInt(b);
        document.getElementById("btr").value = c;
        var d = document.getElementById("btot").value;
        var tot = parseInt(c)+parseInt(d);
        document.getElementById("btot").value = tot;
    }
    if(fromName == "Bank" && toName == "Visnu"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("btvis").value;
        var c = parseInt(a)+parseInt(b);
        document.getElementById("btvis").value = c;
        var d = document.getElementById("btot").value;
        var tot = parseInt(c)+parseInt(d);
        document.getElementById("btot").value = tot;
    }
    if(fromName == "Bank" && toName == "Divakar"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("btd").value;
        var c = parseInt(a)+parseInt(b);
        document.getElementById("btd").value = c;
        var d = document.getElementById("btot").value;
        var tot = parseInt(c)+parseInt(d);
        document.getElementById("btot").value = tot;
    }
    if(fromName == "Bank" && toName == "Vignesh"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("btvig").value;
        var c = parseInt(a)+parseInt(b);
        document.getElementById("btvig").value = c;
        var d = document.getElementById("btot").value;
        var tot = parseInt(c)+parseInt(d);
        document.getElementById("btot").value = tot;
    }
}
function subFunction() {
    var fromName = document.getElementById("from").value;
    var toName = document.getElementById("to").value;
    //Ranga Section
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
    //Visnu Section
    if(fromName == "Visnu" && toName == "Ranga"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("vtr").value;
        var c = parseInt(b)-parseInt(a);
        document.getElementById("vtr").value = c;
        var d = document.getElementById("vtot").value;
        var tot = parseInt(d)-parseInt(a);
        document.getElementById("vtot").value = tot;
    }
    if(fromName == "Visnu" && toName == "Divakar"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("vtd").value;
        var c = parseInt(b)-parseInt(a);
        document.getElementById("vtd").value = c;
        var d = document.getElementById("vtot").value;
        var tot = parseInt(d)-parseInt(a);
        document.getElementById("vtot").value = tot;
    }
    if(fromName == "Visnu" && toName == "Vignesh"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("vtvig").value;
        var c = parseInt(b)-parseInt(a);
        document.getElementById("vtvig").value = c;
        var d = document.getElementById("vtot").value;
        var tot = parseInt(d)-parseInt(a);
        document.getElementById("vtot").value = tot;
    }
    if(fromName == "Visnu" && toName == "Bank"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("vtb").value;
        var c = parseInt(b)-parseInt(a);
        document.getElementById("vtb").value = c;
        var d = document.getElementById("vtot").value;
        var tot = parseInt(d)-parseInt(a);
        document.getElementById("vtot").value = tot;
    }
    //Divakar Section
    if(fromName == "Divakar" && toName == "Ranga"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("dtr").value;
        var c = parseInt(b)-parseInt(a);
        document.getElementById("dtr").value = c;
        var d = document.getElementById("dtot").value;
        var tot = parseInt(d)-parseInt(a);
        document.getElementById("dtot").value = tot;
    }
    if(fromName == "Divakar" && toName == "Visnu"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("dtvis").value;
        var c = parseInt(b)-parseInt(a);
        document.getElementById("dtvis").value = c;
        var d = document.getElementById("dtot").value;
        var tot = parseInt(d)-parseInt(a);
        document.getElementById("dtot").value = tot;
    }
    if(fromName == "Divakar" && toName == "Vignesh"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("dtvig").value;
        var c = parseInt(b)-parseInt(a);
        document.getElementById("dtvig").value = c;
        var d = document.getElementById("dtot").value;
        var tot = parseInt(d)-parseInt(a);
        document.getElementById("dtot").value = tot;
    }
    if(fromName == "Divakar" && toName == "Bank"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("dtb").value;
        var c = parseInt(b)-parseInt(a);
        document.getElementById("dtb").value = c;
        var d = document.getElementById("dtot").value;
        var tot = parseInt(d)-parseInt(a);
        document.getElementById("dtot").value = tot;
    }
    //Vignesh Section
    if(fromName == "Vignesh" && toName == "Ranga"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("vgtr").value;
        var c = parseInt(b)-parseInt(a);
        document.getElementById("vgtr").value = c;
        var d = document.getElementById("vgtot").value;
        var tot = parseInt(d)-parseInt(a);
        document.getElementById("vgtot").value = tot;
    }
    if(fromName == "Vignesh" && toName == "Visnu"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("vgtvis").value;
        var c = parseInt(b)-parseInt(a);
        document.getElementById("vgtvis").value = c;
        var d = document.getElementById("vgtot").value;
        var tot = parseInt(d)-parseInt(a);
        document.getElementById("vgtot").value = tot;
    }
    if(fromName == "Vignesh" && toName == "Divakar"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("vgtd").value;
        var c = parseInt(b)-parseInt(a);
        document.getElementById("vgtd").value = c;
        var d = document.getElementById("vgtot").value;
        var tot = parseInt(d)-parseInt(a);
        document.getElementById("vgtot").value = tot;
    }
    if(fromName == "Vignesh" && toName == "Bank"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("vgtb").value;
        var c = parseInt(b)-parseInt(a);
        document.getElementById("vgtb").value = c;
        var d = document.getElementById("vgtot").value;
        var tot = parseInt(d)-parseInt(a);
        document.getElementById("vgtot").value = tot;
    }
    //Bank Section
    if(fromName == "Bank" && toName == "Ranga"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("btr").value;
        var c = parseInt(b)-parseInt(a);
        document.getElementById("btr").value = c;
        var d = document.getElementById("btot").value;
        var tot = parseInt(d)-parseInt(a);
        document.getElementById("btot").value = tot;
    }
    if(fromName == "Bank" && toName == "Visnu"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("btvis").value;
        var c = parseInt(b)-parseInt(a);
        document.getElementById("btvis").value = c;
        var d = document.getElementById("btot").value;
        var tot = parseInt(d)-parseInt(a);
        document.getElementById("btot").value = tot;
    }
    if(fromName == "Bank" && toName == "Divakar"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("btd").value;
        var c = parseInt(b)-parseInt(a);
        document.getElementById("btd").value = c;
        var d = document.getElementById("btot").value;
        var tot = parseInt(d)-parseInt(a);
        document.getElementById("btot").value = tot;
    }
    if(fromName == "Bank" && toName == "Vignesh"){
        var a = document.getElementById("tempAmount").value;
        var b = document.getElementById("btvig").value;
        var c = parseInt(b)-parseInt(a);
        document.getElementById("btvig").value = c;
        var d = document.getElementById("btot").value;
        var tot = parseInt(d)-parseInt(a);
        document.getElementById("btot").value = tot;
    }
}