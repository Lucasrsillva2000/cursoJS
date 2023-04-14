function verificar() {
  let data = new Date()
  let ano = data.getFullYear()
  let fano = document.getElementById('txtano')
  let res = document.querySelector('div#res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    let fsex = document.getElementsByName('radsex')
    let idade = ano - Number(fano.value)
    let genero = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', './assets/bebemenino.jpg')
      } else if (idade < 21) {
        //jovem
        img.setAttribute('src', './assets/jovemhomem.jpg')
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src', './assets/adultohomem.jpg')
      } else {
        //idoso
        img.setAttribute('src', './assets/idosohomem.jpg')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', './assets/bebemenina.jpg')
      } else if (idade < 21) {
        //jovem
        img.setAttribute('src', './assets/jovemmulher.jpg')
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src', './assets/adultamulher.jpg')
      } else {
        //idoso
        img.setAttribute('src', './assets/idosamulher.jpg')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}
