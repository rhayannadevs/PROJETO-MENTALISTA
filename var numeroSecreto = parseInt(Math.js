var numeroSecreto = parseInt(Math.random() * 1001) + 1
var nomeUser = prompt ('Olá viajante, como posso chamar você?')
var tentativasSuf = 0
var tentativasJogador = 10
while(chute!=numeroSecreto) {
  tentativasSuf +=1
  var tentativasExced = tentativasJogador - tentativasSuf
    var chute = prompt('Acha que consegue acertar o número certo entre 1 e 1000? Então comece a tentar e boa sorte ' + nomeUser + (', você só tem 10 tentativas.'))
    if (chute == numeroSecreto) {
      alert('É isso aí! Número correto, parabéns ' + nomeUser + '!!')
    }
    else if (chute>numeroSecreto) {
      alert(
        'Quase lá ' + nomeUser + '! Seu número é menor que ' + chute + '. Continue tentando! ' + tentativasExced + ' tentativas restantes')
    }
    else if (chute<numeroSecreto) {
      alert(
        'Quase lá ' + nomeUser + '! Seu número é maior que ' + chute + '. Continue tentando! ' + tentativasExced + ' tentativas restantes!' ) 
    }
  if (tentativasExced == 0) {
 alert('Suas tentativas estão esgotadas, o número correto era ' + numeroSecreto + '. Mais sorte da próxima!')
    break
    }
    }
  

