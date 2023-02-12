const form = window.document.getElementById('login')

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const email_usuario = window.document.getElementById("email_usuario").value
    const senha_usuario = window.document.getElementById("senha_usuario").value

    const dadosLocalStorage = localStorage.getItem('contas')
    
    const dados = JSON.parse(dadosLocalStorage)

    let buscaEncontrada = false

    for(let i = 0; i < dados.length; i++){
        if(email_usuario === dados[i].email){
            if(senha_usuario === dados[i].senha){ 
                buscaEncontrada = true
                break}
        }
            
    }

    if(buscaEncontrada){
        alert("Aproveite os filmes!")
        window.location.replace('home.html')
    }else{
        alert("Dados incorretos ou não cadastrados")
    }

})   
