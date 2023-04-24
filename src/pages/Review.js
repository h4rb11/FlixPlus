import {Form,} from 'react-bootstrap'

function Review() {
  return (

<>
<div className="tell">
<h5>Tell everyone about a Movie!</h5>
</div>

<Form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputMovie">Movie</label>
    <input type="add" class="form-control" id="exampleInputAddMovie" placeholder="AddMovie"/>
  </div>
  <div class="form-group">
    <label for="exampleInputAddDetails">Details</label>
    <input type="add" class="form-control" id="exampleInputAddDetails" placeholder="AddDetails"/>
  </div>
  <button type="submit" class="btn-primary">Submit</button>
</Form>
</>

  );
}
export default Review;