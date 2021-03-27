const tableRef = document.getElementsByTagName("tbody")[0];
const supplier_name = document.getElementById('addName').value;
const supplier_address = document.getElementById('addAddress').value;
const supplier_contact = document.getElementById('addContact').value;
const supplier_details = document.getElementById('addDetails').value;
const bntAddSuppliers = document.getElementById('submitAdd');



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

const postSupplier = (name, address, contact, details) => {
  const response = fetch('https://gentle-anchorage-20332.herokuapp.com/api/v1/suppliers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      address,
      contact,
      details,
    })
  });
  const supplier = await response.json();
  window.location.href = "https://gentle-anchorage-20332.herokuapp.com";
  return supplier;
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


bntAddSuppliers.addEventListener('click', RedirectToMain);

function RedirectToMain(e) {
  e.preventDefault();
  postSupplier(supplier_name, supplier_address, supplier_contact, supplier_details)
  window.location = 'https://gentle-anchorage-20332.herokuapp.com';
}

init();
