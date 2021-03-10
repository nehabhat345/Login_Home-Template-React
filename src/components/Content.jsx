import React from 'react';
import { Table } from "semantic-ui-react";
import contacts from '../employees-api.json';

const Content=()=>{
	
	return (
	<Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Emp Id</Table.HeaderCell>
            <Table.HeaderCell>Employee Name</Table.HeaderCell>
            <Table.HeaderCell>Employee Age</Table.HeaderCell>
           
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {contacts.data.map(el => {
            return (
              <Table.Row key={el.id}>
                <Table.Cell>{el.id}</Table.Cell>
                <Table.Cell>
                  {el.employee_name} </Table.Cell>
                <Table.Cell>{el.employee_age}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
	)
}

export default Content;