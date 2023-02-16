import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Adduser = (props) => {
    const initialFormState = { id: null, username: '', name: '', email: '', age: null }
    const [user, setUser] = useState(initialFormState);

    const HandleInputChange = (event) => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }
    return (
        <div className='container-form'>
            <Form className="form" onSubmit={
                event => {
                    event.preventDefault();
                    if (!user.username|| !user.name|| !user.email|| !user.age) return;
                    props.addUser(user);
                    setUser(initialFormState);
                }
            }>
                <Form.Label className='form-label'>UserName</Form.Label>
                <Form.Control className='form-input' type="text" name='username'
                    onChange={HandleInputChange}
                    value={user.username} placeholder="Username" />

                <Form.Label className='form-label'>Name</Form.Label>
                <Form.Control className='form-input' type="text" name='name'
                    onChange={HandleInputChange}
                    value={user.name} placeholder="Name" />

                <Form.Label className='form-label'>Email</Form.Label>
                <Form.Control className='form-input' type="text" name='email'
                    onChange={HandleInputChange}
                    value={user.email} placeholder="Email" />

                <Form.Label className='form-label'>Age</Form.Label>
                <Form.Control className='form-input' type="text" name='age'
                    onChange={HandleInputChange}
                    value={user.age} placeholder="Age" />

                <Button className='button-form' variant="primary" type="submit">Submit </Button>
            </Form>
        </div>
    )
}
export default Adduser;