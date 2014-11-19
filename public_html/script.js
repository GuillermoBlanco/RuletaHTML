/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var apuestas=new Array();
var rojos=[1,3,5,7,9,12,14,16,18,19,21,22,25,27,30,32,34,36];
var negros=[2,4,6,8,10,11,13,15,17,20,23,24,26,28,29,31,33,35];

function guardaApuesta(apuesta){
   var dinero=prompt("Cuanto apuestas a "+apuesta+"?");
   apuestas.push(new Array(apuesta,dinero));
}

function calcula(){
    var rnd = Math.floor(Math.random() * 37);
//    alert("Random "+rnd+" \nApuestas "+apuestas);
    if(apuestas!=undefined){
        var resultado=0;
        apuestas.forEach(function(value){
//            alert("Value "+value[0].length);
            switch (true){
                case value[0]>=0 && value[0]<=36:
                    if (rnd==value[0])resultado+=(35*value[1]);
                    break;
                case value[0]=="1-18":
                    if (rnd>=0 && rnd<=18) resultado+=value[1];
                    else if (rnd==0) resultado+=value[1]/2;
                    break;
                case value[0]=="19-36":
                    if (rnd>18 && rnd<=36) resultado+=value[1];
                    else if (rnd==0) resultado+=value[1]/2;
                    break; 
                case value[0]=="PAR":
                    if (rnd%2==0) resultado+=value[1];
                    else resultado+=value[1]/2;
                    break; 
                case value[0]=="IMPAR":
                    if (rnd%2==0) resultado+=value[1];
                    else resultado+=value[1]/2;
                    break; 
                case value[0]=="ROJO":
                    if (rojos.indexOf(rnd)!=-1) resultado+=value[1];
                    else resultado+=value[1]/2;
                    break; 
                case value[0]=="NEGRO":
                    if (negros.indexOf(rnd)!=-1) resultado+=value[1];
                    else resultado+=value[1]/2;
                    break;
                case value[0]=="Docena1":
                    if (rnd>0 && rnd<=12) resultado+=value[1]*2;
                    break;
                case value[0]=="Docena2":
                    if (rnd>=13 && rnd<=24) resultado+=value[1]*2;
                    break;
                case value[0]=="Docena3":
                    if (rnd>=25 && rnd<=36) resultado+=value[1]*2;
                    break;
                
                
            }
        });
    }
}
