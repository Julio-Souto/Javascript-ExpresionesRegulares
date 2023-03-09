
document.getElementById("b1").addEventListener("click", () => {
  let string = document.getElementsByName("campo")[0].textContent
  if(string.match(/\s/g))
    alert("Campo vacio")
  else
    alert("Bien")
})

document.getElementById("b2").addEventListener("click", () => {
  let string = document.getElementsByName("edad")[0].textContent
  if(string.match(/[0-9]/g))
    alert("Numeros")
  else
    alert("No numeros")
})

document.getElementById("b3").addEventListener("click", () => {
  let string = prompt("Introduce una frase", "Esta es una frase")
})

document.getElementById("b4").addEventListener("click", () => {
  let string = prompt("Introduce una frase", "Esta es una frase")
})

document.getElementById("b5").addEventListener("click", () => {
  let string = prompt("Introduce una frase", "Esta es una frase")
})

document.getElementById("b6").addEventListener("click", () => {
  let string = prompt("Introduce una frase", "Esta es una frase")
})