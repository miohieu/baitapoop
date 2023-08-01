import getElement from "../utils/getElement.js"
import { Customer, Employee, ListPerson, Student } from "../model/model.js";

const userlist = new ListPerson();

function getElement(selector) {
    return document.querySelector(selector);
}

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

getElement('#typeuser').onchange = function createUser() {
    
    const type = getElement("#typeuser").value
    console.log(type)
    let object = undefined

    if (type === 0) {
        return
    } else if (type === 1) {
        object = new Customer()

    } else if (type === 2) {
        object = new Employee()
    } else {
        object = new Student()
    }

    return object;
}

