// ####################################
// ##### ----- Conversation ----- #####
// ####################################

function conversation() {
  alert('Welcome to my conversation program.')

  let answer1 = prompt('Do you like cycling? Answer yes or no.')

  if (answer1 == 'yes') {
    let answer2 = prompt("That's good - do you do athletics? Answer yes or no.")

    if (answer2 == 'yes') {
      alert('Good luck in your next race.')
    } else if (answer2 == 'no') {
      alert('Just for fun then.')
    }

  } else if (answer1 =='no') {
    let answer3 = prompt('Do you watch Olympic athletics? Answer yes or no.')

    if (answer3 == 'yes') {
      alert("That's good - it's inspiring.")
    } else if (answer3 == 'no'){
      alert("It's not for everyone.")
    }
  }

  alert('Goodbye!')
}

function age() {
  let name = prompt("What's your name?")

  let age = Number(prompt('How old are you, ' + name + '?'))
  let invalidMin = 1
  let invalidMax = 130
  let needSupervision = 5
  let canRetire = 65
  let adult = 18
  let sameAge = 16

  if (age < invalidMin) {
    alert('The age is invalid.')
  }
  if (age > invalidMax) {
    alert('The age is invalid.')
  }
  if (age < needSupervision && age >= invalidMin) {
    alert('You need supervision when using a computer.')
    alert('Also, you are not the same age as me.')
  }
  if (age > canRetire && age <= invalidMax) {
    alert('You can retire.')
    alert('Also, you are not the same age as me.')
  }
  if (age >= adult) {
    alert('You are old enough to vote.')
    alert('Also, you are not the same age as me.')
  }
  if (age != sameAge && age >= needSupervision && age < adult) {
    alert('You are not the same age as me.')
  }
}
