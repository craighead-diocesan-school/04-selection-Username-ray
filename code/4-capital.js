// ####################################
// ######## ----- Capital ----- #######
// ####################################

function capital() {
  let name = prompt('What is your name?')
  let capital = prompt('Quick question, ' + name + '. What is the capital of France?')

  if (capital == Paris){
    alert("That's right, " + name + ' .')
  } else {
    alert("That's not correct.")
  }
}
