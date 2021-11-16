function alertasColor(parametro){
    var elemt = parametro;
    elemt.style="background-color: rgb(251, 250, 174)";
}
function defectoColor(parametro){
    var elemt = parametro;
    elemt.style="background-color: white";
}

function valcliente(){
    var id=0;
    var nombre, identidad, direccion, email,telefono;

    id= parseInt(document.cliente.txtid.value,10);
    nombre= document.getElementById("txtnombre").value;
    identidad= document.getElementById("txtidentidad").value;
    direccion= document.getElementById("txtdireccion").value;
    telefono= document.getElementById("txttelefono").value;
    email= document.getElementById("txtemail").value;

    
    defectoColor(document.getElementById("txtnombre"));
    defectoColor(document.getElementById("txtidentidad"));
    defectoColor(document.getElementById("txtdireccion"));
    defectoColor(document.getElementById("txttelefono"));
    defectoColor(document.getElementById("txtemail"));


    if(nombre==""){
        alert("Debe de ingresar un Nombre");
        alertasColor(document.getElementById("txtnombre"));
    }
    else if(identidad==""){ 
            alert("Debe de ingresar un numero de identidad o su pasaporte");
            alertasColor(document.getElementById("txtidentidad"));
        
    }
    else if(direccion==""){ 
        alert("Debe de ingresar su direccion de domicilio.");
        alertasColor(document.getElementById("txtdireccion"));
    
    }
    else if(telefono==""){
        alert("Debe de ingresar su numero de telefono");
        alertasColor(document.getElementById("txttelefono"));
        

    }
    else if(email==""){
        alert("Debe de ingresar su correo electronico");
        alertasColor(document.getElementById("txtemail"));

    }

    else{
        alert("Campos requeridos llenados exitosamente");
    }
    

}


function limpiezacliente(){
    var limpiar=document.getElementById("btnlimpiar");
    var nombre= document.getElementById("txtnombre");
    var identidad= document.getElementById("txtidentidad");
    var direccion= document.getElementById("txtdireccion");
    var telefono= document.getElementById("txttelefono");
    var email= document.getElementById("txtemail");
    
    limpiar.addEventListener("click", function(){
        nombre.value="";
        identidad.value="";
        direccion.value="";
        telefono.value="";
        email.value="";
    });
}

function valempleado(){
    var id=0;
    var nombre, identidad, direccion, email,telefono;

    id= parseInt(document.empleado.txtid.value,10);
    nombre= document.getElementById("txtnombre").value;
    identidad= document.getElementById("txtidentidad").value;
    direccion= document.getElementById("txtdireccion").value;
    telefono= document.getElementById("txttelefono").value;
    email= document.getElementById("txtemail").value;

    
    defectoColor(document.getElementById("txtnombre"));
    defectoColor(document.getElementById("txtidentidad"));
    defectoColor(document.getElementById("txtdireccion"));
    defectoColor(document.getElementById("txttelefono"));
    defectoColor(document.getElementById("txtemail"));


    if(nombre==""){
        alert("Debe de ingresar un Nombre");
        alertasColor(document.getElementById("txtnombre"));
    }
    else if(identidad==""){ 
            alert("Debe de ingresar un numero de identidad o su pasaporte");
            alertasColor(document.getElementById("txtidentidad"));
        
    }
    else if(direccion==""){ 
        alert("Debe de ingresar su direccion de domicilio.");
        alertasColor(document.getElementById("txtdireccion"));
    
    }
    else if(telefono==""){
        alert("Debe de ingresar su numero de telefono");
        alertasColor(document.getElementById("txttelefono"));
        

    }
    else if(email==""){
        alert("Debe de ingresar su correo electronico");
        alertasColor(document.getElementById("txtemail"));

    }

    else{
        alert("Campos requeridos llenados exitosamente");
    }
    

}

function limpiezaempleado(){
    var limpiar=document.getElementById("btnlimpiar");
    var nombre= document.getElementById("txtnombre");
    var identidad= document.getElementById("txtidentidad");
    var direccion= document.getElementById("txtdireccion");
    var telefono= document.getElementById("txttelefono");
    var email= document.getElementById("txtemail");
    
    limpiar.addEventListener("click", function(){
        nombre.value="";
        identidad.value="";
        direccion.value="";
        telefono.value="";
        email.value="";
    });
}

function valogin(){
    var usuario, password;

    usuario= document.getElementById("txtlogin").value;
    password= document.getElementById("txtpassword").value;

    defectoColor(document.getElementById("txtlogin"));
    defectoColor(document.getElementById("txtpassword"));

    if(usuario==""){
        alert("Debe de ingresar su usuario");
        alertasColor(document.getElementById("txtlogin"));

    }
    else if(password==""){
        alert("Debe de ingresar su contraseña");
        alertasColor(document.getElementById("txtpassword"));

    }
    else{
        alert("Bienvenidos a Mangos Express");

    }
}


