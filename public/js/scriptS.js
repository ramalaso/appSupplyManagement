const getSuppliers = async () => {
  const response = await fetch('https://gentle-anchorage-20332.herokuapp.com/api/v1/suppliers');
  const suppliers = await response.json();
  return suppliers.rows;
};

// const txtAddName = document.getElementById("addName");
// const txtAddQuantity = document.getElementById("addQuantity");
// const txtAddPrice = document.getElementById("addPrice");
// const txtUpdateName = document.getElementById("updateName");
// const txtUpdateQuantity = document.getElementById("updateQuantity");
// const txtUpdatePrice = document.getElementById("updatePrice");
// const txtUpdateId = document.getElementById("updateId");
// const btnSubmitAdd = document.getElementById("submitAdd");
// const lblIdDelete = document.getElementById("idDelete");
const tableRef = document.getElementsByTagName("tbody")[0];
// const btnSaveChanges = document.getElementById("saveChanges");
// const btnDeleteAccepted = document.getElementById("deleteAccepted");
// const txtInventoryId = document.getElementById("inventoryId");
// const txtInventoryName = document.getElementById("inventoryName");
// const txtInventoryQuantity = document.getElementById("inventoryQuantity");


// btnSaveChanges.addEventListener("click", updateProduct);
// btnDeleteAccepted.addEventListener("click", removeProductAccepted);


// const localStorageTransactions = JSON.parse(localStorage.getItem("products"));
// let products =
//   localStorage.getItem("products") !== null ? localStorageTransactions : [];

// const addProduct = (e) => {
//   e.preventDefault();
//   const newProduct = {
//     ID: Date.now(),
//     Name: txtAddName.value,
//     Price: txtAddPrice.value,
//     Quantity: txtAddQuantity.value,
//   };
//   products.push(newProduct);
//   addProductToDOM(newProduct);
//   updateLocalStorage();
//   init();
//   clearAddTable();
// };

// const clearAddTable = () => {
//   txtAddPrice.value = "";
//   txtAddName.value = "";
//   txtAddQuantity.value = "";
// };

async function init() {
  const suppliers = await getSuppliers();
  console.log("We are in init function")
  console.log(suppliers);
  tableRef.innerHTML = "";
  suppliers.forEach(addSupplierToDOM);
}

// updateLocalStorage = () => {
//   localStorage.setItem("products", JSON.stringify(products));
// };

// function updateProducts(id)

const addSupplierToDOM = (supplier) => {
  row = `
    <tr>
            <td>${supplier.supplier_id}</td>
            <td>${supplier.supplier_address}</td>
            <td>${supplier.supplier_name}</td>
            <td>${supplier.supplier_contact}</td>
            <td>
              <a href="#editProductModal" class="edit" data-toggle="modal"
                ><i
                  class="material-icons"
                  data-toggle="tooltip"
                  title="Edit"
                  onclick="selectProduct(${supplier.supplier_id})"
                  >&#xE254;</i
                ></a
              >
              <a
                href="#deleteProductModal"
                class="delete"
                data-toggle="modal"
                ><i
                  class="material-icons"
                  data-toggle="tooltip"
                  title="Delete"
                  onclick="removeProduct(${supplier.supplier_id})"
                  >&#xE872;</i
                ></a
              >
              <a href="#addInventoryModal" class="inventory" data-toggle="modal"
                ><i
                  class="material-icons"
                  data-toggle="tooltip"
                  title="Add Inventory"
                  onclick="addInventory(${supplier.supplier_id})"
                  >&#xE147;</i>
                </a
              >
            </td>
          </tr>
          <tr>
    `;
  // Insert a row in the table at the last row
  newRow = tableRef.insertRow(tableRef.rows.length);
  newRow.innerHTML = row;
};

// function selectProduct(id) {
//   const product = products.filter((product) => product.ID == id);
//   txtUpdateName.value = product[0].Name;
//   txtUpdatePrice.value = product[0].Price;
//   txtUpdateQuantity.value = product[0].Quantity;
//   txtUpdateId.value = id;
// }

// function addInventory(id) {
//   const product = products.filter((product) => product.ID == id);
//   txtInventoryName.value = product[0].Name;
//   txtInventoryId.value = id;
// }

// function addInventoryAccepted(e) {
//   e.preventDefault();
//   const id = parseInt(txtInventoryId.value);
//   const productsIndex = products.map((product) => product.ID);
//   const index = productsIndex.indexOf(id);
//   products[index].Quantity =
//     +products[index].Quantity + parseInt(txtInventoryQuantity.value);
//   txtInventoryQuantity.value = "";
//   updateLocalStorage();
//   init();
// }

// function updateProduct(e) {
//   e.preventDefault();
//   const id = parseInt(txtUpdateId.value);
//   const productsIndex = products.map((product) => product.ID);
//   const index = productsIndex.indexOf(id);
//   products[index].Name = txtUpdateName.value;
//   products[index].Price = txtUpdatePrice.value;
//   products[index].Quantity = txtUpdateQuantity.value;
//   updateLocalStorage();
//   init();
// }

// function removeProduct(id) {
//   lblIdDelete.innerHTML = id;
// }

// function removeProductAccepted() {
//   const id = parseInt(lblIdDelete.innerText);
//   products = products.filter((product) => product.ID !== id);
//   updateLocalStorage();
//   init();
// }
// // createTable();
// btnSubmitAdd.addEventListener("click", addProduct);
init();
