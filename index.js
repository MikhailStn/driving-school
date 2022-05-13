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

/* slider */

const leftButtonSlider = document.querySelector('.our-instructors__navigation-button.left')
const rightButtonSlider = document.querySelector('.our-instructors__navigation-button.right')
const activePhoto = document.querySelectorAll('.our-instructors__photos-item-active')
const sliderPhotos = document.querySelectorAll('.our-instructors__photos-item')
const countSlider = document.querySelector('.our-instructors__navigation-element')

const moveRight = () => {

    let path00 = activePhoto[0].getAttribute('src')
    let path01 = activePhoto[1].getAttribute('src')
    let path02 = activePhoto[2].getAttribute('src')

    let path0 = sliderPhotos[0].getAttribute('src')
    let path1 = sliderPhotos[1].getAttribute('src')
    let path2 = sliderPhotos[2].getAttribute('src')
    
    let o = path00[26]
    let i = path01[26]
    let p = path02[26]

    let j = path0[26]
    let x = path1[26]
    let y = path2[26]

    let z = countSlider.innerHTML

    if (o < 4) {
        activePhoto[0].setAttribute('src', `./assets/images/instructor${++o}active.jpg`)
    } else if (o >= 4) {
        activePhoto[0].setAttribute('src', `./assets/images/instructor${1}active.jpg`)
    }
    if (i < 4) {
        activePhoto[1].setAttribute('src', `./assets/images/instructor${++i}active.jpg`)
    } else if (i >= 4) {
        activePhoto[1].setAttribute('src', `./assets/images/instructor${1}active.jpg`)
    }
    if (p < 4) {
        activePhoto[2].setAttribute('src', `./assets/images/instructor${++p}active.jpg`)
    } else if (p >= 4) {
        activePhoto[2].setAttribute('src', `./assets/images/instructor${1}active.jpg`)
    }

    if (j < 4) {
        sliderPhotos[0].setAttribute('src', `./assets/images/instructor${++j}.jpg`)
    } else if (j >= 4) {
        sliderPhotos[0].setAttribute('src', `./assets/images/instructor${1}.jpg`)
    }
    if (x < 4) {
        sliderPhotos[1].setAttribute('src', `./assets/images/instructor${++x}.jpg`)
    } else if (x >= 4) {
        sliderPhotos[1].setAttribute('src', `./assets/images/instructor${1}.jpg`)
    }
    if (y < 4) {
        sliderPhotos[2].setAttribute('src', `./assets/images/instructor${++y}.jpg`)
    } else if (y >= 4) {
        sliderPhotos[2].setAttribute('src', `./assets/images/instructor${1}.jpg`)
    }
    if (z < 4) {
        countSlider.innerHTML = `${++z}`
    } else if (z >= 4) {
        countSlider.innerHTML = `1`
    }

    let path3 = sliderPhotos[3].getAttribute('src')
    let path4 = sliderPhotos[4].getAttribute('src')
    let path5 = sliderPhotos[5].getAttribute('src')

    let q = path3[26]
    let w = path4[26]
    let e = path5[26]

    if (q < 4) {
        sliderPhotos[3].setAttribute('src', `./assets/images/instructor${++q}.jpg`)
    } else if (q >= 4) {
        sliderPhotos[3].setAttribute('src', `./assets/images/instructor${1}.jpg`)
    }
    if (w < 4) {
        sliderPhotos[4].setAttribute('src', `./assets/images/instructor${++w}.jpg`)
    } else if (w >= 4) {
        sliderPhotos[4].setAttribute('src', `./assets/images/instructor${1}.jpg`)
    }
    if (e < 4) {
        sliderPhotos[5].setAttribute('src', `./assets/images/instructor${++e}.jpg`)
    } else if (e >= 4) {
        sliderPhotos[5].setAttribute('src', `./assets/images/instructor${1}.jpg`)
    }

    let path6 = sliderPhotos[6].getAttribute('src')
    let path7 = sliderPhotos[7].getAttribute('src')
    let path8 = sliderPhotos[8].getAttribute('src')

    let r = path6[26]
    let t = path7[26]
    let u = path8[26]

    if (r < 4) {
        sliderPhotos[6].setAttribute('src', `./assets/images/instructor${++r}.jpg`)
    } else if (r >= 4) {
        sliderPhotos[6].setAttribute('src', `./assets/images/instructor${1}.jpg`)
    }
    if (t < 4) {
        sliderPhotos[7].setAttribute('src', `./assets/images/instructor${++t}.jpg`)
    } else if (t >= 4) {
        sliderPhotos[7].setAttribute('src', `./assets/images/instructor${1}.jpg`)
    }
    if (u < 4) {
        sliderPhotos[8].setAttribute('src', `./assets/images/instructor${++u}.jpg`)
    } else if (u >= 4) {
        sliderPhotos[8].setAttribute('src', `./assets/images/instructor${1}.jpg`)
    }
}

