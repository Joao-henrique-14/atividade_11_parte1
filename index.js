function mostrarNome() {
    let h1= document.createElement("h1");
    let inputName= document.querySelector("#nome");
    let textoNovo= document.createTextNode (`Bem vindo! ${inputName.value} :) `);
    h1.appendChild(textoNovo);
    document.body.appendChild(h1);
}
function mostarIdade() {
    let h1= document.createElement("h1");
    let inputIdade= document.querySelector("#idade");
    let texto_novo= document.createTextNode(` Você possuí ${inputIdade.value} anos certo?`);
    h1.appendChild(texto_novo);
    document.body.appendChild(h1);

}
let botaoOk= document.querySelector("#botao");
botaoOk.addEventListener("click",mostrarNome);
let botao= document.querySelector("#botao");
botaoOk.onClick= mostrarNome;

let botao2= document.querySelector("#button");
botao2.addEventListener("click",mostarIdade);
botao2.onClick= mostarIdade;

