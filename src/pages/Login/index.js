import React ,{ Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from  'react-redux'

class Login extends Component {

    state = {
        email: "",
        password:  ""
    }

    onChangeInput = (field, ev) =>{
        this.setState({[field]:ev.target.value})
    }
    handleLogin(){
        const {email, password} = this.state

        this.props.handleLogin({email, password}, (err) =>{
            

        })
    }

    render(){
        const { email, password } = this.state;
    return (

        <div className = "login card shadow text-center">

            <Form className = "form-signin text-center" style = {{padding:'50px', width: '550px'}}>
                <h1 className = "h3 mb-3 font-weight-normal">Área Restrita </h1>

       
                    <FormGroup>
                <Label for="exampleEmail " >Usuário</Label>
                <Input 
                className = "mt-2"
                type="email" 
                value = {email}
                name="email" 
                id="email" 
                placeholder="Email do usuário" 
                onChange ={(ev) => this.onChangeInput("email", ev)}/>
                    </FormGroup> 

                            <FormGroup>
                <Label for="senha" className = "mt-2">Senha</Label>
               
                <Input 
                className = "mt-2" 
                type="password" 
                name="password" 
                value = {password}
                id="password" 
                placeholder="Senha"
                onChange = {(ev) => this.onChangeInput("password",ev)} />
                            </FormGroup>

                            <Button 
                            className = "mt-4"
                            style = {{width:'100%'}}
                             color="primary btn-block"
                             onClick = {() => this.handleLogin()}>Acessar</Button>
                            <p className = "mt-2" > Esqueceu a senha?</p>
                            </Form>
        </div>
    )
    }
}

export default connect(null, actions) (Login);