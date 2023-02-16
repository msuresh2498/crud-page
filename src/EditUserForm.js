import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"

const EditUserForm =(props) =>{
    const [user,setUser] = useState(props.currentUser)

    useEffect(()=>{
        setUser(props.currentUser)
    },[props])

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
                    props.updateUser(user.id,user);
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

                <Button className='button-form' variant="primary" type="submit">Update User</Button>
                <Button className='button-form' variant="primary" type="submit" onClick={()=>{
                    props.setEditing(false)
                }}>Cancel</Button>
            </Form>
        </div>
    )
}

export default EditUserForm;