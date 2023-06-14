// ####################################
// ######## ----- Capital ----- #######
// ####################################

function capital() {
  alert('What is your name?')
  let name = prompt()
  alert('Quick question, ' + name + '. What is the capital of France?')
  let capital = prompt()

  if (capital == Paris){
    alert("That's right, " + name + ' .')
  } else {
    alert("That's not correct.")
  }
}
