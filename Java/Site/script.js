let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// Adiciona produto ao carrinho
function adicionarCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert(nome + " adicionado ao carrinho!");
}

// Mostra carrinho na página carrinho.html
function mostrarCarrinho() {
  let lista = document.getElementById("lista-carrinho");
  let total = 0;
  if (!lista) return;

  lista.innerHTML = "";
  carrinho.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    lista.appendChild(li);
    total += item.preco;
  });

  document.getElementById("total").textContent = "Total: R$ " + total.toFixed(2);
}

if (document.getElementById("lista-carrinho")) {
  mostrarCarrinho();


  let banners = ["banner 1.jpg", "banner 2.jpg", "banner r3.jpg"];
        let current = 0;
        function rotateBanner() {
            current = (current + 1) % banners.length;
            document.getElementById("bannerImage").src = banners[current];
        }
        setInterval(rotateBanner, 900);
    
}
