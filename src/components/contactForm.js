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
        };
          
        submitForm () {
        alert("Your submission was successful")

        this.setState = {  
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            inquiry: ""
        };
        
        };

    render() { 

        const mystyle = {
        
            
            color: 'red',
            display: 'flex',
            textAlign: 'center'
           
          };
        return (  

        <div style={{marginBottom:'20px'}}>
         <Grid container>
            <br/>
               
            <Grid item xs={12} >

            <Typography style={{marginLeft:'70px', color:'blue'}} variant="h3" component="h3" gutterBottom>
            Contact Us
            </Typography>
            <form >
                   
                <div style={mystyle}>

                <div style={{marginRight:'20px'}}>
                <TextField
                    name="firstName"
                    onChange = {e =>this.state.firstName}
                    type ="text" 
                    value ={this.state.FirstName} 
                    id="standard-helperText"
                    label="First Name"
                
                    />
                    </div>

                    <div>
                
                    <TextField
                    name="lastName"
                    onChange = {e =>this.state.LastName}
                    type ="text" 
                    value ={this.state.LastName} 
                    id="standard-helperText"
                    label="Last Name"
                    
                
                    />

                    </div>
                    </div>
                
            <div style={mystyle}>
                <div style={{marginRight:'20px'}}>
                    <TextField
                    name="email"
                    onChange = {e =>this.state.Email}
                    type ="text" 
                    value ={this.state.Email} 
                    id="standard-helperText"
                    label="Email"
                   
                />
                </div>

                <div>
                <FormControl>
                    <InputLabel htmlFor="component-simple">Mobile#</InputLabel>

                    <Input id="component-simple" 
                    value={this.state.Phone} 
                    onChange={e =>this.state.Phone} />
                </FormControl>
                </div>
            </div>

                      <br />

                    <TextField style={{marginLeft:'80px'}}
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
         
            {/* <button variant="contained" >reset</button> */}
           
        
            <Button style={{marginLeft:'140px'}} variant="contained" onClick = {e =>this.submitForm()} color="primary">SUBMIT</Button>
                <br />
            </form>
            
            </Grid>
        </Grid>

        </div>


        );
    };

};
export default ContactForm;

