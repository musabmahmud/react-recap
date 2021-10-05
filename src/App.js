import React,{useEffect, useState} from 'react';
import './App.css';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{textTransform:'uppercase'}}>Json data table Via react hooks</h1>
        <table className="Table-Data">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <Users></Users>
          </tbody>
        </table>
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => setUsers(data));
  }, [])

  return(
      users.map(user => 
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.company.name}</td>
        <td>{user.phone}</td>
        <td>{user.website}</td>
      </tr>
    )
  )

}
export default App;
