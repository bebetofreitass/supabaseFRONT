const productList = document.querySelector('#products');
const addProductForm = document.querySelector('#add-product-form');
const updateProductForm = document.querySelector('#update-product-form');
const updateProductId = document.querySelector('#update-id');
const updateProductName = document.querySelector('#update-name');
const updateProductDescription = document.querySelector('#update-description');
const updateProductPrice = document.querySelector('#update-price');

async function fetchProducts() {
  const response = await fetch('http://localhost:3000/products');
  const products = await response.json();

  productList.innerHTML = '';

  products.forEach(product => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div><strong>${product.name}</strong></div>
      <div style="font-size: 13px; color: #fff; margin-top: 4px;">
        ${product.description || '<em>Sem descrição</em>'}
      </div>
      <div style="font-size: 14px; color: #fff; margin-top: 6px;">
        Preço: $${parseFloat(product.price).toFixed(2)}
      </div>
      <div style="margin-top: 8px;">
        <button class="btn-update">Update</button>
        <button class="btn-delete">Delete</button>
      </div>
    `;

    const deleteButton = li.querySelector('.btn-delete');
    deleteButton.addEventListener('click', async () => {
      await deleteProduct(product.id);
      await fetchProducts();
    });

    const updateButton = li.querySelector('.btn-update');
    updateButton.addEventListener('click', () => {
      updateProductForm.style.display = 'block';
      updateProductId.value = product.id;
      updateProductName.value = product.name;
      updateProductDescription.value = product.description || '';
      updateProductPrice.value = product.price;
    });

    productList.appendChild(li);
  });
}

// Add product
addProductForm.addEventListener('submit', async event => {
  event.preventDefault();
  const name = addProductForm.elements['name'].value;
  const description = addProductForm.elements['description'].value;
  const price = addProductForm.elements['price'].value;

  await addProduct(name, description, price);
  addProductForm.reset();
  await fetchProducts();
});

async function addProduct(name, description, price) {
  const response = await fetch('http://localhost:3000/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, description, price })
  });
  return response.json();
}

// Delete product
async function deleteProduct(id) {
  const response = await fetch(`http://localhost:3000/products/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });
  return response.json();
}

// Update product
updateProductForm.addEventListener('submit', async event => {
  event.preventDefault();
  const id = updateProductId.value;
  const name = updateProductName.value;
  const description = updateProductDescription.value;
  const price = updateProductPrice.value;

  await updateProduct(id, name, description, price);
  updateProductForm.reset();
  updateProductForm.style.display = 'none';
  await fetchProducts();
});

async function updateProduct(id, name, description, price) {
  const response = await fetch(`http://localhost:3000/products/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, description, price })
  });
  return response.json();
}

// Inicializar
fetchProducts();
