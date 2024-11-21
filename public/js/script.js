document.addEventListener("DOMContentLoaded", function() {
  // Exemplo: função para o carrinho de compras
  const buttons = document.querySelectorAll("button");

  buttons.forEach(button => {
    button.addEventListener("click", function() {
      alert("Produto adicionado ao carrinho!");
    });
  });
});
