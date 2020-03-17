import { starships } from '../data/starships.js'
import { getLastNumber, removeChildren } from '../utils.js'

const nav = document.querySelector('.nav')

const navList = document.querySelector('.navList')

const shipView = document.querySelector('.main')

const dialog = document.querySelector('.modal')
const closeButton = document.querySelector('.modal-close')
const modalBackground = document.querySelector('.modal-background')

closeButton.addEventListener('click', () => {
    dialog.classList.toggle("is-active")
})

modalBackground.addEventListener('click', () => {
    dialog.classList.toggle("is-active")
})

function populateNav(starships) {
    starships.forEach(starship => {

    let anchorWrap = document.createElement('a')
    anchorWrap.href = '#'
    anchorWrap.addEventListener('click', event => {
        let shipName = event.target.textContent
        const foundShip = starships.find(ship => ship.name === shipName)
        populateShipView(foundShip)

    })

let listItem = document.createElement('li')
listItem.textContent = starship.name

        anchorWrap.appendChild(listItem)
        navList.appendChild(anchorWrap)
        nav.appendChild(navList)
    })
}

function populateShipView(shipData) {
    removeChildren(shipView)
    let shipNum = getLastNumber(shipData.url)
    let shipImage = document.createElement('img')
    shipImage.src = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`
    shipImage.addEventListener('error', event => {
        shipImage.hidden = true
        dialog.classList.toggle("is-active")
        })
    shipView.appendChild(shipImage)
}

populateNav(starships)

const numStars = 100;

// For every star we want to display
for (let i = 0; i < numStars; i++) {
  let star = document.createElement("div");  
  star.className = "star";
  var xy = getRandomPosition();
  star.style.top = xy[0] + 'px';
  star.style.left = xy[1] + 'px';
  document.body.append(star);
}

// Gets random x, y values based on the size of the container
function getRandomPosition() {  
  var y = window.innerWidth;
  var x = window.innerHeight;
  var randomX = Math.floor(Math.random()*x);
  var randomY = Math.floor(Math.random()*y);
  return [randomX,randomY];
}