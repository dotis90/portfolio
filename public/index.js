console.log("Awyeah")

$(document).ready(function () {
    $('.form-button').click(function (e) {
        console.log('Clicked')

        let name = $('.name').val()
        let email = $('.email').val()
        let subject = $('.subject').val()
        let message = $('.message').val()
        
        if(!name.length > 1){
            e.preventDefault()
            alert('Please enter your name.')
        }

        if(!email.length > 5 || !email.includes('@') || !email.includes('.')) {          
            e.preventDefault()
            alert('Please enter a valid email.')
        }

        if(!subject.length >= 1) {
            e.preventDefault()
            alert('Please enter a subject.')
        }

        if(!message.length > 1) {
            e.preventDefault()
            alert('Please enter a message.')
        }
    })
})