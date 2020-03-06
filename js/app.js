

const calculadora = {

  init:function(){
    this.asignacionTamaño();
    this.asignarTeclasEnPantalla();
    document.getElementById("on").onclick=this.teclaOn;
    document.getElementById("punto").onclick=this.teclaPunto;
    document.getElementById("sign").onclick=this.teclaSignoNegativo;
    this.asignacionOperador();
    document.getElementsByClassName("teclado")[0].addEventListener("click",this.numero1);
    document.getElementById("igual").addEventListener("click",this.numero2);
    document.getElementById("igual").onclick=this.teclaIgual2;  
    document.getElementsByClassName("teclado")[0].addEventListener("click",this.pantallaEnBlanco)
  },

    teclasEnPantalla:function(teclasNumeros){
      let teclas=teclasNumeros;
      let pantalla = document.getElementById("display").firstChild;
      if (pantalla.nodeValue==="0") {
        pantalla.nodeValue=teclas;
      }
      else if(pantalla.length>7){
        let pantalla2=pantalla.nodeValue;
        pantalla.nodeValue=pantalla2
      }
      else{
             pantalla.nodeValue+=teclas;
       }
    },

    teclaEnPantalla:function(event){
      calculadora.teclasEnPantalla(event.target.alt)
    },

    asignarTeclasEnPantalla:function(){
      const cero=document.getElementById("0")
      const uno=document.getElementById("1");
      const dos=document.getElementById("2");
      const tres=document.getElementById("3");
      const cuatro=document.getElementById("4");
      const cinco=document.getElementById("5");
      const seis=document.getElementById("6");
      const siete=document.getElementById("7");
      const ocho=document.getElementById("8");
      const nueve=document.getElementById("9");
      let teclas = [cero,uno,dos,tres,cuatro,cinco,seis,siete,ocho,nueve];
      for (let i = 0; i < teclas.length; i++) {
        teclas[i].onclick=this.teclaEnPantalla
      }
    },   

  teclaDisminuirTamaño:function(event){    
    event.target.classList.add("disminuir")
  },
  teclaVolverTamaño:function(event){
    event.target.classList.remove("disminuir")
  },

  asignacionTamaño:function(){
    const teclas = document.querySelectorAll("img");
    for (let i = 0; i < teclas.length; i++) {
      teclas[i].onmousedown=this.teclaDisminuirTamaño;
      teclas[i].onmouseup=this.teclaVolverTamaño     
    }
  },
 
  teclaOn:function(){
    let pantalla = document.getElementById("display").firstChild;
    pantalla.nodeValue = "0"
  },

  teclaPunto:function(){
    let pantalla = document.getElementById("display").firstChild;
    for (var i = 0; i < pantalla.nodeValue.length; i++) {
      if (pantalla.nodeValue.includes(".")){
      pantalla.nodeValue+=""}
      else if(pantalla.length>7){
      let pantalla2=pantalla.nodeValue
      pantalla.nodeValue=pantalla2}
      else{pantalla.nodeValue += "."}
    }
  },

  teclaSignoNegativo:function(){
   let pantalla = document.getElementById("display").firstChild;
    for (var i = 0; i < pantalla.nodeValue.length; i++) {
      if (pantalla.nodeValue==="0"){
      pantalla.nodeValue+=""}
      else if (pantalla.nodeValue.includes("-")){
      pantalla.nodeValue+=""}
      else{
        var numeros=pantalla.nodeValue;
        pantalla.nodeValue="-"+numeros}
    }
  },

  numero:"",
  numero1:function(event){
    let pantalla = document.getElementById("display").firstChild;
    switch (event.target.alt) {
      case "mas":
      calculadora.numero=pantalla.nodeValue;
      break;
      case "menos":
      calculadora.numero=pantalla.nodeValue;
      break;
      case "por":
      calculadora.numero=pantalla.nodeValue;
      break;
      case "dividido":
      calculadora.numero=pantalla.nodeValue;
      break
    }

    return calculadora.numero
  },


  operador:"",

  obtenerOperador:function(event){

    switch (event.target.alt) {
      case "mas":
      operador="mas"
      break;
      case "por":
      operador="por"
      break;
      case "menos":
      operador="menos"
      break;
      case "dividido":
      operador="dividido"
      break}

    return operador
  },

  asignacionOperador:function(){
    const teclasOperadores = document.querySelectorAll("img[class^='tecla ']");
    for (var i = 0; i < teclasOperadores.length; i++) {
      teclasOperadores[i].onclick=this.obtenerOperador;
    }
  },

  varResultado:"",


  resultado:function(numero1,operador){  
    let resultado;
    let resultadoLimitado;   
    switch (operador) {
      case "mas":
      calculadora.varResultado=Number(numero1)+Number(calculadora.varNumero2)
      break;
      case "menos":
      calculadora.varResultado=Number(numero1)-Number(calculadora.varNumero2)
      break;
      case "por":
      calculadora.varResultado=Number(numero1)*Number(calculadora.varNumero2)
      break;
      case "dividido":
      calculadora.varResultado=Number(numero1)/Number(calculadora.varNumero2)
      break
    }  
    resultado = calculadora.varResultado;
    resultadoLimitado=resultado.toString().substr(0,8);
    return resultadoLimitado
    },


  resultado2:function(funcionnumero1,funcionoperador){
  return  calculadora.resultado(calculadora.numero1(event),calculadora.obtenerOperador(event))
  },

  varNumero2:"",

  numero2:function(){
    let pantalla = document.getElementById("display").firstChild;
    calculadora.varNumero2=pantalla.nodeValue;
    return calculadora.varNumero2
  },

  teclaIgual:function(resultado){
    var pantalla = document.getElementById("display").firstChild;
      pantalla.nodeValue=resultado
  },

  teclaIgual2:function(){
    calculadora.teclaIgual(calculadora.resultado2());
  },

    pantallaEnBlanco:function(event){
      let pantalla = document.getElementById("display").firstChild;
      switch (event.target.alt) {
          case "mas":
          pantalla.nodeValue=""
          break;
          case "menos":
          pantalla.nodeValue=""
          break;
          case"por":
          pantalla.nodeValue=""
          break;
          case "dividido":
          pantalla.nodeValue=""
          break
      }
    }
}
calculadora.init()
