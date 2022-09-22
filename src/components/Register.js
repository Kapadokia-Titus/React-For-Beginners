import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';


export default function Register(){

    //create initial state
    const [formData, setFormData] = useState({
        fname:"John ...",
        lname:"...Doe",
        email:"someone@mai.com",
        password:"****",
        newsletter:true
    })


    function handleSubmit(event){
        event.preventDefault(); 
        
        console.log(formData)
        alert(`welcome to the community ${formData.fname} ${formData.lname}`)
    }

    return(
        <Container>
            <Form onSubmit={handleSubmit}>
            <h2>Registration Form</h2>

                    {/* first name */}
                    <Form.Group className="mb-3" controlId="fname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" 
                                      placeholder={formData.fname} 
                                      onChange={e => setFormData({...formData, fname:e.target.value})}/>
                        </Form.Group>

                    {/* last name */}
                        <Form.Group className="mb-3" controlId="lname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" 
                                       placeholder={formData.lname} 
                                       onChange={e => setFormData({...formData, lname:e.target.value})}/>
                        </Form.Group>

                    {/* email */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" 
                                    placeholder={formData.email} 
                                    onChange={e => setFormData({...formData, email:e.target.value})}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                    {/* password */}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"  
                                      placeholder={formData.password} 
                                      onChange={e => setFormData({...formData, password:e.target.value})} />
                        </Form.Group>

                        {/* check */}
                        <Form.Group className="mb-3" >
                            <label>
                                Get Our Newsletter!
                                <input
                                type="checkbox"
                                id="newsletter"
                                checked={formData.newsletter}
                                onChange={(e) => setFormData({...formData, newsletter:e.target.checked})}
                                />
                            </label>
                        </Form.Group >
                      
                    
                        <Button variant="primary" type="submit">
                        Submit
                        </Button>
            </Form>
    </Container>
    )
}