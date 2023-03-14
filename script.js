class Dialog {
  #dialog = null

  constructor(){
    this.#dialog = document.createElement("dialog")
    this.#dialog.setAttribute("open",true)
    this.#dialog.innerHTML = `<p id="dialog-text">Texto</p>
    <button id="close-dialog">Cerrar</button>`

    this.#dialog.querySelector("#close-dialog").addEventListener("click", () => {
      this.#dialog.close()
    })
  }
  getDialog(){
    return this.#dialog
  }
  setText(text){
    this.#dialog.querySelector("#dialog-text").textContent = text
  }
  show(){
    this.#dialog.showModal()
  }
  close(){
    this.#dialog.close()
  }
}

const dialogo = new Dialog()
document.body.prepend(dialogo.getDialog())
dialogo.close()

document.getElementById("myForm").addEventListener("submit",(e) => {
  e.preventDefault();
})

document.getElementById("b1").addEventListener("click", () => {
  let string = document.getElementsByName("campo")[0].value
  if(/^\s*$/g.test(string))
    alert("Campo vacio")
  else
    alert("Bien")
})

document.getElementById("b2").addEventListener("click", () => {
  let string = document.getElementsByName("edad")[0].value
  if(/^([0-9]{2}||1[0-2][0-9])$/.test(string))
    dialogo.setText("Numeros")
  else
    dialogo.setText("No numeros")
  dialogo.show()
})

document.getElementById("b3").addEventListener("click", () => {
  let string = document.getElementsByName("nif")[0].value
  if(/^[0-9]{8}([a-z]||-[a-z])$/i.test(string))
    dialogo.setText("NIF valido")
  else
    dialogo.setText("NIF no valido")
  dialogo.show()
})

document.getElementById("b4").addEventListener("click", () => {
  let string = document.getElementsByName("cp")[0].value
  if(/^[0-5]([0-9]{4})$/.test(string))
    dialogo.setText("Codigo postal valido")
  else
    dialogo.setText("Codigo postal no valido")
  dialogo.show()
})

document.getElementById("b5").addEventListener("click", () => {
  let string = document.getElementsByName("login")[0].value
  if(/^[\w\.-]+@[a-z0-9\.]+\.[a-z]{2,3}$/i.test(string))
    dialogo.setText("Email valido")
  else
    dialogo.setText("Email no valido")
  dialogo.show()
})

document.getElementById("b6").addEventListener("click", () => {
  let string = document.getElementsByName("fecha")[0].value
  if(/^([0-2]?[0-9]||3[0-1])-(0?[0-9]||1[0-2])-([0-1][0-9]{3}||20[0-2][0-9])$/i.test(string))
    dialogo.setText("Fecha valida")
  else
    dialogo.setText("Fecha no valida")
  dialogo.show()
})
