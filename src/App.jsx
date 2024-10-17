import { Container, Form, InputGroup, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import { data } from './Data';
function App() {
  const [search,setSearch] = useState('')
  return (
    <div className="App">
      <Container>
        <h1 className="text-center mt-4">Contact keeper</h1>
        <Form>
          <InputGroup className='my-3'>
          <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder='Search contacts'/>
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.filter((item) => {
              return search.toLowerCase() === '' ? item : item.first_name.toLowerCase().includes(search)
            }).map((item) => (
              <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
            <tr>
              <td>Luke</td>
              <td>Skywalker</td>
              <td>email@email.com</td>
              <td>214-423-6486</td>
            </tr>
          </tbody>

        </Table>
      </Container>
    </div>
  );
}

export default App;
