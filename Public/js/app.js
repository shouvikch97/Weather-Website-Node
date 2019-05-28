

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
            if (data.error) {
                message.style.display="none"
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
                console.log(data.forecast)
                console.log(data.location)
                
            }
        })
    })
})