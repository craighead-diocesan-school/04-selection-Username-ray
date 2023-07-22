// ####################################
// ###### ----- Driving Age ----- #####
// ####################################

function drivingAge() {
  let age = Number(prompt('How old are you?'))
  let driveAge = 16

  if (age > driveAge) {
    alert("You're old enough to drive.")
  } else {
    alert("You're not old enough to drive.")
  }
}
