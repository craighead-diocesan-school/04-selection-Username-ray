// ####################################
// #### ----- Sale Calculator ----- ###
// ####################################

function saleCalculator() {
  alert('How much money do you have to spend?')
  let money = Number(prompt())
  alert('How much is the item normally?')
  let item = Number(prompt())
  alert('And what is the discount percentage?')
  let discount = Number(prompt())
  let percentageToRatio = 0.01
  let maximumOfPercentage = 100
  let price = percentageToRatio * (maximumOfPercentage - discount) * item

  if (price <= money) {
    alert('You have enough. You have $' + money + ' to spend, and with ' + discount + '% off, $' + item + ' comes down to $' + price + '.')
  } else {
    alert("You don't have enough. You have $" + money + ' to spend, but even with ' + discount + '% off, $' + item + ' only comes down to $' + price + '.')
  }
}