import React, {useEffect, useState} from 'react';
import axios from 'axios' ;
import { Table } from "semantic-ui-react";

const Content=()=>{
	const [list,setList]=useState([]);
useEffect(()=>{
	axios.get('https://jsonplaceholder.typicode.com/todos')
	.then((todo)=>setList(todo.data));
},[])
	
	return (
	<Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>userId</Table.HeaderCell>
           
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {list.map(el => {
            return (
              <Table.Row key={el.id}>
                <Table.Cell>{el.id}</Table.Cell>
                <Table.Cell>
                  {el.title} </Table.Cell>
                <Table.Cell>{el.userId}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
	)
}

export default Content;
