
const firstName = document.querySelector('#firstName')
const secondName = document.querySelector('#secondName')
const coupleName = document.querySelector('#coupleName')
const calculate = document.querySelector('#calculate')

const responses = [" What an awful name.", "How terrible.", "That sounds pretty good to me!", "Are you OK with that?", "But don't worry, it isn't too late to change both of your names."]

calculate.addEventListener('click', function () {
    const firstThree = firstName.value.substring(0,3)
    const lastThree = secondName.value.slice(-3)
    const combinedName = firstThree + lastThree
    const random = Math.floor(Math.random()*responses.length)
    var msg = new SpeechSynthesisUtterance();
    msg.text = combinedName;
    window.speechSynthesis.speak(msg);  
    coupleName.innerHTML = `Your couple name is ${combinedName}. ` + responses[random]
})