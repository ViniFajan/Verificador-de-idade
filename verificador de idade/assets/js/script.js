function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')


    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique a data e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if (fsex[0].checked) {
            genero = 'homem'
            

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'assets/images/homem-criança.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'assets/images/homem-jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'assets/images/homem-adulto.png')
            }else {
                img.setAttribute('src', 'assets/images/homem-idoso.png')
            }
        } else {
            genero = 'mulher'


            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'assets/images/mulher-criança.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'assets/images/mulher-jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'assets/images/mulher-adulta.png')
            }else {
                img.setAttribute('src', 'assets/images/mulher-idosa.png')
            }
        }


        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}