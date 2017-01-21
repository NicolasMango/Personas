
var Personas = [];
var idPersonas = 0;

function persona(id,nombre,apellido,foto,domicilio){
	this.id = id;
	this.nombre = nombre;
	this.apellido = apellido;
	this.foto = foto;
	this.domicilio = domicilio;
}

function altaPersona(){
	idPersonas++;
	var nombre = $("#nombre").val();
	var apellido = $("#apellido").val();
	var foto = $("#foto").val();
	var domicilio = $("#domicilio").val();

	var Persona = new persona(idPersonas,nombre,apellido,foto,domicilio);
	Personas.push(Persona);   

	$("#personas").append("<div id='persona_"+ idPersonas + "'></div>");
	$("#persona_" + idPersonas).addClass("persona");
	$("#persona_" + idPersonas).addClass("row");
	$("#persona_" + idPersonas).append("<div id='div_foto_" +idPersonas + "'></div>");
	$("#div_foto_" + idPersonas).append("<img id='foto_" + idPersonas + "'></img>");
	$("#div_foto" + idPersonas).addClass("columna");
	$("#foto_" + idPersonas).attr("src",foto);
	$("#foto_" + idPersonas).css("max-height","50%");
	$("#foto_" + idPersonas).css("max-width","50%");
	$("#foto_" + idPersonas).css("border-radius","50%");
	$("#persona_" + idPersonas).append("<div id='datos_" + idPersonas + "'></div>");
	$("#datos_" + idPersonas).addClass("columna");
	$("#datos_" + idPersonas).append("<label for='nombre_" + idPersonas + "'> Nombre de la persona</label>");
	$("#datos_" + idPersonas).append("<div id='nombre_" + idPersonas + "'>" + nombre + "</div>");
	$("#datos_" + idPersonas).append("<label for='apellido_" + idPersonas + "'> Apellido de la persona</label>");
	$("#datos_" + idPersonas).append("<div id='apellido_" + idPersonas + "'>" + apellido + "</div>");
	$("#datos_" + idPersonas).append("<label for='domicilio_" + idPersonas + "'> Domicilio de la persona</label>");
	$("#datos_" + idPersonas).append("<div id='domicilio_" + idPersonas + "'>" + domicilio + "</div>");
	$("#persona_" + idPersonas).append("<input id='btn_" +idPersonas + "'></input>");
	$("#btn_" + idPersonas).attr("value","eliminar");
	$("#btn_" + idPersonas).addClass("btneliminar");
	$("#btn_" + idPersonas).attr("type","button");
	$("#btn_" + idPersonas).css("max-width","10px");
	$("#btn_" + idPersonas).css("max-height","10px");
	$("#btn_" + idPersonas).css("background-color","red");

	alert("Persona ingresada exitosamente");
}

$("#registrar").click(function(){
	altaPersona();
});

$(document).on('click','.btneliminar',function(){

	$(this).parent().animate({
		width: "10px"
	},function(){
   		 $(this).remove();
   	});
 });

$( "#close" ).click(function() {
 $("#close" ).parent().animate({
   opacity: 0.25,
   left: "+=50",
   height: "toggle"
 }, 5000, function() {
   // Animation complete.
 });
});