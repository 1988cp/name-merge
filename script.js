
const firstName = document.querySelector('#firstName')
const secondName = document.querySelector('#secondName')
const coupleName = document.querySelector('#coupleName')
const calculate = document.querySelector('#calculate')

calculate.addEventListener('click', function () {
    const firstThree = firstName.value.substring(0,3)
    const lastThree = secondName.value.slice(-3)
    const combinedName = firstThree + lastThree
    var msg = new SpeechSynthesisUtterance();
    msg.text = combinedName;
    window.speechSynthesis.speak(msg);  
    coupleName.innerHTML = `Your couple name is ${combinedName}. What an awful name.`
})