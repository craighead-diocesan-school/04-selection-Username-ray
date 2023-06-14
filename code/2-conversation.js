// ####################################
// ##### ----- Conversation ----- #####
// ####################################

function conversation() {
  alert('Welcome to my conversation program.')

  alert('Do you like cycling? Answer yes or no.')
  let answer1 = prompt()

  if (answer1 == 'yes') {
    alert("That's good - do you do athletics? Answer yes or no.")
    let answer2 = prompt()

    if (answer2 == 'yes') {
      alert('Good luck in your next race.')
    } else if (answer2 == 'no') {
      alert('Just for fun then.')
    }

  } else if (answer1 =='no') {
    alert('Do you watch Olympic athletics? Answer yes or no.')
    let answer3 = prompt()

    if (answer3 == 'yes') {
      alert("That's good - it's inspiring.")
    } else if (answer3 == 'no'){
      alert("It's not for everyone.")
    }
  }

  alert('Goodbye!')
}

function age() {
  alert("What's your name?")
  let name = prompt()

  alert('How old are you, ' + name + '?')
  let age = Number(prompt())

  if (age < 1) {
    alert('The age is invalid.')
  }
  if (age > 130) {
    alert('The age is invalid.')
  }
  if (age < 5 && age >= 1) {
    alert('You need supervision when using a computer.')
    alert('Also, you are not the same age as me.')
  }
  if (age > 65 && age <= 130) {
    alert('You can retire.')
    alert('Also, you are not the same age as me.')
  }
  if (age >= 18) {
    alert('You are old enough to vote.')
    alert('Also, you are not the same age as me.')
  }
  if (age != 16 && age >= 5 && age < 18) {
    alert('You are not the same age as me.')
  }

}
