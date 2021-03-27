const tableRef = document.getElementsByTagName("tbody")[0];
const txtUpdateId = document.getElementById("updateId");
const txtUpdateName = document.getElementById("updateName");
const txtUpdateQuantity = document.getElementById("updateQuantity");
const txtUpdatePrice = document.getElementById("updatePrice");
const txtSupplierId = document.getElementById("updateSupplierId");
const product_name = document.getElementById("addName");
const product_quantity = document.getElementById("addQuantity");
const product_price = document.getElementById("addPrice");
const fk_supplier_id = document.getElementById("supplierId");
const bntAddProducts = document.getElementById("submitAdd");
const btnSaveChanges = document.getElementById("saveChanges");

bntAddProducts.addEventListener('click', postData);
btnSaveChanges.addEventListener('click', saveChanges)

// Handle API responses
const getProducts = async () => {
  const response = await fetch('https://gentle-anchorage-20332.herokuapp.com/api/v1/products');
  const products = await response.json();
  return products;
};

const getProduct = async (id) => {
  const response = await fetch(`https://gentle-anchorage-20332.herokuapp.com/api/v1/suppliers/${id}`);
  const product = await response.json();
  return product;
}

const removeProduct =  (id) => {
  fetch('https://gentle-anchorage-20332.herokuapp.com/api/v1/products/'+id, { method: 'DELETE',});
  // const suppliers = await response.json();
  // return suppliers;
  window.location.href = "https://gentle-anchorage-20332.herokuapp.com/inventory";
};

const postProduct = () => {
  fetch('https://gentle-anchorage-20332.herokuapp.com/api/v1/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: product_name.value,
      quantity: product_quantity.value,
      price: product_price.value,
      supplier_id: fk_supplier_id.value,
    })
  });
}

const putProduct = (id) => {
  fetch(`https://gentle-anchorage-20332.herokuapp.com/api/v1/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: product_name.value,
      quantity: product_quantity.value,
      price: product_price.value,
      supplier_id: fk_supplier_id.value,
    })
  });
}

//Working with DOM
async function init() {
  const products = await getSuppliers();
  console.log("We are in init function")
  console.log(products);
  tableRef.innerHTML = "";
  suppliers.forEach(addProductToDOM);
}

const addProductToDOM = (product) => {
  row = `
    <tr>
            <td>${product.product_id}</td>
            <td>${product.product_name}</td>
            <td>${product.product_quantity}</td>
            <td>${product.product_price}</td>
            <td>${product.fk_supplier_id}</td>
            <td>
              <a href="#editProductModal" class="edit" data-toggle="modal"
                ><i
                  class="material-icons"
                  data-toggle="tooltip"
                  title="Edit"
                  onclick="selectProduct(${product.product_id})"
                  >&#xE254;</i
                ></a
              >
              <a
                style="cursor: pointer;"
                class="delete"
                ><i
                  class="material-icons"
                  data-toggle="tooltip"
                  title="Delete"
                  onclick="removeProduct(${product.product_id})"
                  >&#xE872;</i
                ></a
              >
            </td>
          </tr>
          <tr>
    `;
  // Insert a row in the table at the last row
  newRow = tableRef.insertRow(tableRef.rows.length);
  newRow.innerHTML = row;
};

async function selectProduct(id) {
    const product = await getProduct(id);
    console.log(product);
    txtUpdateId.value = product[0].product_id;
    txtUpdateName.value = product[0].product_name;
    txtUpdateQuantity.value = product[0].product_quantity;
    txtUpdatePrice.value = product[0].product_price;
    txtSupplierId.value = product[0].fk_supplier_id;
}

function saveChanges(e) {
  e.preventDefault();
  const id = txtUpdateId.value;
  putProduct(id);
  window.location.href = "https://gentle-anchorage-20332.herokuapp.com/inventory";
}

function postData(e) {
  e.preventDefault();
  postProduct();
  window.location.href = "https://gentle-anchorage-20332.herokuapp.com/inventory";
}

init();
