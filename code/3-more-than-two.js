// ####################################
// ###### ----- More Than 2 ----- #####
// ####################################

function moreThanTwo() {

  let goOrNot = `dfghjftynki`
  while (goOrNot != 'Stop!') {

    let compared = prompt(`What number do you want to compare to 2?`)
    compared = Number(compared)
    let object = 2

    if (compared >= object) {
      alert(compared + ' is more than 2')
    } else {
      alert(compared + ' is not more than 2')
    }

    goOrNot = prompt("Do you want to keep going or stop? If you want to stop, write down 'Stop!'")
  }

  alert('Okay.')

}