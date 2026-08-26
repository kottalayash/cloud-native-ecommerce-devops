async function getJson(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

async function loadProducts() {
  const container = document.getElementById("products");
  const select = document.getElementById("product");

  try {
    const products = await getJson("/api/products");
    container.innerHTML = "";
    select.innerHTML = "";

    products.forEach(product => {
      const card = document.createElement("article");
      card.className = "product";
      card.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>₹${product.price.toLocaleString("en-IN")}</strong></p>
        <button type="button" data-id="${product.id}">Select</button>
      `;
      card.querySelector("button").addEventListener("click", () => {
        select.value = String(product.id);
        document.getElementById("orderForm").scrollIntoView({behavior: "smooth"});
      });
      container.appendChild(card);

      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = `${product.name} - ₹${product.price.toLocaleString("en-IN")}`;
      select.appendChild(option);
    });

    document.getElementById("health").textContent = "Product service healthy";
  } catch (error) {
    container.innerHTML = "<p>Product service unavailable.</p>";
    document.getElementById("health").textContent = "Service unavailable";
    console.error(error);
  }
}

document.getElementById("orderForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const message = document.getElementById("message");
  const productId = Number(document.getElementById("product").value);
  const quantity = Number(document.getElementById("quantity").value);

  try {
    const order = await getJson("/api/orders", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({productId, quantity})
    });
    message.textContent = `Order confirmed: ${order.orderId}`;
  } catch (error) {
    message.textContent = "Unable to place order.";
    console.error(error);
  }
});

loadProducts();
