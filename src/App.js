
import { useState } from 'react';
import Adduser from './AddUserform';
import './App.css';
import UserTable from './UserTable';
import EditUserForm from './EditUserForm';
import { Card, Nav } from 'react-bootstrap';

function App() {

  const UserData = [
    {
      id: 1,
      username: "suresh1234",
      name: "suresh",
      email: "suresh@gmail.com",
      age: "25"
    },
    {
      id: 2,
      username: "siva1234",
      name: "siva",
      email: "siva@gmail.com",
      age: "23"
    },
    {
      id: 3,
      username: "vani1234",
      name: "vani",
      email: "vani@gmail.com",
      age: "24"
    }
  ]

  const addUser = (user) => {
    user.id = user.length + 1;
    setUsers([...users, user])
    setEditing(true);
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
    setEditing(false);
  }

  const [users, setUsers] = useState(UserData);
  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, username: '', name: '', email: '', age: null }

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, username: user.username, name: user.name, email: user.email, age: user.age })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="App">
      <Nav className='Nav'>
      <h1 className='crud'>CRUD App with Hooks</h1></Nav>
      <div className='Card'>
        {editing ? (<div>
          <h2 className='add-user'>Edit User</h2>
          <EditUserForm
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
          />
        </div>) : (
          <div>
            <h2 className='add-user'>Add User</h2>
            <Adduser addUser={addUser} />
          </div>
        )
        }

      </div>
      <div>
        <h2 className='user-list'>User List</h2>
        <UserTable editRow={editRow} deleteUser={deleteUser} users={users} />
      </div>
    </div>
  );
}

export default App;
