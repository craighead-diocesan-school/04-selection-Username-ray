// ####################################
// ###### ----- Driving Age ----- #####
// ####################################

function drivingAge() {
  alert('How old are you?')
  let age = Number(prompt())

  if (age > 16) {
    alert("You're old enough to drive.")
  } else {
    alert("You're not old enough to drive.")
  }
}
