import React, { Component } from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillEdit } from 'react-icons/ai';
import './Items.css';


class Items extends Component{
    render()
    {
    return (
      <div className="todo d-md-flex d-lg-flex justify-content-md-around justify-content-lg-around">

<div className="col-12 ">
<li> Todolist</li>
</div>

        <AiFillCloseCircle className='delete-icon' data-bs-toggle="modal" data-bs-target="#exampleModal2"
        />
        <AiFillEdit className='edit-icon'data-bs-toggle="modal" data-bs-target="#exampleModal2"
        />
 
     
      
      
     
     

 


<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
{/**etmam modal */}
    

</div>


    );
    }}
    export default Items;




