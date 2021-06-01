const getAleatorio = () => Math.ceil(Math.random() * 10);

const aleatorio = getAleatorio();

const inputElemento = document.querySelector(".numero");
const botonElemento = document.querySelector(".adivinar");
const mensajeElemento = document.querySelector(".mensaje");

botonElemento.addEventListener("click", () => {
  const numeroUsuario = inputElemento.valueAsNumber;
  let mensaje;
  if (isNaN(numeroUsuario)) {
    return;
  }
  if (numeroUsuario > aleatorio) {
    mensaje = `El número es menor que ${numeroUsuario}`;
    mensajeElemento.classList.add("error");
  } else if (numeroUsuario < aleatorio) {
    mensaje = `El número es mayor que ${numeroUsuario}`;
    mensajeElemento.classList.add("error");
  } else {
    mensaje = `Eres un/a foquin crack`;
    mensajeElemento.classList.remove("error");
    mensajeElemento.classList.add("acierto");
    botonElemento.disabled = true;
    inputElemento.disabled = true;
  }
  mensajeElemento.textContent = mensaje;
});
