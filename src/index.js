/**
 * The main script file of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author // TODO: YOUR NAME <YOUR EMAIL>
 * @version 1.0.0
 */

// Since our components does not export anything we just nu to import the module
// to register the component. index.js is added if not present in the url.
import './components/tiny-tune/'
import './components/the-time/'

// TODO: Write your code here!

/**
 * In this solution we don´t split the different function into different modules
 * We use this solution to get a simple overview since the code is the important stuff here.
 * If you like, please go ahead and place the functions in a separate module.
 *
 * The functions below will most definitely have side effects.
 * I.e., they are not considered pure functions.
 */

const exercise01 = () => {
  const tag = document.querySelector('#step01_hello')
  const textNode = document.createTextNode('Hello World!')
  tag.appendChild(textNode)
}

const exercise02 = () => {
  const step02 = document.querySelector('#step02')
  const textNode = document.createTextNode('This is a sub headline')
  const headline = document.createElement('h3')
  headline.appendChild(textNode)
  step02.insertBefore(headline, step02.lastElementChild)
}

const exercise03 = () => {
  const headlines = document.querySelectorAll('h2')
  const textNode = document.createTextNode('This is a sub headline')
  const headline = document.createElement('h3')
  headline.appendChild(textNode)

  const parent = headlines[3].parentElement
  parent.insertBefore(headline, parent.lastElementChild)
}

const exercise04 = () => {
  // Also updating styles.css with the class red.
  document.querySelector('#step04 h2').classList.add('red')
}

const exercise05 = () => {
  const images = []
  images.push(document.createElement('img'))
  images.push(document.createElement('img'))

  images[0].setAttribute('alt', 'Sun shining through the autumn leafs')
  images[1].setAttribute('alt', 'A small pumpking with a cup of coffey on the side')

  images[0].setAttribute('src', 'images/autumn.jpeg')
  images[1].setAttribute('src', 'images/pumpkin.jpeg')
  const container = document.querySelector('#step05 .images')
  container.appendChild(images[0])
  container.appendChild(images[1])
}

const exercise06 = () => {
  const frag = document.createDocumentFragment()

  // Create numerous list items, add to fragment
  for (let i = 0; i < 10; i += 1) {
    const li = document.createElement('li')
    li.innerHTML = 'List item ' + (i + 1)
    frag.appendChild(li)
  }

  document.querySelector('#list06').appendChild(frag)
}

const exercise07 = () => {
  let liTemplate
  const templateNode = document.querySelector('#step07-template')

  for (let i = 0; i < 5; i += 1) {
    liTemplate = document.importNode(templateNode.content, true)
    liTemplate.firstElementChild.querySelector('a').innerHTML = 'Min länk'
    liTemplate.querySelector('a').setAttribute('href', 'http://sunet.se')
    document.querySelector('#list07').appendChild(liTemplate)
  }
}

// See imported modules in head of HTML and elments directly in HTML as well.
// Since I want to use them in this JS I will also import them in this module.
// They will not be loaded twice.

const exercise08 = () => {
  const secondTune = document.createElement('tiny-tune')
  document.querySelector('#step08').appendChild(secondTune)
}

const exercise09 = () => {
  const secondTime = document.createElement('the-time')
  document.querySelector('#step09').appendChild(secondTime)
}

// Well this maybe look bad but for this exercise it OK. Simple to call simple to comment out.
exercise01()
exercise02()
exercise03()
exercise04()
exercise05()
exercise06()
exercise07()
exercise08()
exercise09()
