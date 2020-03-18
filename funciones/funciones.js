//Funcion diseñada para cambiar el idioma de la 
//pagina web, sin necesidad de redirijir, se utiliza
//innerHTML ya que se trata solo de inyeccion de cadenas
//de texto nuevas sobre las ya existentes, asi la funcionalidad
//del HTML y los estilos aplicados no sufriran cambios

//guardamos la variable isEspanhol para poder trabajarla en las funciones
var isEspanhol = true
function cambiarIdioma(){
	if(isEspanhol){
		document.getElementById("aPortfolio").innerHTML="Portfolio";
		document.getElementById("aExperience").innerHTML="Working experience";
		document.getElementById("aContact").innerHTML="Let's work together!";
		document.getElementById("h1HeroDescription").innerHTML="Hi! I'm <strong>Gabriel Escriba</strong><br/><strong>Fullstack designer</strong><br/> An my life motto is</br><strong>lifelong learning</strong>";
		document.getElementById("h2PortfolioTitle").innerHTML="Portfolio (Practical experience)";
		document.getElementById("pProjectDate").innerHTML="<small><strong>Date:</strong> 12-03-2020</small>";
		document.getElementById("h3projectTitle").innerHTML="Online resume";
		document.getElementById("title").innerHTML="Hi, I'm Gabriel Escriba";
		document.getElementById("pProjectDescription").innerHTML="U are on it right now! It's online thanks to GitHub Pages and shows what i'be learned about HTML, CSS and some JS functions </br>You can access the repo <a href=\"https://github.com/gaescriba/curriculumonline\">here</a>";
		document.getElementById("h2WorkingExperience").innerHTML="Summary of my formal working experience";
		document.getElementById("aEverisDescription").innerHTML="Being one of the greatest IT companies in the world, everis was the first company in which i worked as a dev, helping in maintenance of web apps";
		document.getElementById("contacto").innerHTML="<form action= \"email\" class=\"form-email\"><h3>Let's work together!</h3><div class=\"enviarCorreo\"><input type=\"text\" placeholder=\"Insert your email here\"id=\"email\"><button>Send</button></div></form>";
		isEspanhol=false;
	}else{
		document.getElementById("aPortfolio").innerHTML="Portafolio";
		document.getElementById("aExperience").innerHTML="Experiencia";
		document.getElementById("aContact").innerHTML="Trabajemos juntos!";
		document.getElementById("h1HeroDescription").innerHTML="Hola! Soy <strong>Gabriel Escribá</strong><br/><strong>Fullstack designer</strong><br/> Apegado al <strong>lifelong learning</strong>";
		document.getElementById("h2PortfolioTitle").innerHTML="Portafolio (Proyectos destacados)";
		document.getElementById("pProjectDate").innerHTML="<small><strong>Fecha:</strong> 12-03-2020</small>";
		document.getElementById("h3projectTitle").innerHTML="Currículum Online";
		document.getElementById("title").innerHTML="Hola, soy Gabriel Escribá";
		document.getElementById("pProjectDescription").innerHTML="Lo estás viendo ahora mismo! Vive dentro de internet gracias a GitHub Pages y documenta mi aprendizaje en el uso de HTML, CSS y algunas funciones básicas de JS</br>Puedes acceder al repositorio <a href=\"https://github.com/gaescriba/curriculumonline\">aquí</a>";
		document.getElementById("h2WorkingExperience").innerHTML="Resumen de mi experiencia laboral";
		document.getElementById("aEverisDescription").innerHTML="Siendo una de las empresas más grandes de IT a nivel global, everis es la primera empresa en la cuál me he desempeñado cómo desarollador, aportando al área de mantenimiento de aplicaciones web";
		document.getElementById("contacto").innerHTML="<form action= \"email\" class=\"form-email\"><h3>Creemos algo juntos!</h3><div class=\"enviarCorreo\"><input type=\"text\" placeholder=\"Dejame tu email\"id=\"email\"><button>Enviar</button></div></form>";
		isEspanhol=true;
	}

}