function verifica() {
    var date = new Date();
    var anoAtual = date.getFullYear();
    var anoTxt = document.getElementById('anoNasceu');
    var anoNasc = anoTxt.value
    var res = document.getElementById('resultado');

    if (anoNasc <= 0 || anoNasc > anoAtual) {
        window.alert('[ERRO] Verifique os dados e tente novamente');

    } else {
        var txtsex = document.getElementsByName('txtsex');
        var genero = ''
        var idade = anoAtual - anoNasc;
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if(txtsex[0].checked) {

            document.body.style.background = 'linear-gradient(135deg, #003B9D 0%, #BAE1F3 100%) fixed';

            if (idade < 10) {
                var genero = 'Menino'
                img.setAttribute('src','img/menino.png')
            } else if (idade < 21) {
                var genero = 'Jovem'
                img.setAttribute('src', 'img/jovem-h.png')
            } else if (idade < 50) {
                var genero = 'Homem'
                img.setAttribute('src', 'img/homem.png')
            } else {
                var genero = 'Senhor'
                img.setAttribute('src', 'img/idoso.png')
            }

        } else if (txtsex[1].checked) {

            document.body.style.background = 'linear-gradient(135deg, #FF9DE9 0%, #C3ECFF 100%) fixed';

            if (idade < 10) {
                var genero = 'Menina'
                img.setAttribute('src','img/menina.png')
            } else if (idade < 21) {
                var genero = 'Jovem'
                img.setAttribute('src','img/jovem-m.png')
            } else if (idade <50) {
                var genero = 'Mulher'
                img.setAttribute('src','img/mulher.png')
            } else {
                var genero = 'Senhora'
                img.setAttribute('src','img/idosa.png')
            }
        }    
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos: <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
        res.appendChild(img);
    }
}