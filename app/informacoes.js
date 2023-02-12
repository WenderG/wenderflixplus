function informacoes() {
    var usuario = window.document.getElementById('nome')
    var email = window.document.getElementById('email')
    var senha = window.document.getElementById('senha')
    var tel = window.document.getElementById('tel')

    const dadosLocalStorage = localStorage.getItem('contas')

    const dados = JSON.parse(dadosLocalStorage)

    usuario.innerHTML = `Usuário: ${dados[0].nome}`
    email.innerHTML = `E-mail: ${dados[0].email}`
    
    var j = []
    for(var i = 0; i < dados[0].senha.length; i++){
        j.push('*')
        var j_ = j.join(' ')
        senha.innerHTML = `Senha: ${j_}`
    }

    tel.innerHTML = `Telefone: ${dados[0].telefone}`

}