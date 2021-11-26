fetch('http://localhost:8080/v1/info')
  .then(data => {
    return data.json()
  })
  .then(completeData => {
    let data = ''
    let dataCurso = []
    completeData.data.map(value => {
      dataCurso.push(value.cursos)
      data += `
            <div class ="card">
                <h1 class = "title">${value.dadoPessoal.nome}</h1>
                <p>${value.dadoPessoal.idade} anos</p>
                <p>${value.dadoPessoal.nacionalidade}</p>
                <p>${value.dadoPessoal.estadoCivil}</p>
                <p>${value.dadoPessoal.dataNascimento}</p>
                <p>${value.dadoPessoal.endereco}</p>
               
                <br/>
                <h1>Informações de Contato</h1>
                <p>${value.dadoPessoal.telefone}</p>
                <p>${value.dadoPessoal.email}</p>
                <p>
            <img class="linkedinimg" src="../imagens/logo-linkedin.png" alt="" /><a
              href=${value.dadoPessoal.linkedin}
            >
              Linkedin</a
            >
                <br/>
                <h1 class = "title">Escolaridade</h1>
                <p>${value.dadoPessoal.nomeEscola}</p>
                <p>${value.dadoPessoal.escolaridade}</p>

                <br/>
                
     
                </div>`
    })

    document.getElementById('cards').innerHTML = data
    var divIdCursos = document.getElementById('cursos')
    for (i = 0; i < dataCurso[i].length; dataCurso++) {
      divIdCursos.innerHTML += `<p>${dataCurso[i].titulo}</p><br/>`
    }
  })
