const URL_API = 'https://psychonauts-api.herokuapp.com/api/characters?limit=30';
let URL_BUSCA = 'https://psychonauts-api.herokuapp.com/api/characters?name=';

$(document).ready(() => {
    getPersonagens();
})

const buscar = () => {
    let nome = $('#pesquisar').val();
    if (nome == "Do a barrel roll") {
        $('#body').css("transition", "2s");
        $('#body').css("transform", "rotate(360deg)");
        setTimeout(() => {
            $('#body').css("transition", "");
            $('#body').css("transform", "");
        }, 2000)
        console.log("aaaaa");
    } else {
        URL_BUSCA += nome;
        //console.log(nome);
        $.ajax({
            url: URL_BUSCA,
            dataType: 'json',
            success: (data) => {
                //console.log(data);
                let listPersonagens = document.createElement('div');
                $(listPersonagens).addClass('galeria-container');
                $('#personagens').html(listPersonagens);

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
                $(cardHeader).attr('id', `per${0}`);
                $(cardBody).html(`<h2>${data.name}</h2>`);
                $(card).append(cardHeader)
                    .append(cardBody);
                $(li).append(card);
                $(dataHtml).addClass('img-top');
                $(dataHtml).attr('src', data.img);
                $(per).attr('href', 'character.html');
                $(per).attr('onClick', "setName('" + data.name + "')")
                //per.addEventListener('click',()=> setName(p.name));                
                $(per).append(li);
                $(listPersonagens).append(per);
                cardHeader.append(dataHtml);

            }
        });
    }



}

const listar = () => {
    $('#pesquisar').val('');
    getPersonagens();
}

const setName = (n) => {
    localStorage.setItem('name', n);

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
                $(dataHtml).attr('src', p.img);
                $(per).attr('href', 'character.html');
                $(per).attr('onClick', "setName('" + p.name + "')")
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