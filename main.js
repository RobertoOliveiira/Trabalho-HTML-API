/* # Confs */
const URL_API = 'https://psychonauts-api.herokuapp.com/api/characters?limit=30';

$(document).ready(() => {
    getPersonagens();
})


const getName = (n) =>{
    localStorage.setItem('name', n);

}

const getPersonagens = () => {
    $.ajax({
        url: URL_API,
        dataType: 'json',
        success: (data) => {
            let listPkm = document.createElement('div');
            $(listPkm).addClass('row');
            $('#personagens').html(listPkm);

            data.forEach((p, i) => {
                //console.log(p);
                //console.log(i);
                let per = document.createElement('a');
                let li = document.createElement('div');
                let card = document.createElement('div');
                let cardHeader = document.createElement('div');
                let cardBody = document.createElement('div');
                let dataHtml = document.createElement('img');
                $(li).addClass('col-4');

                $(card).addClass('card');
                $(cardHeader).addClass('card-header');
                $(cardBody).addClass('card-body');

                $(cardHeader).attr('id', `ch-pkm${i}`);
                $(cardBody).html(`<h2>${p.name}</h2>`);


                $(card).append(cardHeader)
                    .append(cardBody);
                $(li).append(card);
                
                $(dataHtml).addClass('img-top');
                $(dataHtml).attr('src',p.img);
                
                $(per).attr('href', 'character.html');
                //$(per).attr('onClick', `getName("${p.name}")`);
                per.addEventListener('click',()=> getName(p.name));                
$(per).append(li);
                //$(per).attr('href', character.html);
                //per.href(character.html);
                $(listPkm).append(per);
                cardHeader.append(dataHtml);
                //console.log(p.img);
            });
        }
    });
}

// URL: Object pokemon.url
const getIMG = (url, target) => {
    $(target).html(`
        <img  class="img-top" src="${url}" alt="Imagem do personagem""/>`);
}

