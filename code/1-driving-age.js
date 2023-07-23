// ####################################
// ###### ----- Driving Age ----- #####
// ####################################

function drivingAge() {
  let age = Number(prompt('How old are you?'))
  let driveAge = 16
  // Ask the age of user and define it and age available for drive.

  if (age > driveAge) {
    alert("You're old enough to drive.")
  } else {
    alert("You're not old enough to drive.")
  }
}
// If the age of user is bigger than age available for drive, show a message that you can drive, if not, show a message opposite meaning.