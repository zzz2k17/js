let myButton = document.querySelector('.my-button')
let oneInput = document.querySelector('.oneinput')
let twoInput = document.querySelector('.twoinput')
let myResult = document.querySelector('.result')
let clearButton = document.querySelector('.clearbutton')

myButton.addEventListener('click', function() {
    
    let oneinputvalue = parseInt(oneInput.value)
    let twoinputvalue = parseInt(twoInput.value)
    
    myResult.innerText = oneinputvalue + twoinputvalue

})

clearButton.addEventListener('click', function() {
    
    myresult.innerText = " "
})