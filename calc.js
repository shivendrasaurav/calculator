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
    a.value+='.';
    op+='.';
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
//    if(op==="2/7")
//        b="Happy Birthday Suhani";
    op=b;
    document.getElementById("calc_disp").value=b;
}

function emptyword(){
    var a=document.getElementById("calc_disp");
    a.value+='';
    op+='';
}

function keypress(){
    var x = event.keyCode;

    if(x == 48 || x == 96)
        write0();

    else if(x == 49 || x == 97)
        write1();

    else if(x == 50 || x == 98)
        write2();

    else if(x == 51 || x == 99)
        write3();

    else if(x == 52 || x == 100)
        write4();

    else if(x == 53 || x == 101)
        write5();

    else if(x == 54 || x == 102)
        write6();

    else if(x == 55 || x == 103)
        write7();

    else if(x == 56 || x == 104)
        write8();

    else if(x == 57 || x == 105)
        write9();

    else if(x == 107)
        writeadd();

    else if(x == 109)
        writesub();

    else if(x == 106)
        writeproduct();

    else if(x == 111)
        writedivide();

    else if(x == 219)
        writeinbracket();

    else if(x == 221)
        writeoutbracket();

    else if(x == 67)
        writeclear();

    else if(x == 8 || x == 46)
        writedelete();

    else if(x == 190 || x == 110)
        writedecimal();

    else if(x == 187 || x == 13){
        calculate();
        output();
    }
    else{
        emptyword();
    }

}