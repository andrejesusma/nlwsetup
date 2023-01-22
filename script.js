const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  var today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("the day already exists")
  } else {
    nlwSetup.addDay(today)
    alert("the day is added")
  }
}
function save() {
  localStorage.setItem("NLW11@habits", JSON.stringify(nlwSetup.data))
}
const data = JSON.parse(localStorage.getItem("NLW11@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
