import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';


export default function Register(){

    //create initial state
    const [fname, setFname] = useState("John ..."); 
    const [lname, setLname] = useState("...Doe"); 
    const [email, setEmail] = useState("someone@mai.com"); 
    const [password, setPassword] = useState("*****"); 
    const [newsletter, setNewsletter] = useState(true); 


    function handleSubmit(event){
        event.preventDefault(); 
        const regDetails ={
            firstname:fname, 
            lastname:lname, 
            pwd: password, 
            userEmail:email,
            newsletter:newsletter

        }
        console.log(regDetails)
        alert(`welcome to the community ${fname} ${lname}`)
    }

    return(
        <Container>
            <Form onSubmit={handleSubmit}>
            <h2>Registration Form</h2>

                    {/* first name */}
                    <Form.Group className="mb-3" controlId="fname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" 
                                      placeholder={fname} 
                                      onChange={e => setFname(e.target.value)}/>
                        </Form.Group>

                    {/* last name */}
                        <Form.Group className="mb-3" controlId="lname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" 
                                       placeholder={lname} 
                                       onChange={e => setLname(e.target.value)}/>
                        </Form.Group>

                    {/* email */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" 
                                    placeholder={email} 
                                    onChange={e => setEmail(e.target.value)}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                    {/* password */}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"  
                                      placeholder={password} 
                                      onChange={e => setPassword(e.target.value)} />
                        </Form.Group>

                        {/* check */}
                        <Form.Group className="mb-3" >
                            <label>
                                Get Our Newsletter!
                                <input
                                type="checkbox"
                                id="newsletter"
                                checked={newsletter}
                                onChange={(e) => setNewsletter(e.target.checked)}
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