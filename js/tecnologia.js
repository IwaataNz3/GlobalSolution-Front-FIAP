/* ============================================================
   TECNOLOGIA.JS — Interatividade do Simulador de Missão
   ============================================================ */

// 1. Uso de ARRAY e OBJETOS (Conceitos solicitados)
// Guardamos as informações de cada fase num array de objetos.
const dadosFases = [
  {
    id: "lancamento",
    titulo: "Fase 1: Lançamento",
    descricao: "O drone é acoplado a um foguete comercial. Durante a subida, os sistemas permanecem em modo de economia de energia até a liberação na órbita baixa (LEO). O chassi é reforçado para suportar forças G intensas.",
    status: "Ativação dos propulsores primários e check-list de sistemas.",
    icone: "🚀",
    progresso: "33%",
    tema: "tema-lancamento"
  },
  {
    id: "captura",
    titulo: "Fase 2: Captura em Órbita",
    descricao: "Usando inteligência artificial e sensores LiDAR, o drone identifica resíduos metálicos em rota de colisão. Ele estende seus braços robóticos para capturar satélites desativados ou partes de foguetes antigos.",
    status: "Sensores LiDAR e IA de navegação operando em 100%.",
    icone: "🛰️",
    progresso: "66%",
    tema: "tema-captura"
  },
  {
    id: "reentrada",
    titulo: "Fase 3: Reentrada Controlada",
    descricao: "Com o compartimento cheio, o drone calcula a trajetória de retorno seguro. Os escudos de calor protegem o material reciclável até a aterrissagem precisa nas bases terrestres da SpaceThon.",
    status: "Escudos térmicos ativados. Monitoramento de fricção atmosférica.",
    icone: "☄️",
    progresso: "100%",
    tema: "tema-reentrada"
  }
];

// 2. Manipulação do DOM
// Selecionando os botões
const btnLancamento = document.getElementById("btnLancamento");
const btnCaptura = document.getElementById("btnCaptura");
const btnReentrada = document.getElementById("btnReentrada");
const todosBotoes = [btnLancamento, btnCaptura, btnReentrada];

// Selecionando as áreas para atualizar
const faseTitulo = document.getElementById("faseTitulo");
const faseDescricao = document.getElementById("faseDescricao");
const faseStatus = document.getElementById("faseStatus");

// NOVOS: Elementos visuais
const iconeDrone = document.getElementById("iconeDrone");
const barraProgresso = document.getElementById("barraProgresso");
const painelInterativo = document.getElementById("painelInterativo");

// Função principal que atualiza a tela
function atualizarSimulador(indiceFase, botaoClicado) {
  
  // A) Atualiza o DOM com as informações do Objeto selecionado no Array
  const faseAtual = dadosFases[indiceFase];
  faseTitulo.textContent = faseAtual.titulo;
  faseDescricao.textContent = faseAtual.descricao;
  faseStatus.textContent = faseAtual.status;

  // B) Atualiza a Imagem (emoji), Barra de Progresso e Tema
  iconeDrone.textContent = faseAtual.icone;
  barraProgresso.style.width = faseAtual.progresso;
  
  // Limpa as classes de tema antigas e aplica a nova
  painelInterativo.classList.remove("tema-lancamento", "tema-captura", "tema-reentrada");
  painelInterativo.classList.add(faseAtual.tema);

  // C) Limpa a classe 'ativo' de todos os botões e adiciona só no que foi clicado
  for (let i = 0; i < todosBotoes.length; i++) {
    todosBotoes[i].classList.remove("ativo");
  }
  botaoClicado.classList.add("ativo");
}

// 3. Uso de EVENTOS
// Escutando os cliques nos botões
btnLancamento.addEventListener("click", function() {
  atualizarSimulador(0, btnLancamento); // Posição 0 no array = lançamento
});

btnCaptura.addEventListener("click", function() {
  atualizarSimulador(1, btnCaptura); // Posição 1 no array = captura
});

btnReentrada.addEventListener("click", function() {
  atualizarSimulador(2, btnReentrada); // Posição 2 no array = reentrada
});
