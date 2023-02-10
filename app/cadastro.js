const form = window.document.getElementById('novaConta')

const contasCadastradas = []

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const email = evento.target['email']
    const senha = evento.target['senha']
    const c_senha = evento.target['c_senha']
    const telefone = evento.target['telefone']

    criaElemento(email.value, senha.value, c_senha.value, telefone.value)

    email.value = ""
    senha.value = ""
    c_senha.value = ""
    telefone.value = ""
})

function criaElemento(email, senha, c_senha, telefone) {
    const conta = {
        "email": email,
        "senha": senha,
        "c_senha": c_senha,
        "telefone": telefone,
    }

    contasCadastradas.push(conta)

    localStorage.setItem("novaConta", JSON.stringify(contasCadastradas))
}

