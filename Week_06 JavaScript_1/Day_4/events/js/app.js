document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded')

  // 1 Element
  const button = document.querySelector('#button')
  // 2 Event
  button.addEventListener('click', handleButtonClick)

  // Input
  // 1 Element
  const input = document.querySelector('#input')
  // 2 Event
  input.addEventListener('input', handleInput)

  // Select
  const select = document.querySelector('select')
  select.addEventListener('change', handleSelect)

  // Form

  const form = document.querySelector('form')
  form.addEventListener('submit', handleForm)
})

// Button
// 3 Callback - responsible for updating the paragraph
const handleButtonClick = function () {
  const resultParagrah = document.querySelector('#button-result')
  console.dir(resultParagrah)
  resultParagrah.textContent = "That button has certainly been clicked."
}

// Input
// 3 callback
const handleInput = function (event) {
  // Get value from Input
  console.log(event.target.value)
  // Grab paragraph element
  const resultParagrah = document.querySelector('#input-result')
  // Update paragraph text - You typed: {value}
  resultParagrah.textContent = `You typed: ${event.target.value}`
}

// Select

const handleSelect = function (event) {
  const resultParagrah = document.querySelector('#select-result')
  resultParagrah.textContent = `You went with: ${event.target.value}`
}

// Form

const handleForm = function (event) {
  event.preventDefault()
  console.log(event.target)
  const resultParagrah = document.querySelector('#form-result')
  resultParagrah.textContent = `Your name: ${event.target.first_name.value} ${event.target.last_name.value}`
}