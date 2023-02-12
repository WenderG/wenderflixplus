const form = window.document.getElementById('novaConta')

const contasCadastradas = []

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    let nome = window.document.getElementById('nome').value
    let email = window.document.getElementById('email').value
    let c_email = window.document.getElementById('c_email').value
    let senha = window.document.getElementById('senha').value
    let c_senha = window.document.getElementById('c_senha').value
    let telefone = window.document.getElementById('telefone').value

    if(localStorage.hasOwnProperty("contasCadastradas")) {
        contasCadastradas = JSON.parse(localStorage.getItem("contasCadastradas"))
    }
    
    if(email != c_email)
        alert("Os email estão diferentes!")
    else if(senha != c_senha)
        alert("As senhas estão diferentes!")
    else{
        contasCadastradas.push({nome, email, c_email, senha, c_senha, telefone})

        localStorage.setItem("contas", JSON.stringify(contasCadastradas))

        alert("Cadastro realizado com sucesso!")
        window.location.replace('index.html')
    }
    
})





