//Clear Amount Field
function clearField() {
    document.getElementById("tempAmount").value = "";
}

//Validate Amount Field
function checkTempAmount(){
    if(document.getElementById("tempAmount").value == ""){
        alert("Enter amount correctly!");
    }
}

//Addition Section
function addP1() {
    if(!checkTempAmount()){
        var fromName = document.getElementById("from").value;
        if(fromName == "Player 2"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p2tp1").value;
            var c = parseInt(a)+parseInt(b);
            document.getElementById("p2tp1").value = c;
            p2Total();
        }
        if(fromName == "Player 3"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p3tp1").value;
            var c = parseInt(a)+parseInt(b);
            document.getElementById("p3tp1").value = c;
            p3Total();
        }
        if(fromName == "Player 4"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p4tp1").value;
            var c = parseInt(a)+parseInt(b);
            document.getElementById("p4tp1").value = c;
            p4Total();
        }
    }
    clearField();
}
function addP2() {
    if(!checkTempAmount()){
        var fromName = document.getElementById("from").value;
        if(fromName == "Player 1"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p1tp2").value;
            var c = parseInt(a)+parseInt(b);
            document.getElementById("p1tp2").value = c;
            p1Total();
        }
        if(fromName == "Player 3"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p3tp2").value;
            var c = parseInt(a)+parseInt(b);
            document.getElementById("p3tp2").value = c;
            p3Total();
        }
        if(fromName == "Player 4"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p4tp2").value;
            var c = parseInt(a)+parseInt(b);
            document.getElementById("p4tp2").value = c;
            p4Total();
        }
    }
    clearField();
}
function addP3() {
    if(!checkTempAmount()){
        var fromName = document.getElementById("from").value;
        if(fromName == "Player 1"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p1tp3").value;
            var c = parseInt(a)+parseInt(b);
            document.getElementById("p1tp3").value = c;
            p1Total();
        }
        if(fromName == "Player 2"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p2tp3").value;
            var c = parseInt(a)+parseInt(b);
            document.getElementById("p2tp3").value = c;
            p2Total();
        }
        if(fromName == "Player 4"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p4tp3").value;
            var c = parseInt(a)+parseInt(b);
            document.getElementById("p4tp3").value = c;
            p4Total();
        }
    }
    clearField();
}
function addP4() {
    if(!checkTempAmount()){
        var fromName = document.getElementById("from").value;
        if(fromName == "Player 1"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p1tp4").value;
            var c = parseInt(a)+parseInt(b);
            document.getElementById("p1tp4").value = c;
            p1Total();
        }
        if(fromName == "Player 2"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p2tp4").value;
            var c = parseInt(a)+parseInt(b);
            document.getElementById("p2tp4").value = c;
            p2Total();
        }
        if(fromName == "Player 3"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p3tp4").value;
            var c = parseInt(a)+parseInt(b);
            document.getElementById("p3tp4").value = c;
            p3Total();
        }
    }
    clearField();
}
function addBank() {
    if(!checkTempAmount()){
        var fromName = document.getElementById("from").value;
        if(fromName == "Player 1"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p1tb").value;
            var c = parseInt(a)+parseInt(b);
            document.getElementById("p1tb").value = c;
            p1Total();
        }
        if(fromName == "Player 2"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p2tb").value;
            var c = parseInt(a)+parseInt(b);
            document.getElementById("p2tb").value = c;
            p2Total();
        }
        if(fromName == "Player 3"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p3tb").value;
            var c = parseInt(a)+parseInt(b);
            document.getElementById("p3tb").value = c;
            p3Total();
        }
        if(fromName == "Player 4"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p4tb").value;
            var c = parseInt(a)+parseInt(b);
            document.getElementById("p4tb").value = c;
            p4Total();
        }
    }
    clearField();
}

function addMortage() {
    if(!checkTempAmount()){
        var fromName = document.getElementById("from").value;
        if(fromName == "Player 1"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p1m").value;
            var c = parseInt(a)+parseInt(b);
            document.getElementById("p1m").value = c;
            p1Total();
        }
        if(fromName == "Player 2"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p2m").value;
            var c = parseInt(a)+parseInt(b);
            document.getElementById("p2m").value = c;
            p2Total();
        }
        if(fromName == "Player 3"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p3m").value;
            var c = parseInt(a)+parseInt(b);
            document.getElementById("p3m").value = c;
            p3Total();
        }
        if(fromName == "Player 4"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p4m").value;
            var c = parseInt(a)+parseInt(b);
            document.getElementById("p4m").value = c;
            p4Total();
        }
    }
    clearField();
}

