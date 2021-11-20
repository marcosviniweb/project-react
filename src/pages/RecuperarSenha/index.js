import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';



export default function Login() {
    return (
        <div className = "login card shadow text-center">
            <Form className = "form-signin text-center" style = {{padding:'50px', width: '550px'}}>
                <h1 class = "h3 mb-3 font-weight-normal">Recuperar senha</h1>

       
                    <FormGroup>
                <Label for="exampleEmail " >Email</Label>
                <Input className = "mt-2" type="email" name="email" id="email" placeholder="Email do usuário" />
                    </FormGroup> 

                          

                            <Button className = "mt-4"style = {{width:'100%'}} color="primary btn-block">Recuperar</Button>
                            
                            </Form>
        </div>
    )
}