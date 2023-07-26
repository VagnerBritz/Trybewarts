function funcaoLoginAlerta() {
  const valorInputEmail = document.querySelector('#input-email-login').value;
  const valorInputSenha = document.querySelector('#input-senha').value;

  if (valorInputEmail === 'tryber@teste.com' && valorInputSenha === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

function habilitaBotaoSubmit() {
  document.querySelector('#submit-btn').disabled = false;
}

function counterCharacter(event) {
  const valorPainel = document.querySelector('#counter');
  const conta = 500 - event.target.value.length;
  valorPainel.innerText = conta;
}

function showSelectedFamily() {
  const familyList = document.querySelectorAll('.radio-family input');
  for (let index = 0; index < familyList.length; index += 1) {
    if (familyList[index].checked) {
      return familyList[index].value;
    }
  }
}

function showCheckedCheckBox() {
  const listaCheckBox = document.querySelectorAll('.subject');
  const listChecked = [];
  for (let i = 0; i < listaCheckBox.length; i += 1) {
    if (listaCheckBox[i].checked) {
      listChecked.push(listaCheckBox[i].value);
    }
  }
  return (listChecked.join(', '));
}

function showRate() {
  const listRate = document.querySelectorAll('#input-rate input');
  for (let i = 0; i < listRate.length; i += 1) {
    if (listRate[i].checked) {
      return listRate[i].value;
    }
  }
}

function showFullName() {
  const name = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  return `${name} ${lastName}`;
}

function showValue(id) {
  const inputValue = document.querySelector(id).value;
  return inputValue;
}

function showInfoUser(event) {
  event.preventDefault();
  const fullName = document.querySelector('.fullName');
  const email = document.querySelector('.email');
  const casa = document.querySelector('.casa');
  const familia = document.querySelector('.familia');
  const materias = document.querySelector('.materias');
  const avaliacao = document.querySelector('.avaliacao');
  const observacoes = document.querySelector('.observacoes');

  fullName.textContent = `Nome: ${showFullName()}`;
  email.textContent = `Email: ${showValue('#input-email')}`;
  casa.textContent = `Casa: ${showValue('#house')}`;
  familia.textContent = `Família: ${showSelectedFamily()}`;
  materias.textContent = `Matérias: ${showCheckedCheckBox()}`;
  avaliacao.textContent = `Avaliação: ${showRate()}`;
  observacoes.textContent = `Observações: ${showValue('#textarea')}`;
}

const botaoLogin = document.querySelector('#botao-login');
botaoLogin.addEventListener('click', funcaoLoginAlerta);

const checkBoxAgreement = document.querySelector('#agreement');
checkBoxAgreement.addEventListener('click', habilitaBotaoSubmit);

const textArea = document.querySelector('textarea');
textArea.addEventListener('keyup', counterCharacter);

const botaoEnviar = document.querySelector('#submit-btn');
botaoEnviar.addEventListener('click', showInfoUser);
