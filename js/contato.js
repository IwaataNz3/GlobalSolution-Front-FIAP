/* ============================================================
   CONTATO.JS — Validação do formulário de contato
   ============================================================ */

const form = document.getElementById('formContato');

// Elementos dos campos
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const tipoSelect = document.getElementById('tipo');
const mensagemInput = document.getElementById('mensagem');

// Elementos de mensagem
const erroNome = document.getElementById('erroNome');
const erroEmail = document.getElementById('erroEmail');
const erroTipo = document.getElementById('erroTipo');
const erroMensagem = document.getElementById('erroMensagem');
const msgSucesso = document.getElementById('msgSucesso');

// Função para exibir erro
function mostrarErro(input, msgElemento, mensagem) {
  input.parentElement.classList.add('erro');
  msgElemento.textContent = mensagem;
}

// Função para remover erro
function removerErro(input, msgElemento) {
  input.parentElement.classList.remove('erro');
  msgElemento.textContent = '';
}

// Validação de email
function emailEhValido(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Evento de submit do formulário
form.addEventListener('submit', function (event) {
  // Previne o envio real da página
  event.preventDefault();

  let temErro = false;

  // Esconde a mensagem de sucesso ao tentar enviar novamente
  msgSucesso.style.display = 'none';

  // 1. Validação do Nome (mínimo 3 letras)
  if (nomeInput.value.trim().length < 3) {
    mostrarErro(nomeInput, erroNome, 'O nome deve ter pelo menos 3 letras.');
    temErro = true;
  } else {
    removerErro(nomeInput, erroNome);
  }

  // 2. Validação do E-mail
  if (!emailEhValido(emailInput.value.trim())) {
    mostrarErro(emailInput, erroEmail, 'Por favor, insira um e-mail válido.');
    temErro = true;
  } else {
    removerErro(emailInput, erroEmail);
  }

  // 3. Validação do Tipo de dúvida
  if (tipoSelect.value === '') {
    mostrarErro(tipoSelect, erroTipo, 'Selecione o tipo de dúvida.');
    temErro = true;
  } else {
    removerErro(tipoSelect, erroTipo);
  }

  // 4. Validação da Mensagem (mínimo 10 letras)
  if (mensagemInput.value.trim().length < 10) {
    mostrarErro(mensagemInput, erroMensagem, 'A mensagem deve ter no mínimo 10 letras.');
    temErro = true;
  } else {
    removerErro(mensagemInput, erroMensagem);
  }

  // Se não houver erros, mostra sucesso
  if (!temErro) {
    // Exibe mensagem de sucesso
    msgSucesso.style.display = 'block';
    
    // Limpa o formulário
    form.reset();
    
    // Remove mensagens de erro caso existam
    removerErro(nomeInput, erroNome);
    removerErro(emailInput, erroEmail);
    removerErro(tipoSelect, erroTipo);
    removerErro(mensagemInput, erroMensagem);
  }
});