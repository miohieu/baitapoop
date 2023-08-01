import getElement from "../utils/getElement.js";

export default function createHTML() {

    const type = getElement("#typeuser").value
    let form = getElement("#form-custom")

    form.innerHTML = ""


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
        form.innerHTML = `
          <div class="col-6 form-group">
            <label for="txtWage">Luong theo ngay</label>
            <input type="text" class="form-control" id="txtMath">
            <span class="text-danger"></span>
          </div>
          <div class="col-6 form-group">
            <label for="txtWork">Ngay lam viec</label>
            <input type="text" class="form-control" id="txtPhysics">
            <span class="text-danger"></span>
          </div>`
    }
}
