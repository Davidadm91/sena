function menu() {
  document.getElementById('myDropdown').classList.toggle('show')
}
window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    let myDropdown = document.getElementById('myDropdown')
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show')
    }
  }
}

function cad(){
  confirm("voce deseja cadastrar algun(s) jogo(s) ?")
}

function atual(){
 confirm("voce deseja atualizar o cadastro ?")
}



function apag(){
  confirm('voce deseja apagar o cadrastro ?')
}
function valida(){
  
  let id = document.getElementById("id_j").value;
  let nome = document.getElementById('nome_j').value;
  let genero = document.getElementById('gen_j').value;
  let produtora = document.getElementById('emp_ds').value;
  
  if(id == ''|| id == null || id == undefined ){
    alert("preencha o campo ID ")
    return false
  }
  else if( nome == '' || nome == null || nome == undefined){
    alert('digite o nome de um jogo')
    return false
  }
  else if(genero =="" || genero == null){
    alert('preencha o campo genero ')
  }
  else if (produtora == ''|| produtora == null){
    alert('preencha o campo empresa desenvolvedora')
  }
  else confirm("deseja enviar ?")
}

