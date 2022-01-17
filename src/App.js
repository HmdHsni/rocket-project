import React, { Component } from 'react';
import './App.css';
import Items from './components/Items';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';
import'bootstrap/js/src/modal';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { render } from '@testing-library/react';
import './fonts/Roboto-Light.ttf';
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillEdit } from 'react-icons/ai';
import $ from 'jquery';


class App extends Component{

state={
 
  date: ""
}
componentDidMount() {
  this.getDate();
}
getDate = () => {
  var today = new Date(),

  date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  this.setState({ date });
};


CreateTodo() {  
  let items = [];
  for(let i = 0; i <6; i++) {
          items.push(<Items className="Item" />) //comment: push todo from component(Item)
          }
 
  return items;
}

  render()
  {
  return (
    
   
<div>
  
  <div className=" navbar  header1 d-sm-none d-md-flex d-lg-flex">
  <span className="headertxt d-none d-md-flex d-lg-flex " >
 My TodoList
  </span>
 
</div>
 


 

  <div className="Regtangle4 ">
<div className="Regtangle5">
  
<div className="row ">
<div className="DateTimeSction">
<div className=" col-12 col-md-4 col-lg-4">
  {this.state.date}
</div>
<div className="col-lg-8 col-md-8 ComINcom">
 
    <span className="d-none d-md-flex d-lg-flex sectiontxt">complete task</span>
    <span className="d-none d-md-flex d-lg-flex sectiontxt" >incomplete task</span>
</div>
</div>
</div>{/*end of row1 */}

<div className="row">

 {/*comment: create 6 todo when component is render*/}
 {this.CreateTodo()}

</div>

  </div>

  {/*add button */}

 <div className="add-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">+</div>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New Todo
        <p>please write some thing to below</p></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
     
      <TodoList />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">cancel</button>
        <button type="button" class="btn btn-primary">add
        
        </button>
      </div>
    </div>
  </div>
</div>
   
     </div>

 
  


  
     </div>





      
  )
}
}

export default App;