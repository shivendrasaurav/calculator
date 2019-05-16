var op='';
function writeinbracket(){
    var a=document.getElementById("calc_disp");
    a.value+='(';
    op+='(';
}
function writeoutbracket(){
    var a=document.getElementById("calc_disp");
    a.value+=')';
    op+=')';
}
function write0(){
    var a=document.getElementById("calc_disp");
    a.value+='0';
    op+='0';
}
function write1(){
    var a=document.getElementById("calc_disp");
    a.value+='1';
    op+='1';
}
function write2(){
    var a=document.getElementById("calc_disp");
    a.value+='2';
    op+='2';
}
function write3(){
    var a=document.getElementById("calc_disp");
    a.value+='3';
    op+='3';
}
function write4(){
    var a=document.getElementById("calc_disp");
    a.value+='4';
    op+='4';
}
function write5(){
    var a=document.getElementById("calc_disp");
    a.value+='5';
    op+='5';
}
function write6(){
    var a=document.getElementById("calc_disp");
    a.value+='6';
    op+='6';
}
function write7(){
    var a=document.getElementById("calc_disp");
    a.value+='7';
    op+='7';
}
function write8(){
    var a=document.getElementById("calc_disp");
    a.value+='8';
    op+='8';
}
function write9(){
    var a=document.getElementById("calc_disp");
    a.value+='9';
    op+='9';
}
function writeadd(){
    var a=document.getElementById("calc_disp");
    a.value+='+';
    op+='+';
}
function writesub(){
    var a=document.getElementById("calc_disp");
    a.value+='-';
    op+='-';
}
function writeproduct(){
    var a=document.getElementById("calc_disp");
    a.value+='*';
    op+='*';
}
function writedivide(){
    var a=document.getElementById("calc_disp");
    a.value+='/';
    op+='/';
}
function writeclear(){
    var a=document.getElementById("calc_disp");
    a.value='';
    op='';
}
function writedecimal(){
    var a=document.getElementById("calc_disp");
    a.value='.';
    op='.';
}
function writedelete(){
    var a=document.getElementById("calc_disp");
    var c=document.getElementById("calc_disp").value;
    var d=c.substring(0, c.length-1);
    a.value=d;
    op=d;
}
function calculate(){
    var b=eval(op);
    op=b;
    document.getElementById("calc_disp").value=b;
}
