import React, {useEffect, useState} from 'react';
import axios from 'axios' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from'jquery';
import Popper from'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import contacts from '../employees-api.json';

const Content=()=>{
	const [list,setList]=useState([]);//Param passing doubt here
useEffect(()=>{
	axios.get('https://jsonplaceholder.typicode.com/todos')
	.then((todo)=>setList(todo.data));
},[])
	
	return (
	<table class="table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>userId</th>
           
          </tr>
        </thead>

        <tbody>
          {list.map(el => {
            return (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>
                  {el.title} </td>
                <td>{el.userId}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
	)
}

export default Content;
