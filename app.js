//Year 1 - Setup

const container = document.querySelector('#container')
// console.log(container)

const h1 = document.createElement('h1')
h1.innerText = 'Welcome to Hogwarts'

container.appendChild(h1)
// console.log(h1)

// Year 2 - My Info

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

//Year 3 - Trunk & Contents

const trunk = document.createElement('ul')
trunk.setAttribute('storage','trunk')

//Make into function

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

//Year 4 - Class Schedule
const semester = document.createElement('h5')
semester.innerText = 'Fall 2020'
container.appendChild(semester)

const schedule = document.createElement('table')
container.appendChild(schedule)

const header = document.createElement('thead')
schedule.appendChild(header)

const day = document.createElement('th')
day.innerText = 'Day'
header.appendChild(day)

const classes = document.createElement('th')
classes.innerText = 'Classes'
header.appendChild(classes)

const monRow = document.createElement('tr')
schedule.appendChild(monRow)
const mon = document.createElement('td')
mon.innerText = 'Monday'
monRow.appendChild(mon)
const monClass = document.createElement('td')
monClass.innerText = 'Transfiguration, Potions'
monRow.appendChild(monClass)

const tueRow = document.createElement('tr')
schedule.appendChild(tueRow)
const tue = document.createElement('td')
tue.innerText = 'Tuesday'
tueRow.appendChild(tue)
const tueClass = document.createElement('td')
tueClass.innerText = 'Defense Against the Dark Arts, Charms'
tueRow.appendChild(tueClass)

const wedRow = document.createElement('tr')
schedule.appendChild(wedRow)
const wed = document.createElement('td')
wed.innerText = 'Wednesday'
wedRow.appendChild(wed)
const wedClass = document.createElement('td')
wedClass.innerText = '<free period>, Arithmancy'
wedRow.appendChild(wedClass)

const thuRow = document.createElement('tr')
schedule.appendChild(thuRow)
const thu = document.createElement('td')
thu.innerText = 'Thursday'
thuRow.appendChild(thu)
const thuClass = document.createElement('td')
thuClass.innerText = 'Care of Magical Creatues, Ancient Runes'
thuRow.appendChild(thuClass)

const friRow = document.createElement('tr')
schedule.appendChild(friRow)
const fri = document.createElement('td')
fri.innerText = 'Friday'
friRow.appendChild(fri)
const friClass = document.createElement('td')
friClass.innerText = 'Herbology, <free period>'
friRow.appendChild(friClass)