// main.js
// Projeto: Minimercado Manauara – Fase 2
// Descrição: Lógicas de filtro, máscara de CPF, modal de cadastro, etc.

document.addEventListener('DOMContentLoaded', () => {
  
  // ======== Filtro de produtos =========
  const filters = document.querySelectorAll('.list-group-item[data-filter]');
  const cards = document.querySelectorAll('.produto-card-wrapper');

  if (filters.length && cards.length) {
    filters.forEach(filterItem => {
      filterItem.addEventListener('click', e => {
        e.preventDefault();
        const category = filterItem.dataset.filter;

        // marca o item ativo
        filters.forEach(i => i.classList.remove('active'));
        filterItem.classList.add('active');

        // exibe/esconde cards
        cards.forEach(card => {
          const cardCat = card.dataset.category;
          if (category === 'todos' || cardCat === category) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ======== Controle de quantidade no detalhe do produto =========
  const qtyInput = document.getElementById('quantity');
  const btnDec  = document.getElementById('btn-decrease');
  const btnInc  = document.getElementById('btn-increase');

  if (qtyInput && btnDec && btnInc) {
    btnDec.addEventListener('click', () => {
      let v = parseInt(qtyInput.value) || 1;
      if (v > 1) qtyInput.value = v - 1;
    });
    btnInc.addEventListener('click', () => {
      let v = parseInt(qtyInput.value) || 1;
      qtyInput.value = v + 1;
    });
  }

  // ======== Restringe datas anteriores no agendamento =========
  const dtInput = document.getElementById('dataHora');
  if (dtInput) {
    const now = new Date();
    const iso = now.toISOString().slice(0, 16);
    dtInput.min = iso;
  }
});

  // ======== Modal de cadastro =========
  const formCadastro = document.getElementById('formCadastro');
  const cadastroModalEl = document.getElementById('cadastroModal');

  if (formCadastro && cadastroModalEl) {
    const cadastroModal = new bootstrap.Modal(cadastroModalEl);

    formCadastro.addEventListener('submit', e => {
      e.preventDefault();
      cadastroModal.show();
      formCadastro.reset();
    });
  }

