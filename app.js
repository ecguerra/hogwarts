const container = document.querySelector('#container')
// console.log(container)

const h1 = document.createElement('h1')
h1.innerText = 'Welcome to Hogwarts'

container.appendChild(h1)
// console.log(h1)

const me = document.createElement('h2')
me.innerText = 'Elizabeth Guerra'
container.appendChild(me)

const house = document.createElement('h3')
house.innerText = 'Hufflepuff'
container.appendChild(house)

const pet = document.createElement('h4')
pet.innerText = 'Tali'
pet.classList.add('cat')
container.appendChild(pet)

const wand = document.createElement('h4')
wand.innerText = 'Hornbeam and Dragon Heartstring'
container.appendChild(wand)

const trunk = document.createElement('ul')
trunk.setAttribute('storage','trunk')

const butterbeer = document.createElement('li')
butterbeer.innerText ='butterbeer'
trunk.appendChild(butterbeer)

const invCloak = document.createElement('li')
invCloak.classList.add('secret')
invCloak.innerText = 'invisibility cloak'
trunk.appendChild(invCloak)

const magicMap = document.createElement('li')
magicMap.classList.add('secret')
magicMap.innerText = 'magic map'
trunk.appendChild(magicMap)

const timeTurner = document.createElement('li')
timeTurner.classList.add('secret')
timeTurner.innerText = 'time turner'
trunk.appendChild(timeTurner)

const leash = document.createElement('li')
leash.classList.add('cat')
leash.innerText = 'leash'
trunk.appendChild(leash)

const bbBeans = document.createElement('li')
bbBeans.innerText = 'Bertie Bott\'s Every Flavor Beans'
trunk.appendChild(bbBeans)

container.appendChild(trunk)