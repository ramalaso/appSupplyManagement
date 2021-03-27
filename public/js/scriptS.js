const tableRef = document.getElementsByTagName("tbody")[0];
const txtUpdateId = document.getElementById("updateId");
const txtUpdateName = document.getElementById("updateName");
const txtUpdateAddress = document.getElementById("updateAddress");
const txtUpdateContact = document.getElementById("updateContact");
const txtUpdateDetails = document.getElementById("updateDetails");
const supplier_name = document.getElementById("addName");
const supplier_address = document.getElementById("addAddress");
const supplier_contact = document.getElementById("addContact");
const supplier_details = document.getElementById("addDetails");
const bntAddSuppliers = document.getElementById("submitAdd");


bntAddSuppliers.addEventListener('click', postData);

const getSuppliers = async () => {
  const response = await fetch('https://gentle-anchorage-20332.herokuapp.com/api/v1/suppliers');
  const suppliers = await response.json();
  return suppliers;
};

const removeSupplier =  (id) => {
  fetch('https://gentle-anchorage-20332.herokuapp.com/api/v1/suppliers/'+id, { method: 'DELETE',});
  // const suppliers = await response.json();
  // return suppliers;
  window.location.href = "https://gentle-anchorage-20332.herokuapp.com";
};

const postSupplier = () => {
  fetch('https://gentle-anchorage-20332.herokuapp.com/api/v1/suppliers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: supplier_name.value,
      address: supplier_address.value,
      contact: supplier_contact.value,
      details: supplier_details.value,
    })
  });
}

async function init() {
  const suppliers = await getSuppliers();
  console.log("We are in init function")
  console.log(suppliers);
  tableRef.innerHTML = "";
  suppliers.forEach(addSupplierToDOM);
}

const addSupplierToDOM = (supplier) => {
  row = `
    <tr>
            <td>${supplier.supplier_id}</td>
            <td>${supplier.supplier_name}</td>
            <td>${supplier.supplier_address}</td>
            <td>${supplier.supplier_contact}</td>
            <td>
              <a href="#editProductModal" class="edit" data-toggle="modal"
                ><i
                  class="material-icons"
                  data-toggle="tooltip"
                  title="Edit"
                  onclick="selectSupplier(${supplier.supplier_id})"
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
                  onclick="removeSupplier(${supplier.supplier_id})"
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

const getSupplier = async (id) => {
  const response = await fetch(`https://gentle-anchorage-20332.herokuapp.com/api/v1/suppliers/${id}`);
  const supplier = await response.json();
  return supplier;
}

async function selectSupplier(id) {
    const supplier = await getSupplier();
    txtUpdateId.value = supplier.supplier_id;
    txtUpdateName.value = supplier.supplier_name;
    txtUpdateAddress.value = supplier.supplier_address;
    txtUpdateContact.value = supplier.supplier_contact;
    txtUpdateDetails.value = supplier.supplier_details;
}

function postData(e) {
  e.preventDefault();
  postSupplier();
  window.location.href = "https://gentle-anchorage-20332.herokuapp.com";
}

init();