function valdestinatario(){
    var id=0;
    var nombre, identidad, domicilio,telefono;

    id= parseInt(document.destinatario.txtid.value,10);
    nombre= document.getElementById("txtnombre").value;
    identidad= document.getElementById("txtidentidad").value;
    domicilio= document.getElementById("txtdomicilio").value;
    telefono= document.getElementById("txttelefono").value;
    
    defectoColor(document.getElementById("txtnombre"));
    defectoColor(document.getElementById("txtidentidad"));
    defectoColor(document.getElementById("txtdomicilio"));
    defectoColor(document.getElementById("txttelefono"));


    if(nombre==""){
        alert("Debe de ingresar un Nombre");
        alertasColor(document.getElementById("txtnombre"));
    }
    else if(identidad==""){ 
            alert("Debe de ingresar un numero de identidad o su pasaporte");
            alertasColor(document.getElementById("txtidentidad"));
        
    }
    else if(domicilio==""){ 
        alert("Debe de ingresar su direccion de domicilio.");
        alertasColor(document.getElementById("txtdomicilio"));
    
    }
    else if(telefono==""){
        alert("Debe de ingresar su numero de telefono");
        alertasColor(document.getElementById("txttelefono"));
    }

    else{
        alert("Campos requeridos llenados exitosamente");
    }
    

}

function limpiezadestinatario(){
    var limpiar=document.getElementById("btnlimpiar");
    var nombre= document.getElementById("txtnombre");
    var identidad= document.getElementById("txtidentidad");
    var domicilio= document.getElementById("txtdomicilio");
    var telefono= document.getElementById("txttelefono");
    
    limpiar.addEventListener("click", function(){
        nombre.value="";
        identidad.value="";
        domicilio.value="";
        telefono.value="";
        email.value="";
    });
}


    function envnacionales(){
    var id=0;
    var remitente, idremitente, direccionr, telefonor, emailr;
    var destinatario, identidadd, domiciliod, telefonod, identificadorremitente ;

    defectoColor(document.getElementById("txtremitente"));
    defectoColor(document.getElementById("txtidremitente"));
    defectoColor(document.getElementById("txtdireccion"));
    defectoColor(document.getElementById("txttelefono"));
    defectoColor(document.getElementById("txtemail"));
    defectoColor(document.getElementById("txtdestinatario"));
    defectoColor(document.getElementById("txtiddestinatario"));
    defectoColor(document.getElementById("txtdomicilio"));
    defectoColor(document.getElementById("txttelefonodestinatario"));
    defectoColor(document.getElementById("txtidentificador"));

    
    id= parseInt(document.nacionales.txtid.value,10);
    remitente= document.getElementById("txtremitente").value;
    idremitente= document.getElementById("txtidremitente").value;
    direccionr= document.getElementById("txtdireccion").value;
    telefonor= document.getElementById("txttelefono").value;
    emailr= document.getElementById("txtemail").value;
    destinatario= document.getElementById("txtdestinatario").value;
    identidadd= document.getElementById("txtiddestinatario").value;
    domiciliod=document.getElementById("txtdomicilio").value;
    telefonod= document.getElementById("txttelefonodestinatario").value;
    identificadorremitente = document.getElementById("txtidentificador").value;
    

    if(remitente==""){
        alert("Debe de ingresar su Nombre");
        alertasColor(document.getElementById("txtremitente"));
    }
    else if(idremitente==""){ 
            alert("Debe de ingresar un numero de identidad o su pasaporte");
            alertasColor(document.getElementById("txtidremitente"));
        
    }
    else if(direccionr==""){ 
        alert("Debe de ingresar su direccion de domicilio.");
        alertasColor(document.getElementById("txtdireccion"));
    
    }
    else if(telefonor==""){
        alert("Debe de ingresar su numero de telefono");
        alertasColor(document.getElementById("txttelefono"));
        

    }
    else if(emailr==""){
        alert("Debe de ingresar su correo electronico");
        alertasColor(document.getElementById("txtemail"));

    }
    else if(identificadorremitente==""){
        alert("Debe de ingresar el identificador del destinatario");
        alertasColor(document.getElementById("txtidentificador"));


    }
    else if(destinatario==""){
        alert("Debe de ingresar el nombre del destinatario");
        alertasColor(document.getElementById("txtdestinatario"));


    }
    else if(identidadd==""){
        alert("Debe de ingresar el numero de indetidad del destinatario");
        alertasColor(document.getElementById("txtiddestinatario"));

    }
    else if(domiciliod==""){
        alert("Debe de ingresar la direccion del destinatario que recibira el paquete");
        alertasColor(document.getElementById("txtdomicilio"));
    }
    else if(telefonod==""){
        alert("Debe de ingresar el numero de telefono del destinatario");
        alertasColor(document.getElementById("txttelefonodestinatario"));
    }

    else{
        alert("Campos requeridos llenados exitosamente");
    }
    
}


