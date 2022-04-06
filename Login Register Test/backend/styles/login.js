function login() {
    let username = document.querySelector('.user')
    let password = document.querySelector('.pass')
        
    fetch("http://localhost:3000/login", {
        method:'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({username}),
        body:JSON.stringify({password})
    })
        .then(response => response.text())
        .then(function(chaves) {
                
        })
        
        
}

