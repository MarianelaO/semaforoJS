
    
    function cambiarColorLuzSemaforo(id,prender){
        var color='gray';
        if(prender==true) color=id;
        document.getElementById(id).style.backgroundColor = color;
    }
        cambiarColorLuzSemaforo('red',true);
        cambiarColorLuzSemaforo('yellow',!true);
        cambiarColorLuzSemaforo('green',!true);
        
    //funcion que cambia solo de color
    //setInterval(onclickBotonCambiar,2000);
    
    var estado=0;
    function onclickBotonCambiar(){
        console.log(estado)
        
        switch(estado){
            case 0:
                cambiarColorLuzSemaforo('red',true);
                cambiarColorLuzSemaforo('yellow',!true);
                cambiarColorLuzSemaforo('green',!true);
                break;
            case 1:
                cambiarColorLuzSemaforo('red',true);
                cambiarColorLuzSemaforo('yellow',true);
                cambiarColorLuzSemaforo('green',!true);
                break;
            case 2:
                cambiarColorLuzSemaforo('red',!true);
                cambiarColorLuzSemaforo('yellow',!true);
                cambiarColorLuzSemaforo('green',true);
                break;
        
            case 3:
                cambiarColorLuzSemaforo('red',!true);
                cambiarColorLuzSemaforo('yellow',true);
                cambiarColorLuzSemaforo('green',!true);
                break;
            default:
                cambiarColorLuzSemaforo('red',!true);
                cambiarColorLuzSemaforo('yellow',!true);
                cambiarColorLuzSemaforo('green',!true);
            break;
            }
            estado++;
            //if(estado>3) estado=0;
            estado &=3;
    }

    function cambiarTextoBotonAuto(texto){
        document.querySelector('#botonAuto').innerHTML=texto;
    
    }
    cambiarTextoBotonAuto('Modo Automatico');

    function ocultarBotonManual(ocultar){
         document.querySelector('#botonCambiar').style.display=ocultar ?'none':'block';
        
         cambiarTextoBotonAuto(ocultar?'Modo Manual':'Modo Automatico');

    }
    
    
    var modoAutomatico=false;
    var refIntervalAuto;
    function onclickBotonAuto (){
        modoAutomatico=!modoAutomatico;
        console.log(modoAutomatico);
        if(modoAutomatico){
            
        refIntervalAuto=setInterval(onclickBotonCambiar,2000);
           
            ocultarBotonManual(true)
        }
        else{
            clearInterval(refIntervalAuto);
      
            ocultarBotonManual(false)
            
        }
    }


