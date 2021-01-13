import React from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';


class ContactForm extends React.Component {
    state = {  
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        inquiry: ""
    };

        handleChange = e =>{
            this.setState(
            {[e.target.name]:e.target.value});
            console.log("hello")
        };
            

        submitForm =(e) => {
            e.preventDefault();
            console.log(this.state)
          
        };

    render() { 
        return (  

            <div>
            <Grid container>
            
            <br/>
               
            <Grid item xs={12} >

            <Typography variant="h3" component="h3" gutterBottom>
            Contact Us
            </Typography>
            <form >
                   
                
                 <TextField
                    name="firstName"
                    onChange = {e =>this.state.FirstName}
                    type ="text" 
                    value ={this.state.FirstName} 
                    label="First Name"
                    
                    />

                    <br/>
                        
                    
                    
                    <TextField
                    name="lastName"
                    onChange = {e =>this.state.LastName}
                    type ="text" 
                    value ={this.state.LastName} 
                    id="standard-helperText"
                    label="Last Name"
                
                    />

                <br />

                    <TextField
                    name="email"
                    onChange = {e =>this.state.Email}
                    type ="text" 
                    value ={this.state.Email} 
                    id="standard-helperText"
                    label="Email"
                   
                />

                    <br />  

                <FormControl>
                    <InputLabel htmlFor="component-simple">Mobile#</InputLabel>

                    <Input id="component-simple" 
                    value={this.state.Phone} 
                    onChange={e =>this.state.Phone} />
                </FormControl>

                      <br />  <br />   <br />

                    <TextField
                    name="inquiry"
                    value ={this.state.Inquiry} 
                    onChange = {e =>this.state.Inquiry}
                    id="outlined-multiline-static"
                    label="How Can We Help You?"
                    multiline
                    rows={6}
                    variant="outlined"
                    />
                 
            <br /> <br />
         
            <Button onClick={(e)=>this.submitForm(e)} variant="contained">SUBMIT</Button>
            </form>
            </Grid>
            </Grid>

            </div>


        );
    };

};
export default ContactForm;

