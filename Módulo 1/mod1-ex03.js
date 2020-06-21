// 3º exercício - Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript" e retorna um booleano true/false caso exista ou não. Dica: para verificar se um vetor contém um valor, utilize o método indexOf.

function temHabilidade(skills) {
  return skills.indexOf("Javascript") !== false;
}

var skills = ["Javascript", "ReactJS", "React Native"];

console.log(temHabilidade(skills));
