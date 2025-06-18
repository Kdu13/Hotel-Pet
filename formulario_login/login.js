let virado = false;
function girar() {
    const card = document.querySelector('.card');
    virado = !virado;
    card.style.transform = virado ? 'rotateY(180deg)' : 'rotateY(0deg)';
}


window.addEventListener('DOMContentLoaded', () => {
  const formEntrar = document.querySelector('.form_entrar');
  const emailLogin = formEntrar.querySelector('#email_login');
  const senhaLogin = formEntrar.querySelector('#senha_login');
  const botaoEntrar = formEntrar.querySelector('.botao_entrar');

  function validarEntrar() {
    const emailOk = emailLogin.value.trim() !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLogin.value);
    const senhaOk = senhaLogin.value.trim().length >= 6;
    if (emailOk && senhaOk) {
      botaoEntrar.disabled = false;
      botaoEntrar.classList.add('ativo');
    } else {
      botaoEntrar.disabled = true;
      botaoEntrar.classList.remove('ativo');
    }
  }

  emailLogin.addEventListener('input', validarEntrar);
  senhaLogin.addEventListener('input', validarEntrar);
  validarEntrar();

  const formCadastro = document.querySelector('.form_cadastro');
  const nome = formCadastro.querySelector('#nome');
  const sobrenome = formCadastro.querySelector('#sobrenome');
  const email = formCadastro.querySelector('#email_cadastro');
  const celular = formCadastro.querySelector('#celular');
  const senha = formCadastro.querySelector('#senha_cadastro');
  const termos = formCadastro.querySelector('#termos_condicoes_privacidade');
  const botaoCadastrar = formCadastro.querySelector('.botao_cadastrar');

  function validarCadastro() {
    const nomeOk = nome.value.trim() !== '';
    const sobrenomeOk = sobrenome.value.trim() !== '';
    const emailOk = email.value.trim() !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
    const celularOk = celular.value.trim().length === 15;
    const senhaOk = senha.value.trim().length >= 6;
    const termosOk = termos.checked;

    if (nomeOk && sobrenomeOk && emailOk && celularOk && senhaOk && termosOk) {
      botaoCadastrar.disabled = false;
      botaoCadastrar.classList.add('ativo');
    } else {
      botaoCadastrar.disabled = true;
      botaoCadastrar.classList.remove('ativo');
    }
  }

  celular.addEventListener('input', (e) => {
    let valor = e.target.value.replace(/\D/g, "");
    if (valor.length > 11) valor = valor.slice(0, 11);

    if (valor.length >= 2 && valor.length <= 6) {
      valor = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
    } else if (valor.length > 6) {
      valor = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7)}`;
    }
    e.target.value = valor;
    validarCadastro();
  });

  [nome, sobrenome, email, senha, termos].forEach(el => {
    el.addEventListener('input', validarCadastro);
    el.addEventListener('change', validarCadastro);
  });

  validarCadastro();
});

document.querySelectorAll('.toggle_senha').forEach(olho => {
  olho.addEventListener('click', () => {
    const inputId = olho.getAttribute('data-input');
    const input = document.getElementById(inputId);
    const tipo = input.getAttribute('type');

    if (tipo === 'password') {
      input.setAttribute('type', 'text');
      olho.classList.remove('fa-eye');
      olho.classList.add('fa-eye-slash');
    } else {
      input.setAttribute('type', 'password');
      olho.classList.remove('fa-eye-slash');
      olho.classList.add('fa-eye');
    }
  });
});

const continuar = () => {
  localStorage.setItem('usuarioLogado', 'João');
    window.location.href = "../index.html";
}