function addCash() {
    if(!checkTempAmount()){
        var fromName = document.getElementById("from").value;
        if(fromName == "Player 1"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p1c").value;
            var c = parseInt(a)+parseInt(b);
            document.getElementById("p1c").value = c;
            p1Total();
        }
        if(fromName == "Player 2"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p2c").value;
            var c = parseInt(a)+parseInt(b);
            document.getElementById("p2c").value = c;
            p2Total();
        }
        if(fromName == "Player 3"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p3c").value;
            var c = parseInt(a)+parseInt(b);
            document.getElementById("p3c").value = c;
            p3Total();
        }
        if(fromName == "Player 4"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p4c").value;
            var c = parseInt(a)+parseInt(b);
            document.getElementById("p4c").value = c;
            p4Total();
        }
    }
    clearField();
}

//Subtraction Section
function subP1() {
    if(!checkTempAmount()){
        var fromName = document.getElementById("from").value;
        if(fromName == "Player 2"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p2tp1").value;
            var c = parseInt(b)-parseInt(a);
            if(parseInt(c)<0){
                var x = document.getElementById("p1tp2").value;
                var y = parseInt(c) * -1;
                document.getElementById("p2tp1").value = 0;
                document.getElementById("p1tp2").value = parseInt(x)+parseInt(y);
                p2Total();
                p1Total();
            }
            else{
                document.getElementById("p2tp1").value = c;
                p2Total();
            }
        }
        if(fromName == "Player 3"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p3tp1").value;
            var c = parseInt(b)-parseInt(a);
            if(parseInt(c)<0){
                var x = document.getElementById("p1tp3").value;
                var y = parseInt(c) * -1;
                document.getElementById("p3tp1").value = 0;
                document.getElementById("p1tp3").value = parseInt(x)+parseInt(y);
                p3Total();
                p1Total();
            }
            else{
                document.getElementById("p3tp1").value = c;
                p3Total();
            }
        }
        if(fromName == "Player 4"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p4tp1").value;
            var c = parseInt(b)-parseInt(a);
            if(parseInt(c)<0){
                var x = document.getElementById("p1tp4").value;
                var y = parseInt(c) * -1;
                document.getElementById("p4tp1").value = 0;
                document.getElementById("p1tp4").value = parseInt(x)+parseInt(y);
                p4Total();
                p1Total();
            }
            else{
                document.getElementById("p4tp1").value = c;
                p4Total();
            }
        }
    }
    clearField();
}
function subP2() {
    if(!checkTempAmount()){
        var fromName = document.getElementById("from").value;
        if(fromName == "Player 1"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p1tp2").value;
            var c = parseInt(b)-parseInt(a);
            if(parseInt(c)<0){
                var x = document.getElementById("p2tp1").value;
                var y = parseInt(c) * -1;
                document.getElementById("p1tp2").value = 0;
                document.getElementById("p2tp1").value = parseInt(x)+parseInt(y);
                p1Total();
                p2Total();
            }
            else{
                document.getElementById("p1tp2").value = c;
                p1Total();
            }
        }
        if(fromName == "Player 3"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p3tp2").value;
            var c = parseInt(b)-parseInt(a);
            if(parseInt(c)<0){
                var x = document.getElementById("p2tp3").value;
                var y = parseInt(c) * -1;
                document.getElementById("p3tp2").value = 0;
                document.getElementById("p2tp3").value = parseInt(x)+parseInt(y);
                p3Total();
                p2Total();
            }
            else{
                document.getElementById("p3tp2").value = c;
                p3Total();
            }
        }
        if(fromName == "Player 4"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p4tp2").value;
            var c = parseInt(b)-parseInt(a);
            if(parseInt(c)<0){
                var x = document.getElementById("p2tp4").value;
                var y = parseInt(c) * -1;
                document.getElementById("p4tp2").value = 0;
                document.getElementById("p2tp4").value = parseInt(x)+parseInt(y)
                p4Total();
                p2Total();
            }
            else{
                document.getElementById("p4tp2").value = c;
                p4Total();
            }
        }
    }
    clearField();
}
function subP3() {
    if(!checkTempAmount()){
        var fromName = document.getElementById("from").value;
        if(fromName == "Player 1"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p1tp3").value;
            var c = parseInt(b)-parseInt(a);
            if(parseInt(c)<0){
                var x = document.getElementById("p3tp1").value;
                var y = parseInt(c) * -1;
                document.getElementById("p1tp3").value = 0;
                document.getElementById("p3tp1").value = parseInt(x)+parseInt(y);
                p1Total();
                p3Total();
            }
            else{
                document.getElementById("p1tp3").value = c;
                p1Total();
            }
        }
        if(fromName == "Player 2"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p2tp3").value;
            var c = parseInt(b)-parseInt(a);
            if(parseInt(c)<0){
                var x = document.getElementById("p3tp2").value;
                var y = parseInt(c) * -1;
                document.getElementById("p2tp3").value = 0;
                document.getElementById("p3tp2").value = parseInt(x)+parseInt(y);
                p2Total();
                p3Total();
            }
            else{
                document.getElementById("p2tp3").value = c;
                p2Total();
            }
        }
        if(fromName == "Player 4"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p4tp3").value;
            var c = parseInt(b)-parseInt(a);
            if(parseInt(c)<0){
                var x = document.getElementById("p3tp4").value;
                var y = parseInt(c) * -1;
                document.getElementById("p4tp3").value = 0;
                document.getElementById("p3tp4").value = parseInt(x)+parseInt(y);
                p4Total();
                p3Total();
            }
            else{
                document.getElementById("p4tp3").value = c;
                p4Total();
            }
        }
    }
    clearField();
}
function subP4() {
    if(!checkTempAmount()){
        var fromName = document.getElementById("from").value;
        if(fromName == "Player 1"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p1tp4").value;
            var c = parseInt(b)-parseInt(a);
            if(parseInt(c)<0){
                var x = document.getElementById("p4tp1").value;
                var y = parseInt(c) * -1;
                document.getElementById("p1tp4").value = 0;
                document.getElementById("p4tp1").value = parseInt(x)+parseInt(y);
                p1Total();
                p4Total();
            }
            else{
                document.getElementById("p1tp4").value = c;
                p1Total();
            }
        }
        if(fromName == "Player 2"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p2tp4").value;
            var c = parseInt(b)-parseInt(a);
            if(parseInt(c)<0){
                var x = document.getElementById("p4tp2").value;
                var y = parseInt(c) * -1;
                document.getElementById("p2tp4").value = 0;
                document.getElementById("p4tp2").value = parseInt(x)+parseInt(y);
                p2Total();
                p4Total();
            }
            else{
                document.getElementById("p2tp4").value = c;
                p2Total();
            }
        }
        if(fromName == "Player 3"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p3tp4").value;
            var c = parseInt(b)-parseInt(a);
            if(parseInt(c)<0){
                var x = document.getElementById("p4tp3").value;
                var y = parseInt(c) * -1;
                document.getElementById("p3tp4").value = 0;
                document.getElementById("p4tp3").value = parseInt(x)+parseInt(y);
                p3Total();
                p4Total();
            }
            else{
                document.getElementById("p3tp4").value = c;
                p3Total();
            }
        }
    }
    clearField();
}
function subBank() {
    if(!checkTempAmount()){
        var fromName = document.getElementById("from").value;
        if(fromName == "Player 1"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p1tb").value;
            var c = parseInt(b)-parseInt(a);
            document.getElementById("p1tb").value = c;
            p1Total();
        }
        if(fromName == "Player 2"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p2tb").value;
            var c = parseInt(b)-parseInt(a);
            document.getElementById("p2tb").value = c;
            p2Total();
        }
        if(fromName == "Player 3"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p3tb").value;
            var c = parseInt(b)-parseInt(a);
            document.getElementById("p3tb").value = c;
            p3Total();
        }
        if(fromName == "Player 4"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p4tb").value;
            var c = parseInt(b)-parseInt(a);
            document.getElementById("p4tb").value = c;
            p4Total();
        }
    }
    clearField();
}

