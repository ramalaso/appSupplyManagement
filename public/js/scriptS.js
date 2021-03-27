const tableRef = document.getElementsByTagName("tbody")[0];
const supplier_name = document.getElementById('addName');
const supplier_address = document.getElementById('addAddress');
const supplier_contact = document.getElementById('addContact');
const supplier_details = document.getElementById('addDetails');
const bntAddSuppliers = document.getElementById('submitAdd');

bntAddSuppliers.addEventListener('click', postSuppliers(supplier_name, supplier_address, supplier_contact, supplier_details));

init();

const getSuppliers = async () => {
  const response = await fetch('https://gentle-anchorage-20332.herokuapp.com/api/v1/suppliers');
  const suppliers = await response.json();
  return suppliers;
};

const postSuppliers = async (name, address, contact, details) => {
  const response = await fetch('https://gentle-anchorage-20332.herokuapp.com/api/v1/suppliers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      address: address,
      contact: contact,
      details: details,
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
                href="#deleteProductModal"
                class="delete"
                data-toggle="modal"
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


