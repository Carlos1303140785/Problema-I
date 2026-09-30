const API_URL = "http://localhost:8000"; // endereço do parser.py
document.querySelector("nav").innerHTML = `<b>&gt; TADS Unicamp</b>
<a href="index.html">Início</a><a href="curriculo.html">Currículo</a><a href="formulario.html">Enviar projeto</a>`;
document.querySelectorAll("nav a").forEach(a=>{if(location.pathname.endsWith(a.getAttribute("href")))a.classList.add("on")});