function subMortage() {
    if(!checkTempAmount()){
        var fromName = document.getElementById("from").value;
        if(fromName == "Player 1"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p1m").value;
            var c = parseInt(b)-parseInt(a);
            document.getElementById("p1m").value = c;
            p1Total();
        }
        if(fromName == "Player 2"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p2m").value;
            var c = parseInt(b)-parseInt(a);
            document.getElementById("p2m").value = c;
            p2Total();
        }
        if(fromName == "Player 3"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p3m").value;
            var c = parseInt(b)-parseInt(a);
            document.getElementById("p3m").value = c;
            p3Total();
        }
        if(fromName == "Player 4"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p4m").value;
            var c = parseInt(b)-parseInt(a);
            document.getElementById("p4m").value = c;
            p4Total();
        }
    }
    clearField();
}

function subCash() {
    if(!checkTempAmount()){
        var fromName = document.getElementById("from").value;
        if(fromName == "Player 1"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p1c").value;
            var c = parseInt(b)-parseInt(a);
            document.getElementById("p1c").value = c;
            p1Total();
        }
        if(fromName == "Player 2"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p2c").value;
            var c = parseInt(b)-parseInt(a);
            document.getElementById("p2c").value = c;
            p2Total();
        }
        if(fromName == "Player 3"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p3c").value;
            var c = parseInt(b)-parseInt(a);
            document.getElementById("p3c").value = c;
            p3Total();
        }
        if(fromName == "Player 4"){
            var a = document.getElementById("tempAmount").value;
            var b = document.getElementById("p4c").value;
            var c = parseInt(b)-parseInt(a);
            document.getElementById("p4c").value = c;
            p4Total();
        }
    }
    clearField();
}

