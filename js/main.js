const URL_API = 'https://psychonauts-api.herokuapp.com/api/characters?limit=30';

$(document).ready(() => {
    getPersonagens();
})


const setName = (n) =>{
    localStorage.setItem('name', n);
    console.log("aaaaa");

}
const getPersonagens = () => {
    $.ajax({
        url: URL_API,
        dataType: 'json',
        success: (data) => {
            let listPersonagens = document.createElement('div');
            $(listPersonagens).addClass('galeria-container');
            $('#personagens').html(listPersonagens);

            data.forEach((p, i) => {
                let per = document.createElement('a');
                let li = document.createElement('div');
                let card = document.createElement('div');
                let cardHeader = document.createElement('div');
                let cardBody = document.createElement('div');
                let dataHtml = document.createElement('img');
                $(li).addClass('galeria-personagem');
                $(per).addClass('lista-personagens');
                $(card).addClass('card');
                $(cardHeader).addClass('card-header');
                $(cardBody).addClass('card-body');
                $(cardHeader).attr('id', `per${i}`);
                $(cardBody).html(`<h2>${p.name}</h2>`);
                $(card).append(cardHeader)
                    .append(cardBody);
                $(li).append(card);
                $(dataHtml).addClass('img-top');
                $(dataHtml).attr('src',p.img);
                $(per).attr('href', 'character.html');
                $(per).attr('onClick', "setName('"+p.name+"')")
                //per.addEventListener('click',()=> setName(p.name));                
                $(per).append(li);
                $(listPersonagens).append(per);
                cardHeader.append(dataHtml);
            });
        }
    });
}

const getIMG = (url, target) => {
    $(target).html(`
        <img  class="img-top" src="${url}" alt="Imagem do personagem""/>`);
}