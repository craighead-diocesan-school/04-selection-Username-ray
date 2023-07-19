// ####################################
// ###### ----- Driving Age ----- #####
// ####################################

function drivingAge() {
  alert('How old are you?')
  let age = Number(prompt())
  let driveAge = 16

  if (age > driveAge) {
    alert("You're old enough to drive.")
  } else {
    alert("You're not old enough to drive.")
  }
}
