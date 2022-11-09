let URL_API = 'https://psychonauts-api.herokuapp.com/api/characters?name=';

$(document).ready(() => {
    URL_API += localStorage.getItem('name');
    //console.log(URL_API);
    getInfo();
})


const getInfo = () => {
    $.ajax({
        url: URL_API,
        dataType: 'json',
        success: (data) => {
            let Personagem = document.createElement('div');
            $(Personagem).addClass('character-container');
            $('#personagem').html(Personagem);

            let charImg = document.createElement('div');
            $(charImg).addClass('img-character-container');
            let img = document.createElement('img');

            let inf = document.createElement('div');
            $(inf).addClass('inf-container');
            let name = document.createElement('h3');
            let gen = document.createElement('p');

            let powers = document.createElement('div');
            $(powers).addClass('powers');
            $(powers).html(createPowerList(data));

            $(img).attr('src',data.img);
            $(name).text(data.name);
            $(gen).text(data.gender);

            $(charImg).append(img);
            $(inf).append(name)
                    .append(gen);

            $(personagem).append(charImg)
                    .append(inf)
                    .append(powers);
        }
    });
}

const createPowerList = (data) =>{
    let list = document.createElement('div');
    $(list).addClass('power-list');
    data.psiPowers.forEach((p, i) => {
                let container = document.createElement('div');
                let imgContainer = document.createElement('div');
                let img = document.createElement('img');
                let name = document.createElement('h4');
                let describe = document.createElement('p');
                
                $(container).addClass('power-container');
                $(imgContainer).addClass('img-power-container');
                $(img).attr('src',p.img);
                $(name).addClass('power-name');
                $(name).text(p.name);
                $(describe).addClass('power-describe');
                $(describe).text(p.description);

                $(imgContainer).append(img);    
                
                $(container).append(imgContainer)
                    .append(name)
                    .append(describe);

                $(list).append(container);
            });
    return list;
}

const getIMG = (url, target) => {
    $(target).html(`
        <img  class="img-top" src="${url}" alt="Imagem do personagem""/>`);
}