const containter = document.querySelector('#container')
// console.log(container)

const h1 = document.createElement('h1')
h1.innerText = 'Welcome to Hogwarts'

containter.appendChild(h1)
// console.log(h1)

const me = document.createElement('h2')
me.innerText = 'Elizabeth Guerra'
containter.appendChild(me)

const house = document.createElement('h3')
house.innerText = 'Hufflepuff'
containter.appendChild(house)

const pet = document.createElement('h4')
pet.innerText = 'Tali'
pet.classList.add('cat')
containter.appendChild(pet)

const wand = document.createElement('h4')
wand.innerText = 'Hornbeam and Dragon Heartstring'
containter.appendChild(wand)