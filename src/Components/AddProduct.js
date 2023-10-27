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


          <div class="form-outline mb-4">
            <input type="text" id="form6Example2" class="form-control" name='productName'/>
            <label class="form-label" for="productName">Product Name</label>
          </div>

        <div class="form-outline mb-4">
          <input type="number" id="form6Example6" class="form-control" name='price'/>
          <label class="form-label" for="price">Product Price</label>
        </div>


        <div class="form-outline mb-4">
          <textarea class="form-control" id="form6Example7" rows="4" name='description'></textarea>
          <label class="form-label" for="description">Description</label>
        </div>

      <hr/>

        <div class="form-outline mb-4">
          <input type="text" id="form6Example3" class="form-control" name='category'/>
          <label class="form-label" for="category">Category</label>
        </div>

        <div class="form-outline mb-4">
          <input type="text" id="form6Example3" class="form-control" name='brand'/>
          <label class="form-label" for="brand">Brand</label>
        </div>

        <div class="form-outline mb-4">
          <input type="text" id="form6Example3" class="form-control" name='weight'/>
          <label class="form-label" for="weight">Weight</label>
        </div>

        <div class="form-outline mb-4">
          <input type="text" id="form6Example3" class="form-control" name='imgUrl'/>
          <label class="form-label" for="imgUrl">Image URL</label>
        </div>

        <div class="form-outline mb-4">
          <input type="text" id="form6Example3" class="form-control" name='dimensions'/>
          <label class="form-label" for="dimensions">Dimensions (LxWxH)</label>
        </div>



        <button type="submit" class="btn btn-primary btn-block mb-4">Add Device</button>
      </form></center>

    </div>
  );
};

export default ProductAddPage;
