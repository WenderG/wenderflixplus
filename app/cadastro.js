const form = window.document.getElementById('novaConta')

const contasCadastradas = []
const contas = localStorage.getItem('contas') || []


form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const email = evento.target['email']
    const senha = evento.target['senha']
    const c_senha = evento.target['c_senha']
    const telefone = evento.target['telefone']

    const existe = contas.find(elemento => elemento.email === email.value)

    const conta = {
        "email": email.value,
        "senha": senha.value,
        "c_senha": c_senha.value,
        "telefone": telefone.value,
    }

    if(existe) {
        conta.id = existe.id
    } else {
        conta.id = contasCadastradas.length
        contasCadastradas.push(conta)
    }

    localStorage.setItem("contas", JSON.stringify(contasCadastradas))
    
    email.value = ""
    senha.value = ""
    c_senha.value = ""
    telefone.value = ""

    // window.location.href = 'index.html'

})