//Player 1 Total
function p1Total(){
    var a = document.getElementById("p1tp2").value;
    var b = document.getElementById("p1tp3").value;
    var c = document.getElementById("p1tp4").value;
    var d = document.getElementById("p1tb").value;
    var tot = parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d);
    document.getElementById("p1tot").value = tot;
    document.getElementById("p1tl").value = tot;
    toDhiwaal();
}

//Player 2 Total
function p2Total(){
    var a = document.getElementById("p2tp1").value;
    var b = document.getElementById("p2tp3").value;
    var c = document.getElementById("p2tp4").value;
    var d = document.getElementById("p2tb").value;
    var tot = parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d);
    document.getElementById("p2tot").value = tot;
    document.getElementById("p2tl").value = tot;
    toDhiwaal();
}

//Player 3 Total
function p3Total(){
    var a = document.getElementById("p3tp1").value;
    var b = document.getElementById("p3tp2").value;
    var c = document.getElementById("p3tp4").value;
    var d = document.getElementById("p3tb").value;
    var tot = parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d);
    document.getElementById("p3tot").value = tot;
    document.getElementById("p3tl").value = tot;
    toDhiwaal();
}

//Player 4 Total
function p4Total(){
    var a = document.getElementById("p4tp1").value;
    var b = document.getElementById("p4tp2").value;
    var c = document.getElementById("p4tp3").value;
    var d = document.getElementById("p4tb").value;
    var tot = parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d);
    document.getElementById("p4tot").value = tot;
    document.getElementById("p4tl").value = tot;
    toDhiwaal();
}

//To Dhiwaal
function toDhiwaal(){
    var a = document.getElementById("p1m").value;
    var b = document.getElementById("p2m").value;
    var c = document.getElementById("p3m").value;
    var d = document.getElementById("p4m").value;
    var a1 = document.getElementById("p1c").value;
    var b1 = document.getElementById("p2c").value;
    var c1 = document.getElementById("p3c").value;
    var d1 = document.getElementById("p4c").value;
    var w = document.getElementById("p1tl").value;
    var x = document.getElementById("p2tl").value;
    var y = document.getElementById("p3tl").value;
    var z = document.getElementById("p4tl").value;
    var p1Bal = (parseInt(a)+parseInt(a1)) - parseInt(w);
    var p2Bal = (parseInt(b)+parseInt(b1)) - parseInt(x);
    var p3Bal = (parseInt(c)+parseInt(c1)) - parseInt(y);
    var p4Bal = (parseInt(d)+parseInt(d1)) - parseInt(z);
    document.getElementById("p1bal").value = p1Bal;
    document.getElementById("p2bal").value = p2Bal;
    document.getElementById("p3bal").value = p3Bal;
    document.getElementById("p4bal").value = p4Bal;
    var t1 = document.getElementById("p1bal").value;
    var t2 = document.getElementById("p2bal").value;
    var t3 = document.getElementById("p3bal").value;
    var t4 = document.getElementById("p4bal").value;
    if(t1<0 || t2<0 || t3<0 || t4<0){
        if(t1<0){
            document.getElementById("p1bal").style.color = "red";
            alert("Player 1 Dhiwaal!!!");
        }
        if(t2<0){
            document.getElementById("p2bal").style.color = "red";
            alert("Player 2 Dhiwaal!!!");
        }
        if(t3<0){
            document.getElementById("p3bal").style.color = "red";
            alert("Player 3 Dhiwaal!!!");
        }
        if(t4<0){
            document.getElementById("p4bal").style.color = "red";
            alert("Player 4 Dhiwaal!!!");
        }
        alert("Game Over");
    }
}