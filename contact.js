submitForm = async () => {
    const name = document.getElementById('form-name').value
    const surname = document.getElementById('form-surname').value
    const email = document.getElementById('form-email').value
    const text = document.getElementById('form-text').value

    const error = document.getElementById('error-message')

    // ak su polia plne
    if(name.length > 0 && surname.length > 0 && email.length > 0 && text.length > 0) {
        error.innerHTML = ''
        const formdata = new FormData()
        formdata.append('firstname', name)
        formdata.append('lastname', surname)
        formdata.append('email', email)
        formdata.append('text', text)
    
        //request na backend
        await fetch(
            'https://cintula.wezeo.camp/cms/api/v1/contact-form',
            {
                method: 'POST',
                body: formdata
            }
        ).then( ()=>{
            //link spat na home page
            window.location.replace(window.location.origin + '/index.html')
        })
    }
    else {
        // ak niesu polia plne
        error.innerHTML = 'Musíte vyplniť všetky polia!'
    }
}