const removeClassesRight = () => {
    sliderPhotos.forEach(el => el.addEventListener('animationend', () => {
        sliderPhotos.forEach(el => el.classList.remove('transition-right'))
        activePhoto.forEach(el => el.classList.remove('transition-right'))
    }))
}

const scrollRight = () => {
    sliderPhotos.forEach(el => el.classList.add('transition-right'))
    activePhoto.forEach(el => el.classList.add('transition-right'))
    removeClassesRight()
}

const removeClassesLeft = () => {
    sliderPhotos.forEach(el => el.addEventListener('animationend', () => {
        sliderPhotos.forEach(el => el.classList.remove('transition-left'))
        activePhoto.forEach(el => el.classList.remove('transition-left'))
    }))
}

const scrollLeft = () => {
    sliderPhotos.forEach(el => el.classList.add('transition-left'))
    activePhoto.forEach(el => el.classList.add('transition-left'))
    removeClassesLeft()
}

const moveLeft = () => {
    let path00 = activePhoto[0].getAttribute('src')
    let path01 = activePhoto[1].getAttribute('src')
    let path02 = activePhoto[2].getAttribute('src')

    let path0 = sliderPhotos[0].getAttribute('src')
    let path1 = sliderPhotos[1].getAttribute('src')
    let path2 = sliderPhotos[2].getAttribute('src')

    let o = path00[26]
    let i = path01[26]
    let p = path02[26]

    let j = path0[26]
    let x = path1[26]
    let y = path2[26]
    let z = countSlider.innerHTML

    if (o > 1) {
        activePhoto[0].setAttribute('src', `./assets/images/instructor${--o}active.jpg`)
    } else {
        activePhoto[0].setAttribute('src', `./assets/images/instructor${4}active.jpg`)
    }
    if (i > 1) {
        activePhoto[1].setAttribute('src', `./assets/images/instructor${--i}active.jpg`)
    } else {
        activePhoto[1].setAttribute('src', `./assets/images/instructor${4}active.jpg`)
    }
    if (p > 1) {
        activePhoto[2].setAttribute('src', `./assets/images/instructor${--p}active.jpg`)
    } else {
        activePhoto[2].setAttribute('src', `./assets/images/instructor${4}active.jpg`)
    }

    if (j > 1) {
        sliderPhotos[0].setAttribute('src', `./assets/images/instructor${--j}.jpg`)
    } else {
        sliderPhotos[0].setAttribute('src', `./assets/images/instructor${4}.jpg`)
    }
    if (x > 1) {
        sliderPhotos[1].setAttribute('src', `./assets/images/instructor${--x}.jpg`)
    } else {
        sliderPhotos[1].setAttribute('src', `./assets/images/instructor${4}.jpg`)
    }
    if (y > 1) {
        sliderPhotos[2].setAttribute('src', `./assets/images/instructor${--y}.jpg`)
    } else {
        sliderPhotos[2].setAttribute('src', `./assets/images/instructor${4}.jpg`)
    }
    if (z > 1) {
        countSlider.innerHTML = `${--z}`
    } else {
        countSlider.innerHTML = `4`
    }

    let path3 = sliderPhotos[3].getAttribute('src')
    let path4 = sliderPhotos[4].getAttribute('src')
    let path5 = sliderPhotos[5].getAttribute('src')

    let q = path3[26]
    let w = path4[26]
    let e = path5[26]

    if (q > 1) {
        sliderPhotos[3].setAttribute('src', `./assets/images/instructor${--q}.jpg`)
    } else {
        sliderPhotos[3].setAttribute('src', `./assets/images/instructor${4}.jpg`)
    }
    if (w > 1) {
        sliderPhotos[4].setAttribute('src', `./assets/images/instructor${--w}.jpg`)
    } else {
        sliderPhotos[4].setAttribute('src', `./assets/images/instructor${4}.jpg`)
    }
    if (e > 1) {
        sliderPhotos[5].setAttribute('src', `./assets/images/instructor${--e}.jpg`)
    } else {
        sliderPhotos[5].setAttribute('src', `./assets/images/instructor${4}.jpg`)
    }

    let path6 = sliderPhotos[6].getAttribute('src')
    let path7 = sliderPhotos[7].getAttribute('src')
    let path8 = sliderPhotos[8].getAttribute('src')

    let r = path6[26]
    let t = path7[26]
    let u = path8[26]

    if (r > 1) {
        sliderPhotos[6].setAttribute('src', `./assets/images/instructor${--r}.jpg`)
    } else {
        sliderPhotos[6].setAttribute('src', `./assets/images/instructor${4}.jpg`)
    }
    if (t > 1) {
        sliderPhotos[7].setAttribute('src', `./assets/images/instructor${--t}.jpg`)
    } else {
        sliderPhotos[7].setAttribute('src', `./assets/images/instructor${4}.jpg`)
    }
    if (u > 1) {
        sliderPhotos[8].setAttribute('src', `./assets/images/instructor${--u}.jpg`)
    } else {
        sliderPhotos[8].setAttribute('src', `./assets/images/instructor${4}.jpg`)
    }
}

