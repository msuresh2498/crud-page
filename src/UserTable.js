import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const UserTable = (props) => {
    return (
        <Table className='table'>
            <thead className='table-head'>
                <tr>
                    <th>UserName</th>
                    <th>Name</th>
                    <th>Email.ID</th>
                    <th>Age</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody className='table-data'>
                {props.users.length > 0 ? (
                    props.users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>
                                <Button className='user-btn' onClick={()=>{
                                    props.editRow(user)
                                }} variant="light">Edit</Button>
                                <Button className='user-btn' onClick={() => props.deleteUser(user.id)} variant="light">Delete</Button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={5}>No Users</td>
                    </tr>
                )
                }

            </tbody>
        </Table>
    )
}

export default UserTable;