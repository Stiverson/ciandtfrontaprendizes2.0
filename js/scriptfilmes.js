fetch('http://localhost:8080/v1/info')
  .then(data => {
    return data.json()
  })
  .then(completeData => {
    let data = ''
    let filmesArray = []
    completeData.data.map(value => {
      value.filmes.map(filme => {
        filmesArray.push(filme)
      })
    })
    filmesArray.map(value => {
      data += `
            <div class ="card">
                <h1 class= "title">Filme</h1>
                <p>${value.titulo}</p>
                <p>${value.diretor}</p>
                <p>${value.elenco}</p>
                <p>${value.data_lancamento}</p>
                <p>${value.duracao}</p>
                <p>${value.streaming}</p>
                </div>
              `
    })

    document.getElementById('cards').innerHTML = data
  })
