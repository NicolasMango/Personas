
var Personas = [];
var idPersonas = 0;

function persona(id,nombre,apellido,foto,domicilio){
	this.id = id;
	this.nombre = nombre;
	this.apellido = apellido;
	this.foto = foto;
	this.domicilio = domicilio;
}

window.onload = function() {
	Listar();
};

function Listar(){
	var lsPersonas = localStorage.getItem("lsPersonas");
	var json_personas = JSON.parse(lsPersonas);
	if (json_personas !== null){
		Personas = json_personas;
		for (var i =  0 ; i < json_personas.length; i++) {
			$("#personas").append("<div id='persona_"+ json_personas[i].id + "'></div>");
			$("#persona_" + json_personas[i].id).addClass("col-md-4");
			$("#persona_" + json_personas[i].id).addClass("persona");
			$("#persona_" + json_personas[i].id).addClass("row");
			$("#persona_" + json_personas[i].id).append("<div id='div_foto_" +json_personas[i].id + "'></div>");
			$("#div_foto" + json_personas[i].id).addClass("col-md-4");
			$("#div_foto" + json_personas[i].id).addClass("columna");
			$("#div_foto_" + json_personas[i].id).append("<img id='foto_" + json_personas[i].id + "'></img>");
			$("#foto_" + json_personas[i].id).attr("src","assets/"+json_personas[i].foto);
//			$("#foto_" + json_personas[i].id).css("max-height","50%");
			$("#foto_" + json_personas[i].id).css("max-width","50%");
			$("#foto_" + json_personas[i].id).css("border-radius","50%");
			$("#persona_" + json_personas[i].id).append("<div id='datos_" + json_personas[i].id + "'></div>");
			$("#datos_" + json_personas[i].id).addClass("col-md-8");
			$("#datos_" + json_personas[i].id).addClass("columna");
			$("#datos_" + json_personas[i].id).append("<label for='nombre_" + json_personas[i].id + "'> Nombre :</label>");
			$("#datos_" + json_personas[i].id).append("<div id='nombre_" + json_personas[i].id + "'>" + json_personas[i].nombre + "</div>");
			$("#datos_" + json_personas[i].id).append("<label for='apellido_" + json_personas[i].id + "'> Apellido :</label>");
			$("#datos_" + json_personas[i].id).append("<div id='apellido_" + json_personas[i].id + "'>" + json_personas[i].apellido + "</div>");
			$("#datos_" + json_personas[i].id).append("<label for='domicilio_" + json_personas[i].id + "'> Domicilio : </label>");
			$("#datos_" + json_personas[i].id).append("<div id='domicilio_" + json_personas[i].id + "'>" + json_personas[i].domicilio + "</div>");
			$("#persona_" + json_personas[i].id).append("<span id='remover_" +json_personas[i].id + "'></span>");
			$("#remover_" + json_personas[i].id).addClass("glyphicon glyphicon-remove");
			$("#remover_" + json_personas[i].id).addClass("spaneliminar");
			$("#remover_" + json_personas[i].id).css("max-width","10px");
			$("#remover_" + json_personas[i].id).css("max-height","10px");
		}
		idPersonas = i + 1 ;
	}

}

function altaPersona(){
	
	var nombre = $("#nombre").val();
	var apellido = $("#apellido").val();
	var foto = $("#foto").val().split('\\').pop();
	var domicilio = $("#domicilio").val();

	var Persona = new persona(idPersonas,nombre,apellido,foto,domicilio);
	Personas.push(Persona);

	$("#personas").append("<div id='persona_"+ idPersonas + "'></div>");
	$("#persona_" + idPersonas).addClass("col-md-4");
	$("#persona_" + idPersonas).addClass("persona");
	$("#persona_" + idPersonas).addClass("row");
	$("#persona_" + idPersonas).append("<div id='div_foto_" +idPersonas + "'></div>");
	$("#div_foto" + idPersonas).addClass("col-md-4");
	$("#div_foto" + idPersonas).addClass("columna");
	$("#div_foto_" + idPersonas).append("<img id='foto_" + idPersonas + "'></img>");
	$("#foto_" + idPersonas).attr("src","assets/"+foto);
	$("#foto_" + idPersonas).css("max-height","50%");
	$("#foto_" + idPersonas).css("max-width","50%");
	$("#foto_" + idPersonas).css("border-radius","50%");
	$("#persona_" + idPersonas).append("<div id='datos_" + idPersonas + "'></div>");
	$("#datos_" + idPersonas).addClass("col-md-8");
	$("#datos_" + idPersonas).addClass("columna");
	$("#datos_" + idPersonas).append("<label for='nombre_" + idPersonas + "'> Nombre :</label>");
	$("#datos_" + idPersonas).append("<div id='nombre_" + idPersonas + "'>" + nombre + "</div>");
	$("#datos_" + idPersonas).append("<label for='apellido_" + idPersonas + "'> Apellido :</label>");
	$("#datos_" + idPersonas).append("<div id='apellido_" + idPersonas + "'>" + apellido + "</div>");
	$("#datos_" + idPersonas).append("<label for='domicilio_" + idPersonas + "'> Domicilio : </label>");
	$("#datos_" + idPersonas).append("<div id='domicilio_" + idPersonas + "'>" + domicilio + "</div>");
	$("#persona_" + idPersonas).append("<span id='remover_" +idPersonas + "'></span>");
	$("#remover_" + idPersonas).addClass("glyphicon glyphicon-remove");
	$("#remover_" + idPersonas).addClass("spaneliminar");
	$("#remover_" + idPersonas).css("max-width","10px");
	$("#remover_" + idPersonas).css("max-height","10px");

	localStorage.setItem("lsPersonas",JSON.stringify(Personas)); 

	idPersonas++;

	alert("Persona ingresada exitosamente");
}

$("#registrar").click(function(){
	altaPersona();
});

$(document).on('click','.spaneliminar',function(){
	$(this).parent().animate({
		width: "10px"
	},function(){
   		 $(this).remove();
   	});
});

$("#close" ).click(function() {
	$("#close" ).parent().animate({
   		opacity: 0.25,
  		 left: "+=0",
  		 height: "toggle"
 	}, 200, function() {
 		$('.rightarrow').show();
 	});
});

$("#abrir" ).click(function() {
	$("#close" ).parent().animate({
   		opacity: 1,
  		 left: "+=0",
  		 height: "toggle"
 	}, 200, function() {
 		$('.rightarrow').hide();
 	});
});