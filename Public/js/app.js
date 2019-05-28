

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message = document.querySelector('#message-0')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
message.style.display="none"
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    message.style.display="block"
    messageOne.textContent = ''
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            message.style.display="none"
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
                console.log(data.forecast)
                console.log(data.location)
                
            }
        })
    })
})