const delete1 = () => {
    activePhoto.forEach(el => el.removeEventListener('animationend', moveRight))
}

const delete2 = () => {
    activePhoto.forEach(el => el.removeEventListener('animationend', moveLeft))
}

rightButtonSlider.addEventListener('click', scrollLeft)
rightButtonSlider.addEventListener('click', () => activePhoto.forEach(el => el.addEventListener('animationend', moveLeft)))
rightButtonSlider.addEventListener('click', () => setTimeout(() => activePhoto.forEach(el => el.removeEventListener('animationend', moveLeft)), 1100))
rightButtonSlider.addEventListener('click', () => rightButtonSlider.setAttribute('disabled', 'disabled'))
rightButtonSlider.addEventListener('click', () => setTimeout(() => rightButtonSlider.removeAttribute('disabled', 'disabled'), 1100))

leftButtonSlider.addEventListener('click', scrollRight)
leftButtonSlider.addEventListener('click', () => activePhoto.forEach(el => el.addEventListener('animationend', moveRight)))
leftButtonSlider.addEventListener('click', () => setTimeout(() => activePhoto.forEach(el => el.removeEventListener('animationend', moveRight)), 1100))
leftButtonSlider.addEventListener('click', () => leftButtonSlider.setAttribute('disabled', 'disabled'))
leftButtonSlider.addEventListener('click', () => setTimeout(() => leftButtonSlider.removeAttribute('disabled', 'disabled'), 1100))

/* map */

const adressFirst = document.querySelector('.adress-first')
const adressSecond = document.querySelector('.adress-second')
const map = document.querySelector('.map')

const showMap = () => {
    map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d995.9093055040354!2d30.3807148!3d60.0512345!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469634af3bc4d433%3A0xf289dab1e9de7a22!2z0L_RgC4g0JrRg9C70YzRgtGD0YDRiywgMzEsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTUyNzY!5e0!3m2!1sru!2sru!4v1652406359371!5m2!1sru!2sru')
    windowText.innerHTML = 'Калининский район'
    firstLink.innerHTML = 'Невский район'
    secondLink.innerHTML = 'Выборгский район'
    thirdLink.innerHTML = 'Приморский район'
    districtsWindow.classList.remove('visible')
}

