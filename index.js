const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");
const card = document.querySelector(".card-container");
const envelope = document.querySelector(".envelope");
const envelopeFlap = document.querySelector(".upper");
const envelopeUnder = document.querySelector(".under");
const envelopeButton = document.querySelector("#open-button-envelope");
const imagesContainer = document.querySelector(".images-container");
const successContainer = document.querySelector(".success");
const musica = document.getElementById("musica");
const error = document.getElementById("error");
const completed = document.getElementById("completed");
musica.volume = 0.2;
error.volume = 0.7;
completed.volume = 0.7;

let contador = 1;

noButton.addEventListener("click", () => {
  const modalContainer = document.querySelector(`#modal-${contador}`);
  modalContainer.style.display = "flex";
  error.play();
});

yesButton.addEventListener("click", () => {
  card.style.display = "none";
  successContainer.style.display = "flex";
  completed.play();
  setTimeout(() => {
    document.querySelector(".tickets.left").classList.add("show");
    document.querySelector(".tickets.right").classList.add("show");
  }, 300); // Retardo para hacer el efecto más natural
});

// Funcion para cerrar los modales
const closeModals = (i, total) => {
  const modalContainer = document.querySelector(`#modal-${i}`);
  modalContainer.style.display = "none";
  contador++;
  if (contador > total) {
    // desabilitar el boton de no
    noButton.disabled = true;
    noButton.style.cursor = "not-allowed";
    noButton.style.backgroundColor = "var(--rosa-coral)";
    noButton.style.opacity = "0.5";
  }
};

const openEnvelope = () => {
  envelopeUnder.style.display = "flex";
  envelopeFlap.classList.remove("close");
  envelopeFlap.classList.add("open");
  envelopeButton.style.display = "none";
  musica.play();

  setTimeout(() => {
    envelope.style.display = "none";
    envelopeButton.style.display = "none";
    card.style.display = "flex";
  }, 1000);
};
