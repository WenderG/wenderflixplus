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

    contasCadastradas.push({nome, email, c_email, senha, c_senha, telefone})

    localStorage.setItem("contas", JSON.stringify(contasCadastradas))

    alert("Cadastro realizado com sucesso!")

})





