/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var cash = prompt("Cuanto dinero llevas?");

var apuestas=new Array();
var rojos=[1,3,5,7,9,12,14,16,18,19,21,22,25,27,30,32,34,36];
var negros=[2,4,6,8,10,11,13,15,17,20,23,24,26,28,29,31,33,35];
var columna1=[1,4,7,10,13,16,19,22,25,28,31,34];
var columna2=[2,5,8,11,14,17,20,23,26,29,32,35];
var columna3=[3,6,9,12,15,18,21,24,27,30,33,36];

function guardaApuesta(apuesta){
    var actual=0;
    var mensaje;
    if(apuestas!=undefined && apuestas.length!=0){
        apuestas.forEach(function(value){
            if (value[0]==apuesta) {actual+=parseInt(value[1]);}
        });
    }
   (actual==0)? mensaje="Tienes "+cash+" euros\n"+"Cuanto apuestas a "+apuesta+"?" : 
                mensaje = "Tienes "+cash+"euros \nLlevas "+actual+" euros apostado a "+apuesta+"\nCuanto incrementas la apuesta ?";
   var dinero=prompt(mensaje);
   if (dinero!="") {apuestas.push(new Array(apuesta,dinero));
   cash-=parseInt(dinero);}
}

function calcula(){
    var rnd = Math.floor(Math.random() * 37);
//    alert("Random "+rnd+" \nApuestas "+apuestas);
    if(apuestas!=undefined && apuestas.length!=0){
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
                    if (columna1.indexOf(rnd)!=-1) resultado+=value[1]*2;
                    break;
                case value[0]=="Docena2":
                    if (columna2.indexOf(rnd)!=-1) resultado+=value[1]*2;
                    break;
                case value[0]=="Docena3":
                    if (columna3.indexOf(rnd)!=-1) resultado+=value[1]*2;
                    break;
                
                
            }
        });
        alert("Has obtenido: "+resultado+"\nSumado a tu dinero tienes: "+(cash+resultado)+" euros\nVuelve a jugar");
        apuestas=new Array();
        location.reload();
    }else{
        alert("No hay apuestas");
    }

}
