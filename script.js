function abrirPopup(tipo) {
  let conteudo = "";

  if (tipo === "fotos") {
    conteudo = `
      <h2>📸 Nossos momentos</h2>
      <div class="galeria">
        <img src="foto1.jpg">
        <img src="foto2.jpg">
        <img src="foto3.jpg">
        <img src="foto4.jpg">
      </div>
    `;
  }

  if (tipo === "video") {
    conteudo = `
      <h2>🎵 Nossa música</h2>
      <a href="https://youtu.be/rpIKdUwYG2k" target="_blank">
        ▶ Ouvir nossa música 💖
      </a>
    `;
  }

  document.getElementById("popup-body").innerHTML = conteudo;
  document.getElementById("popup").style.display = "flex";
}

function fecharPopup() {
  document.getElementById("popup").style.display = "none";
}

function abrirEnvelope() {
  document.getElementById("popup-body").innerHTML = `
    <div class="envelope" onclick="mostrarCarta(this)"></div>
  `;
  document.getElementById("popup").style.display = "flex";
}

function mostrarCarta(el) {
  el.classList.add("open");

  setTimeout(() => {
    document.getElementById("popup-body").innerHTML = `
      <div class="carta" id="carta-texto"></div>
    `;
    escreverTexto();
  }, 500);
}

function escreverTexto() {
  const texto = `Feliz dia dos namorados, meu amor.
  
É um prazer enorme dividir a vida com você. 
Espero que goste dessa surpresinha rs. 
Obrigado por estar comigo em todos os momentos possíveis. 
Eu não poderia estar mais feliz e realizado
na minha vida, e tudo graças a você.
Que possamos comemorar todos os proximos dia dos namorados
até o fim de nossas vidas.

Eu te amo eternamente. 💖`;

  let i = 0;
  const el = document.getElementById("carta-texto");

  function digitar() {
    if (i < texto.length) {
      if (texto[i] === "\n") {
        el.innerHTML += "<br>";
      } else {
        el.innerHTML += texto[i];
      }
      i++;
      setTimeout(digitar, 80);
    }
  }

  digitar();
}

function respostaSim() {
  document.getElementById("popup-body").innerHTML = `
    <h2>Eu já sabia 💖<br>Lhe amo!</h2>
  `;
  document.getElementById("popup").style.display = "flex";
  soltarCoracoes();
}

function soltarCoracoes() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }
}

window.onload = function () {
  const nao = document.getElementById("nao");

  nao.addEventListener("mouseover", () => {
    nao.style.position = "absolute";
    nao.style.left = Math.random() * 70 + "%";
    nao.style.top = Math.random() * 70 + "%";
  });
};

function criarCoracao() {
  const heart = document.createElement("div");
  heart.className = "heart-fall";
  heart.innerHTML = Math.random() > 0.5 ? "💖" : "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 10) + "px";
  heart.style.animationDuration = (Math.random() * 4 + 4) + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}

setInterval(criarCoracao, 150);

window.onclick = function(event) {
  const popup = document.getElementById("popup");

  if (event.target === popup) {
    popup.style.display = "none";
  }
};
