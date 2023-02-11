function verificacao() {
    const email_usuario = window.document.getElementById("email_usuario")
    const senha_usuario = window.document.getElementById("senha_usuario")

    const dados = localStorage.getItem("contas")
    const result = JSON.parse(dados)[0].email

    if(email_usuario == dados.find(element => element = email_usuario))
        alert("sucesso")
    else
        alert("tente de novo")

}