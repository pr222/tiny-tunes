/**
 * The main script file of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */
// Exercise 1
const exercise1 = () => {
  const hello = document.querySelector('#step01_hello')

  hello.textContent = 'Hello world!'
}

// Exercise 2
const exercise2 = () => {
  const aSub = document.createElement('h3')

  aSub.textContent = 'This is a sub headline'

  const step2 = document.querySelector('#step02')
  // step2.appendChild(aSub)
  step2.insertBefore(aSub, step2.lastElementChild)
}

// Exercise 3
const exercise3 = () => {
  const step03 = document.querySelectorAll('h2')[3]
  const textNode = document.createTextNode('This is another sub headline')
  const headline = document.createElement('h3')

  headline.appendChild(textNode)

  step03.insertBefore(headline, step03.lastElementChild)
}

// Exercise 4
const exercise4 = () => {
  const styledHeader = document.querySelector('#step04 h2')
  styledHeader.setAttribute('class', 'red')
}

// Exercise 5
const exercise5 = () => {
  const autumn = document.createElement('img')
  autumn.setAttribute('src', 'images/autumn.jpeg')
  autumn.setAttribute('alt', 'Autumn picture')

  const pumpkin = document.createElement('img')
  pumpkin.setAttribute('src', 'images/pumpkin.jpeg')
  pumpkin.setAttribute('alt', 'Pumpkin picture')

  const images = document.querySelector('.images')

  images.appendChild(autumn)
  images.appendChild(pumpkin)
}

// Exercise 6
const exercise6 = () => {
  const list = document.querySelector('ul#list06')
  const fragment = new DocumentFragment()

  for (let i = 0; i < 10; i++) {
    const li = document.createElement('li')
    li.textContent = `List item: ${i + 1}`
    fragment.appendChild(li)
  }

  list.appendChild(fragment)
}

// Exercise 7
const exercise7 = () => {
  const list7 = document.querySelector('#list07')

  const template = document.querySelector('#step07-template')

  for (let i = 0; i < 5; i++) {
    const clone = document.importNode(template.content, true)

    const theLink = clone.querySelector('a')
    theLink.setAttribute('href', 'http://www.google.com')
    theLink.textContent = `The same link nr: ${i + 1}`

    list7.appendChild(clone)
  }
}

const exercise8 = () => {}
const exercise9 = () => {}

exercise1()
exercise2()
exercise3()
exercise4()
exercise5()
exercise6()
exercise7()
exercise8()
exercise9()
