function contato(event) {
    event.preventDefault()
    const nome = document.getElementById("nome")
    const email = document.getElementById("email")
    const telefone = document.getElementById("telefone")
    const mensagem = document.getElementById("mensagem")
    const respostaFormulario = document.getElementById("retorno")

    if (nome.value == "" || email.value == "" || telefone.value == "" || mensagem.value == "") {

        respostaFormulario.remove()

        const local = document.getElementById("contato")
        const retornoFormulario = document.createElement("p")
        retornoFormulario.style.fontWeight = "bold";
        retornoFormulario.setAttribute('id', 'retorno')
        retornoFormulario.setAttribute('class', 'retorno-negativo')
        
        const formularioIncompleto = document.createTextNode("Ops! Você deixou um ou mais campo vazio, corrija e envie novamente!")
        retornoFormulario.appendChild(formularioIncompleto)

        local.insertAdjacentElement('beforeend', retornoFormulario)

    } else {

        
        respostaFormulario.remove()

        const local = document.getElementById("contato")
        const retornoFormulario = document.createElement("p")
        retornoFormulario.style.fontWeight = "bold";
        retornoFormulario.setAttribute('id', 'retorno')
        retornoFormulario.setAttribute('class', 'retorno-positivo')

        const formularioCompleto = document.createTextNode("Informações enviadas!")
        retornoFormulario.appendChild(formularioCompleto)

        local.insertAdjacentElement('beforeend', retornoFormulario)

    }
}