// Elementos do DOM
const selectItem = document.getElementById("item");
const botao = document.getElementById("adicionar");
const lista = document.getElementById("cart-list");
const clearBtn = document.getElementById("clear-cart");

// Função para salvar lista no localStorage
function saveCart() {
    const items = [];
    document.querySelectorAll("#cart-list .cart-item").forEach(li => {
        items.push({
            name: li.querySelector(".item-name").textContent,
            quantity: li.querySelector(".item-quantity").textContent,
            price: li.querySelector(".item-price").textContent.replace("R$ ", "")
        });
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
}

// Função para carregar lista do localStorage
function loadCart() {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    items.forEach(item => addItemToList(item.name, item.price, item.quantity));
}

// Função para adicionar item à lista
function addItemToList(name, price, quantity = 1) {
    // Verifica se o produto já existe na lista
    const existingItem = Array.from(document.querySelectorAll("#cart-list .cart-item"))
        .find(li => li.querySelector(".item-name").textContent === name);

    if (existingItem) {
        // Incrementa quantidade
        const qtySpan = existingItem.querySelector(".item-quantity");
        const priceSpan = existingItem.querySelector(".item-price");
        const newQty = parseInt(qtySpan.textContent) + parseInt(quantity);
        qtySpan.textContent = newQty;
        priceSpan.textContent = `R$ ${(parseFloat(price) * newQty).toFixed(2)}`;
    } else {
        const li = document.createElement("li");
        li.classList.add("cart-item");
        li.innerHTML = `
            <h4 class="item-name">${name}</h4>
            <p>Quantidade: <span class="item-quantity">${quantity}</span></p>
            <p>Valor: <span class="item-price">R$ ${parseFloat(price).toFixed(2)}</span></p>
            <button class="remove-item btn-default">Remover</button>
        `;
        lista.appendChild(li);

        // Evento de remoção do item
        li.querySelector(".remove-item").addEventListener("click", () => {
            li.remove();
            saveCart();
        });
    }

    saveCart();
}

// Evento do botão adicionar
botao.addEventListener("click", () => {
    const selectedOption = selectItem.options[selectItem.selectedIndex];
    const produto = selectedOption.value;
    const preco = selectedOption.dataset.price;

    if (!produto) return;

    addItemToList(produto, preco);

    // Resetar seleção
    selectItem.selectedIndex = 0;
});

// Evento para esvaziar o carrinho
clearBtn.addEventListener("click", () => {
    lista.innerHTML = "";
    localStorage.removeItem("cartItems");
});

// Carrega lista ao abrir página
document.addEventListener("DOMContentLoaded", loadCart);

// Dark mode
// DARK MODE COM LOCALSTORAGE
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("toggle-theme");

    // Verifica se existe preferência salva
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    if (btn) {
        btn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            // Salva no localStorage
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
            } else {
                localStorage.setItem("darkMode", "disabled");
            }
        });
    }
});