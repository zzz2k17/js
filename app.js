let myButton = document.querySelector('.my-button')
let oneInput = document.querySelector('.oneinput')
let twoInput = document.querySelector('.twoinput')
let myHeader = document.querySelector('.header')

myButton.addEventListener('click', function() {
    
    let oneinputvalue = parseInt(oneInput.value)
    let twoinputvalue = parseInt(twoInput.value)
    
    myHeader.innerText = oneinputvalue + twoinputvalue



})