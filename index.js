const btnClasses = document.querySelector('.classes')
const btnAutodram = document.querySelector('.autodrom')
const classesBranch = document.querySelector('.classes-branch')
const autodromBranch = document.querySelector('.autodrom-branch')
const addressButton = document.querySelector('.header__locations-button')
const adressWindow = document.querySelector('.header__locations-list')
const districtsBtn = document.querySelector('.how-to-find__btn')
const districtsWindow = document.querySelector('.how-to-find__window-wrapper')
const questionsBlock = document.querySelector('.questions__item');
const questionsBtn = document.querySelector('.questions__button')
const questionsAnswer = document.querySelector('.questions__text-answer')


const changeClassActive = () => {
    btnClasses.classList.remove('active')
    btnAutodram.classList.add('active')
    classesBranch.classList.remove('visible')
    autodromBranch.classList.add('visible')
}

const changeClassActiveSecond =() => {
    btnAutodram.classList.remove('active')
    btnClasses.classList.add('active')
    classesBranch.classList.add('visible')
    autodromBranch.classList.remove('visible')
}

const changeClassAddressWindow = () => {
    adressWindow.classList.toggle('visible')
}

const showDistrictsWindow = () => {
    districtsWindow.classList.toggle('visible')
}

const showAnswer = () => {
    questionsBlock.classList.toggle('opened')
    questionsBtn.classList.toggle('opened')
    questionsAnswer.classList.toggle('opened')
}


btnAutodram.addEventListener('click', changeClassActive)
btnClasses.addEventListener('click', changeClassActiveSecond)
addressButton.addEventListener('click', changeClassAddressWindow)
districtsBtn.addEventListener('click', showDistrictsWindow)
questionsBtn.addEventListener('click', showAnswer)
