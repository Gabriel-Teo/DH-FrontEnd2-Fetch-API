// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
// fetch('https://randomuser.me/api/')
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         renderizarDadosUsuario(data)
//         console.log(data)
//     });

    /* --------------------------- Tarefa 1 ------------------------------- */
function renderizarDadosUsuario(dados) {
    let elementoPai = document.querySelector(".card")
        let user = dados.results[0];
        let cardElements = `
        <img src="${user.picture.large}" alt="foto de usuario">
        <h2>${user.name.first} ${user.name.last}</h2>
        <h3>e-mail: ${user.email}</h3>
        <h4>senha: ${user.login.password}</h3>
        `
        elementoPai.innerHTML = cardElements
}

/* --------------------------- Tarefa 2 (extra) --------------------------- */
btnRandom = document.getElementById('random');
btnRandom.addEventListener('click', evento => {
    evento.preventDefault();
    fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        renderizarDadosUsuario(data)
        console.log(data)
    });
})