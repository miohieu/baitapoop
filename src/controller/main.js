import getElement from "../utils/getElement.js"
import { Customer, Employee, ListPerson, Student } from "../model/model.js";

const userlist = new ListPerson();


const renderUserList = (list = userlist.list) => {
    let contentTable = "";
    list.map((e) => {
        contentTable += `
            <tr> 
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          <td> 
            <button class="btn btn-success"></button> 
        <button class="btn btn-danger">
            Delete
         </button> 

            </td>
            </tr>`;
    });
    getElement("#tbody").innerHTML = contentTable;
};

function getInfo() {
}

getElement('#typeuser').onchange = function createUser() {

    const type = getElement("#typeuser").value
    let form = getElement("#form-custom")

    form.innerHTML = ""

    let object = undefined

    if (type === '1') {
        form.innerHTML = `
          <div class="col-6 form-group">
            <label for="txtCustomer">Danh gia</label>
            <input type="text" class="form-control" id="txtCustomer">
            <span class="text-danger"></span>
          </div>
          <div class="col-6 form-group">
            <label for="txtInvoiceValue">Gia tri Hoa don</label>
            <input type="text" class="form-control" id="txtInvoiceValue">
            <span class="text-danger"></span>
          </div>
          <div class="col-6 form-group">
            <label for="txtCompanyName">Ten Cong ty</label>
            <input type="text" class="form-control" id="txtCompanyName">
            <span class="text-danger"></span>
          </div>
        `;
    } else if (type === '3') {
        form.innerHTML = `
          <div class="col-6 form-group">
            <label for="txtMath">Toan</label>
            <input type="text" class="form-control" id="txtMath">
            <span class="text-danger"></span>
          </div>
          <div class="col-6 form-group">
            <label for="txtPhysics">Ly</label>
            <input type="text" class="form-control" id="txtPhysics">
            <span class="text-danger"></span>
          </div>
          <div class="col-6 form-group">
            <label for="txtChemistry">Hoa</label>
            <input type="text" class="form-control" id="txtChemistry">
            <span class="text-danger"></span>
          </div>
        `;
    } else if (type === '2') {
        // Create an instance of the Student class or perform any other actions.
    }
    console.log("form", form)
    return object;
}

