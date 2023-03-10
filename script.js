
document.getElementById("b1").addEventListener("click", () => {
  let string = document.getElementsByName("campo")[0].value
  if(/^\s*$/g.test(string))
    alert("Campo vacio")
  else
    alert("Bien")
})

document.getElementById("b2").addEventListener("click", () => {
  let string = document.getElementsByName("edad")[0].value
  if(/^[0-9]+$/.test(string))
    alert("Numeros")
  else
    alert("No numeros")
})

document.getElementById("b3").addEventListener("click", () => {
  let string = document.getElementsByName("nif")[0].value
  if(/^[0-9]{8}([a-z]||-[a-z])+$/i.test(string))
    alert("NIF valido")
  else
    alert("NIF no valido")
})

document.getElementById("b4").addEventListener("click", () => {
  let string = document.getElementsByName("cp")[0].value
  if(/^1([0-9]{4})+$/.test(string))
    alert("Codigo postal valido")
  else
    alert("Codigo postal no valido")
})

document.getElementById("b5").addEventListener("click", () => {
  let string = document.getElementsByName("login")[0].value
  if(/^\w+@[a-z]+\.[a-z]{2,3}$/i.test(string))
    alert("Email valido")
  else
    alert("Email no valido")
})

document.getElementById("b6").addEventListener("click", () => {
  let string = document.getElementsByName("fecha")[0].value
  if(/^([0-2][0-9]||3[0-1])+-(0[0-9]||1[0-2])+-([0-9]{4})$/i.test(string))
    alert("Fecha valida")
  else
    alert("Fecha no valida")
})