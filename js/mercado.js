/* ============================================================
   MERCADO.JS — Lógica do Dashboard B2B
   Usa: Arrays, Objetos, Eventos e DOM
   ============================================================ */

// 1. DADOS MOCKADOS (Arrays e Objetos)
// Simulando os materiais que a empresa recuperou e está vendendo.
const produtosEstoque = [
  { id: 1, nome: "Alumínio Aeroespacial Reciclado", preco: 15000, ods: "ODS 12 - Consumo Responsável" },
  { id: 2, nome: "Titânio de Alta Resistência", preco: 45000, ods: "ODS 9 - Indústria e Inovação" },
  { id: 3, nome: "Ligas de Cobre e Ouro (Fiação)", preco: 28000, ods: "ODS 12 - Consumo Responsável" },
  { id: 4, nome: "Componentes Eletrônicos Intactos", preco: 12000, ods: "ODS 13 - Ação Contra Mudança Global" }
];

// O carrinho de compras será um Array que vai guardar os objetos adicionados
let carrinho = [];

// 2. ELEMENTOS DO DOM
const listaProdutosDOM = document.getElementById("listaProdutos");
const listaCarrinhoDOM = document.getElementById("listaCarrinho");
const valorTotalDOM = document.getElementById("valorTotal");
const btnFinalizar = document.getElementById("btnFinalizar");
const msgCompra = document.getElementById("msgCompra");

// Função para formatar moeda em Reais
function formatarMoeda(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// 3. RENDERIZAR ESTOQUE (Manipulação de DOM + Arrays)
function renderizarEstoque() {
  // Limpa o HTML atual
  listaProdutosDOM.innerHTML = "";

  // Passa por cada produto no array
  for (let i = 0; i < produtosEstoque.length; i++) {
    let produto = produtosEstoque[i];

    // Cria a estrutura HTML do card do produto
    let divCard = document.createElement("div");
    divCard.classList.add("produto-card");

    divCard.innerHTML = `
      <div class="produto-info">
        <h3>${produto.nome}</h3>
        <p class="produto-preco">${formatarMoeda(produto.preco)} / tonelada</p>
        <span class="produto-ods">${produto.ods}</span>
      </div>
      <button class="btn-add" onclick="adicionarAoCarrinho(${produto.id})">Adicionar</button>
    `;

    listaProdutosDOM.appendChild(divCard);
  }
}

// 4. LÓGICA DO CARRINHO (Eventos + Objetos)
// Função ativada pelo botão "Adicionar" (onclick no HTML gerado)
function adicionarAoCarrinho(idProduto) {
  // Ocultar mensagem de sucesso, caso tenha sido mostrada antes
  msgCompra.style.display = "none";

  // Encontra o produto correto no array de estoque
  let produtoSelecionado;
  for (let i = 0; i < produtosEstoque.length; i++) {
    if (produtosEstoque[i].id === idProduto) {
      produtoSelecionado = produtosEstoque[i];
      break;
    }
  }

  // Adiciona no array do carrinho
  carrinho.push(produtoSelecionado);
  
  // Atualiza a tela
  atualizarCarrinhoDOM();
}

function removerDoCarrinho(indexArray) {
  // Remove 1 elemento da posição indexArray
  carrinho.splice(indexArray, 1);
  atualizarCarrinhoDOM();
}

function atualizarCarrinhoDOM() {
  listaCarrinhoDOM.innerHTML = "";
  let total = 0;

  if (carrinho.length === 0) {
    listaCarrinhoDOM.innerHTML = '<li class="carrinho-vazio">Seu pedido está vazio.</li>';
    btnFinalizar.disabled = true;
  } else {
    btnFinalizar.disabled = false;

    // Desenha cada item no carrinho
    for (let i = 0; i < carrinho.length; i++) {
      let item = carrinho[i];
      total += item.preco;

      let li = document.createElement("li");
      li.classList.add("carrinho-item");
      li.innerHTML = `
        <span class="item-nome">${item.nome}</span>
        <div>
          <span class="item-preco">${formatarMoeda(item.preco)}</span>
          <button class="btn-remover" onclick="removerDoCarrinho(${i})">×</button>
        </div>
      `;
      listaCarrinhoDOM.appendChild(li);
    }
  }

  // Atualiza o texto do valor total
  valorTotalDOM.textContent = formatarMoeda(total);
}

// 5. EVENTO DO BOTÃO FINALIZAR
btnFinalizar.addEventListener("click", function() {
  if (carrinho.length > 0) {
    // Esvazia o array do carrinho
    carrinho = [];
    
    // Atualiza a interface (mostrará carrinho vazio)
    atualizarCarrinhoDOM();
    
    // Mostra a mensagem de sucesso
    msgCompra.style.display = "block";
  }
});

// Inicialização: quando o script roda, ele já desenha os produtos na tela
renderizarEstoque();