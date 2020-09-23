const display = document.querySelector('#display')
const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')
const splitTip = document.querySelector('#tip')

billInput.value =  10
tip.value = 0

function calculateTip(){
    const billValue = parseInt(billInput.value)
    const tipValue = parseInt(tipInput.value)
    const splitTipValue = parseInt(splitTip.value)

    const tipAmount = billValue * tipValue / 100
    const eachTip = tipAmount / splitTipValue
    display.innerHTML = tipAmount.toFixed(2)
    // tip.innerHTML = eachTip.toFixed(2)
}

calculateTip()

billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)
splitTip.addEventListener('input', calculateTip)