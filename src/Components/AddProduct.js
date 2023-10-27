import React from "react";
import './Styles.css';
const ProductAddPage = () => {

  if (sessionStorage.getItem('user') != 'admin') {
    return (

      <div class="row mb-4">
        <h1>403 FORBIDDEN</h1>
      </div>
    )
  }

  return (
    <div className="Align">
      <br /><br /><br /><br />
      <center> <form>

        <div class="row mb-4">
          <div class="col">
          </div>
          <div class="col">
            <div class="form-outline">
              <input type="text" id="form6Example2" class="form-control" />
              <label class="form-label" for="form6Example2">Product Name</label>
            </div>
          </div>
        </div>


        <div class="form-outline mb-4">
          <input type="text" id="form6Example3" class="form-control" />
          <label class="form-label" for="form6Example3">Product Title</label>
        </div>








        <div class="form-outline mb-4">
          <input type="number" id="form6Example6" class="form-control" />
          <label class="form-label" for="form6Example6">Product Price</label>
        </div>


        <div class="form-outline mb-4">
          <textarea class="form-control" id="form6Example7" rows="4"></textarea>
          <label class="form-label" for="form6Example7">Product Description</label>
        </div>





        <button type="submit" class="btn btn-primary btn-block mb-4">Add Recorde</button>
      </form></center>

    </div>
  );
};

export default ProductAddPage;
