$(document).ready(function(){
    
    $("#btnConsulta").click(function(){
    //Para probar el boton
    //alert("hola"); 
    $.ajax({
        url:"consulta.php",
        type:"POST",
        dataType:"json",
        success:function(data){
            console.log(data);

        //CREACION DE OBJETOS

       var n1=document.getElementById('nombre1');
       n1.textContent=data[0].nombre;
       var a1=document.getElementById('apellido1');
       a1.textContent=data[0].apellido;
       var c1=document.getElementById('cedula1');
       c1.textContent=data[0].cedula;
       var e1=document.getElementById('edad1');
       e1.textContent=data[0].edad;
       
       var n2=document.getElementById('nombre2');
       n2.textContent=data[1].nombre;
       var a2=document.getElementById('apellido2');
       a2.textContent=data[1].apellido;
       var c2=document.getElementById('cedula2');
       c2.textContent=data[1].cedula;
       var e2=document.getElementById('edad2');
       e2.textContent=data[1].edad; 

       var n3=document.getElementById('nombre3');
       n3.textContent=data[2].nombre;
       var a3=document.getElementById('apellido3');
       a3.textContent=data[2].apellido;
       var c3=document.getElementById('cedula3');
       c3.textContent=data[2].cedula;
       var e3=document.getElementById('edad3');
       e3.textContent=data[2].edad; 

       var n4=document.getElementById('nombre4');
       n4.textContent=data[3].nombre;
       var a4=document.getElementById('apellido4');
       a4.textContent=data[3].apellido;
       var c4=document.getElementById('cedula4');
       c4.textContent=data[3].cedula;
       var e4=document.getElementById('edad4');
       e4.textContent=data[3].edad; 
    
        }
        })
    });
});