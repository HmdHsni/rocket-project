import React, { Component } from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillEdit } from 'react-icons/ai';
import './Items.css';
import TodoList from './TodoList';


class Items extends Component{
    render()
    {
    return (
      



<div className="todo d-flex justify-content-between ">

{/*comment: create 6 todo when component is render {this.CreateTodo()}*/}



<li className="brderTodo"> Todolist</li>
<div className=" icon d-none d-md-flex d-lg-flex">
       <AiFillCloseCircle className="deleteIcon "  
       />
       <AiFillEdit className='edit-icon 'data-bs-toggle="modal" data-bs-target="#exampleModal2"
       /></div>
       
       <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit todo</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <TodoList />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

</div>

        
    



    );
    }}
    export default Items;




