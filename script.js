// otvorenie galerie
openImage = function(img) {
    let photo = document.getElementById('image')
    photo.src = img.src

    document.getElementById('body').style.overflow = 'hidden'

    document.getElementById('preview').style.display = 'block'
}

// zavretie galerie
closeSelectedPicture = function() {
    document.getElementById('body').style.overflow = 'visible'
    document.getElementById('preview').style.display = 'none'
}

// header menenie
window.addEventListener('scroll', (event) => {
    if(this.scrollY > 0) {
        document.getElementById('nav').classList.add('filled-header')
    }
    else document.getElementById('nav').classList.remove('filled-header')
})

// zobrazit viac interier
showInterier = function() {
    document.getElementById('interier-viac').style.display = 'block'
    document.getElementById('interier').style.display = 'none'
}

// zobrazit viac exterier
showExterier = function() {
    document.getElementById('exterier-viac').style.display = 'block'
    document.getElementById('exterier').style.display = 'none'
}


// odosielanie newsletter
sendNewsLetter = async () => {

    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const email = document.getElementById('news-email')
    const formdata = new FormData()

    if(email.value.match(mailformat)) {
        formdata.append('email', email.value)

        await fetch(
            'https://cintula.wezeo.camp/cms/api/v1/newsletter/subscribe',
            {
                method: 'POST',
                body: formdata
            }
        ).then(()=> {
            email.value = ''
        })
    }

}

isValidEmail = function() {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const email = document.getElementById('news-email')
    if(email.value.match(mailformat)) {
        email.classList.add('isValid')
        email.classList.remove('isInvalid')
    }
    else {
        email.classList.remove('isValid')
        email.classList.add('isInvalid')
    }
}