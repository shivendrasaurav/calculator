function write0(){
    var a=document.getElementById("calc_disp");
    a.value+='0';
}
function write1(){
    var a=document.getElementById("calc_disp");
    a.value+='1';
}
function write2(){
    var a=document.getElementById("calc_disp");
    a.value+='2';
}
function write3(){
    var a=document.getElementById("calc_disp");
    a.value+='3';
}
function write4(){
    var a=document.getElementById("calc_disp");
    a.value+='4';
}
function write5(){
    var a=document.getElementById("calc_disp");
    a.value+='5';
}
function write6(){
    var a=document.getElementById("calc_disp");
    a.value+='6';
}
function write7(){
    var a=document.getElementById("calc_disp");
    a.value+='7';
}
function write8(){
    var a=document.getElementById("calc_disp");
    a.value+='8';
}
function write9(){
    var a=document.getElementById("calc_disp");
    a.value+='9';
}
function writeadd(){
    var a=document.getElementById("calc_disp");
    a.value+='+';
}
function writesub(){
    var a=document.getElementById("calc_disp");
    a.value+='-';
}
function writeproduct(){
    var a=document.getElementById("calc_disp");
    a.value+='*';
}
function writedivide(){
    var a=document.getElementById("calc_disp");
    a.value+='/';
}
function calculate(){
    var a=document.getElementById("calc_disp").value;
    var b=eval(a);
    alert(b);
}