function limpiezanacional(){

    var limpiar=document.getElementById("btnlimpiar");

    var remitente= document.getElementById("txtremitente");
    var idremitente= document.getElementById("txtidremitente");
    var direccionr= document.getElementById("txtdireccion");
    var telefonor= document.getElementById("txttelefono");
    var emailr= document.getElementById("txtemail");
    var destinatario= document.getElementById("txtdestinatario");
    var identidadd= document.getElementById("txtiddestinatario");
    var domiciliod= document.getElementById("txtdomicilio");
    var telefonod= document.getElementById("txttelefonodestinatario");
    var identificadorremitente= document.getElementById("txtidentificador");
 
        limpiar.addEventListener("click", function(){
            remitente.value="";
            idremitente.value="";
            direccionr.value="";
            telefonor.value="";
            emailr.value="";
            destinatario.value="";
            identidadd.value="";
            domiciliod.value="";
            telefonod.value="";
            identificadorremitente.value="";
            
        });
}



function envinternacional(){
    var id=0;
    var remitente, idremitente, direccionr, telefonor, emailr;
    var destinatario, identidadd, domiciliod, telefonod, identificadorremitente ;

    defectoColor(document.getElementById("txtremitente"));
    defectoColor(document.getElementById("txtidremitente"));
    defectoColor(document.getElementById("txtdireccion"));
    defectoColor(document.getElementById("txttelefono"));
    defectoColor(document.getElementById("txtemail"));
    defectoColor(document.getElementById("txtdestinatario"));
    defectoColor(document.getElementById("txtiddestinatario"));
    defectoColor(document.getElementById("txtdomicilio"));
    defectoColor(document.getElementById("txttelefonodestinatario"));
    defectoColor(document.getElementById("txtidentificador"));

    
    id= parseInt(document.nacionales.txtid.value,10);
    remitente= document.getElementById("txtremitente").value;
    idremitente= document.getElementById("txtidremitente").value;
    direccionr= document.getElementById("txtdireccion").value;
    telefonor= document.getElementById("txttelefono").value;
    emailr= document.getElementById("txtemail").value;
    destinatario= document.getElementById("txtdestinatario").value;
    identidadd= document.getElementById("txtiddestinatario").value;
    domiciliod=document.getElementById("txtdomicilio").value;
    telefonod= document.getElementById("txttelefonodestinatario").value;
    identificadorremitente = document.getElementById("txtidentificador").value;
    

    if(remitente==""){
        alert("Debe de ingresar su Nombre");
        alertasColor(document.getElementById("txtremitente"));
    }
    else if(idremitente==""){ 
            alert("Debe de ingresar un numero de identidad o su pasaporte");
            alertasColor(document.getElementById("txtidremitente"));
        
    }
    else if(direccionr==""){ 
        alert("Debe de ingresar su direccion de domicilio.");
        alertasColor(document.getElementById("txtdireccion"));
    
    }
    else if(telefonor==""){
        alert("Debe de ingresar su numero de telefono");
        alertasColor(document.getElementById("txttelefono"));
        

    }
    else if(emailr==""){
        alert("Debe de ingresar su correo electronico");
        alertasColor(document.getElementById("txtemail"));

    }
    else if(identificadorremitente==""){
        alert("Debe de ingresar el identificador del destinatario");
        alertasColor(document.getElementById("txtidentificador"));


    }
    else if(destinatario==""){
        alert("Debe de ingresar el nombre del destinatario");
        alertasColor(document.getElementById("txtdestinatario"));


    }
    else if(identidadd==""){
        alert("Debe de ingresar el numero de indetidad del destinatario");
        alertasColor(document.getElementById("txtiddestinatario"));

    }
    else if(domiciliod==""){
        alert("Debe de ingresar la direccion del destinatario que recibira el paquete");
        alertasColor(document.getElementById("txtdomicilio"));
    }
    else if(telefonod==""){
        alert("Debe de ingresar el numero de telefono del destinatario");
        alertasColor(document.getElementById("txttelefonodestinatario"));
    }

    else{
        alert("Campos requeridos llenados exitosamente");
    }
    
}


function limpiezainternacional(){

    var limpiar=document.getElementById("btnlimpiar");

    var remitente= document.getElementById("txtremitente");
    var idremitente= document.getElementById("txtidremitente");
    var direccionr= document.getElementById("txtdireccion");
    var telefonor= document.getElementById("txttelefono");
    var emailr= document.getElementById("txtemail");
    var destinatario= document.getElementById("txtdestinatario");
    var identidadd= document.getElementById("txtiddestinatario");
    var domiciliod= document.getElementById("txtdomicilio");
    var telefonod= document.getElementById("txttelefonodestinatario");
    var identificadorremitente= document.getElementById("txtidentificador");
 
        limpiar.addEventListener("click", function(){
            remitente.value="";
            idremitente.value="";
            direccionr.value="";
            telefonor.value="";
            emailr.value="";
            destinatario.value="";
            identidadd.value="";
            domiciliod.value="";
            telefonod.value="";
            identificadorremitente.value="";
            
        });
}