const showMap2 = () => {
    map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d838.0129365324692!2d30.40490757978216!3d60.029300629941204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696336a0ee357d5%3A0x2b3edeac91ad7929!2z0YPQuy4g0KPRiNC40L3RgdC60L7Qs9C-LCA1INC60L7RgNC_0YPRgSAxLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywgMTk1MjY3!5e0!3m2!1sru!2sru!4v1652408895814!5m2!1sru!2sru')
    windowText.innerHTML = 'Калининский район'
    firstLink.innerHTML = 'Невский район'
    secondLink.innerHTML = 'Выборгский район'
    thirdLink.innerHTML = 'Приморский район'
    districtsWindow.classList.remove('visible')
}

adressFirst.addEventListener('click', showMap)
adressSecond.addEventListener('click', showMap2)

/* modal window */

const firstLink = document.getElementById('first')
const secondLink = document.getElementById('second')
const thirdLink = document.getElementById('third')
const windowText = document.querySelector('.how-to-find__btn-text')


const changeValues = () => {
    let value1 = windowText.innerHTML
    let value2 = firstLink.innerHTML
    if (value2 === 'Калининский район') {
        map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d995.9093055040354!2d30.3807148!3d60.0512345!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469634af3bc4d433%3A0xf289dab1e9de7a22!2z0L_RgC4g0JrRg9C70YzRgtGD0YDRiywgMzEsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTUyNzY!5e0!3m2!1sru!2sru!4v1652406359371!5m2!1sru!2sru')
    } else if (value2 === 'Невский район') {
        map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64084.62619446003!2d30.395804097548467!3d59.87164776578174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46962f0858658a35%3A0xa637347cf90a0978!2z0J3QtdCy0YHQutC40Lkg0YAt0L0sINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCz!5e0!3m2!1sru!2sru!4v1652411420459!5m2!1sru!2sru')
    } else if (value2 === 'Приморский район') {
        map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63791.61091532765!2d30.07294580261774!3d60.02356562235667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46964a017266b761%3A0x2410c3ec97d9fbf8!2z0J_RgNC40LzQvtGA0YHQutC40Lkg0YAt0L0sINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCz!5e0!3m2!1sru!2sru!4v1652411763703!5m2!1sru!2sru')
    } else if (value2 === 'Выборгский район') {
        map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127525.52807741315!2d30.08989088327946!3d60.03850910964574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469635a2fca813c1%3A0x125e78a795738866!2z0JLRi9Cx0L7RgNCz0YHQutC40Lkg0YAt0L0sINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCz!5e0!3m2!1sru!2sru!4v1652411683088!5m2!1sru!2sru')
    }
    windowText.innerHTML = `${value2}`
    firstLink.innerHTML = `${value1}`
    districtsWindow.classList.remove('visible')
}

const changeValues2 = () => {
    let value1 = windowText.innerHTML
    let value2 = secondLink.innerHTML
    if (value2 === 'Калининский район') {
        map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d995.9093055040354!2d30.3807148!3d60.0512345!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469634af3bc4d433%3A0xf289dab1e9de7a22!2z0L_RgC4g0JrRg9C70YzRgtGD0YDRiywgMzEsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTUyNzY!5e0!3m2!1sru!2sru!4v1652406359371!5m2!1sru!2sru')
    } else if (value2 === 'Невский район') {
        map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64084.62619446003!2d30.395804097548467!3d59.87164776578174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46962f0858658a35%3A0xa637347cf90a0978!2z0J3QtdCy0YHQutC40Lkg0YAt0L0sINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCz!5e0!3m2!1sru!2sru!4v1652411420459!5m2!1sru!2sru')
    } else if (value2 === 'Приморский район') {
        map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63791.61091532765!2d30.07294580261774!3d60.02356562235667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46964a017266b761%3A0x2410c3ec97d9fbf8!2z0J_RgNC40LzQvtGA0YHQutC40Lkg0YAt0L0sINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCz!5e0!3m2!1sru!2sru!4v1652411763703!5m2!1sru!2sru')
    } else if (value2 === 'Выборгский район') {
        map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127525.52807741315!2d30.08989088327946!3d60.03850910964574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469635a2fca813c1%3A0x125e78a795738866!2z0JLRi9Cx0L7RgNCz0YHQutC40Lkg0YAt0L0sINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCz!5e0!3m2!1sru!2sru!4v1652411683088!5m2!1sru!2sru')
    }
    windowText.innerHTML = `${value2}`
    secondLink.innerHTML = `${value1}`
    districtsWindow.classList.remove('visible')
}

