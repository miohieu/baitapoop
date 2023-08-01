import getElement from "../utils/getElement.js"
import { Customer, Employee, ListPerson, Student } from "../model/model.js";
import createHTML from "../view/render.js";

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


getElement('#typeuser').onchange = createHTML
function getInfo() {
    const id = getElement("#txtMaSV").value
    const name = getElement("#txtTenSV").value
    const email = getElement("#txtEmail").value
    const address = getElement("#txtPass").value

    const math = getElement("#txtMath").value
    const physics = getElement("#txtPhysics").value
    const chemistry = getElement("#txtChemistry").value

    const company = getElement("#txtCompanyName").value
    const rating = getElement("#txtCustomer").value
    const bill = getElement("#txtInvoiceValue").value

    const wage = getElement("#txtWage").value
    const workDay = getElement("#txtWork").value

    return function createObj() {
        let obj = undefined;
        if(wage) {
            return obj = new Employee(id, name, email, address, wage, workDay)
        }
        if(math) {
            return obj = new Student(id, name, email, address, math, physics,chemistry)
        }
        if(bill) {
            return obj = new Customer(id, name, email, address, company, bill,rating)
        }

    }
}