const changeValues3 = () => {
    let value1 = windowText.innerHTML
    let value2 = thirdLink.innerHTML
    if (value2 === 'Калининский район') {
        map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d995.9093055040354!2d30.3807148!3d60.0512345!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469634af3bc4d433%3A0xf289dab1e9de7a22!2z0L_RgC4g0JrRg9C70YzRgtGD0YDRiywgMzEsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTUyNzY!5e0!3m2!1sru!2sru!4v1652406359371!5m2!1sru!2sru')
    } else if (value2 === 'Невский район') {
        map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64084.62619446003!2d30.395804097548467!3d59.87164776578174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46962f0858658a35%3A0xa637347cf90a0978!2z0J3QtdCy0YHQutC40Lkg0YAt0L0sINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCz!5e0!3m2!1sru!2sru!4v1652411420459!5m2!1sru!2sru')
    } else if (value2 === 'Приморский район') {
        map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63791.61091532765!2d30.07294580261774!3d60.02356562235667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46964a017266b761%3A0x2410c3ec97d9fbf8!2z0J_RgNC40LzQvtGA0YHQutC40Lkg0YAt0L0sINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCz!5e0!3m2!1sru!2sru!4v1652411763703!5m2!1sru!2sru')
    } else if (value2 === 'Выборгский район') {
        map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127525.52807741315!2d30.08989088327946!3d60.03850910964574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469635a2fca813c1%3A0x125e78a795738866!2z0JLRi9Cx0L7RgNCz0YHQutC40Lkg0YAt0L0sINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCz!5e0!3m2!1sru!2sru!4v1652411683088!5m2!1sru!2sru')
    }
    windowText.innerHTML = `${value2}`
    thirdLink.innerHTML = `${value1}`
    districtsWindow.classList.remove('visible')
}

firstLink.addEventListener('click', changeValues)
secondLink.addEventListener('click', changeValues2)
thirdLink.addEventListener('click', changeValues3)

/* pop-up */

const contactsBlock = document.querySelector('.contacts__second-block')
const popUp = document.querySelector('.contacts__pop-up')
const popUpButton = document.querySelector('.driving-school__button')
const popUpBg = document.querySelector('.pop-up__grey-bg')
const popUpName = document.querySelector('.pop-up__name')
const popUpPhone = document.querySelector('.pop-up__phone')
const closePopUp = document.querySelector('.pop-up-done__button')
const popUpDone = document.querySelector('.contacts__pop-up-done')
const sendRequest = document.querySelector('.pop-up__button')
const checkBtn = document.querySelector('.pop-up__button-check')

console.log(checkBtn.checked)

const togglePopUp = () => {
    popUp.classList.toggle('visible')
}

const togglePopUpDone = () => {
    popUpDone.classList.toggle('visible')
}

const check = () => {
    if (popUpName.value === '' || popUpPhone.value === '' || checkBtn.checked === false) {
        sendRequest.setAttribute('disabled', 'disabled')
    } else if (popUpName.value !== '' || popUpPhone.value !== '' || checkBtn.checked === true) {
        togglePopUp()
        togglePopUpDone()
    }
}
popUpButton.addEventListener('click', togglePopUp)
popUpBg.addEventListener('click', togglePopUp)
closePopUp.addEventListener('click', togglePopUpDone)
sendRequest.addEventListener('click', check)
sendRequest.addEventListener('click', () => setTimeout(() => sendRequest.removeAttribute('disabled', 'disabled'), 1000))