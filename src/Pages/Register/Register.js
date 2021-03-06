import { Alert, Button, TextField, Typography, CircularProgress, Box, Grid, Paper, Avatar} from '@mui/material';
import React from 'react';
import { useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import bg from '../../Images/background/bg6.jpg';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import UseAuth from '../Hooks/UseAuth';

const Register = () => {
    const [loginData, setloginData] = useState({});
    const {user, isloading, error, registerUser} = UseAuth();
    const history = useHistory();

    if(isloading){
        return <CircularProgress />
    }
    
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newloginData = {...loginData};
        newloginData[field] = value;
        setloginData(newloginData);
        console.log(field, value, newloginData);

    }
    const handleOnSubmit = e => {
        e.preventDefault();
        if(loginData.password !== loginData.password2){
            alert('Your password did not match');
            return 
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
    }

    return (
      
            <Grid sx={{mt: '40px'}} >
               <Paper elevation={10} style={{padding: '20px', height: '70vh', width: 290, margin: 'auto', border: '1px solid #804d4d'}}>
                <Grid  align="center">
                <Avatar sx={{backgroundColor: '#804d4d'}}><LockOutlinedIcon /></Avatar>
                <h1 style={{fontFamily:'"Playfair Display",serif', marginTop: '20px', color:'#303030'}}>Please Register</h1>
                </Grid>
                    <form onSubmit={handleOnSubmit}>
                    <TextField 
                    sx={{width: '100%'}}
                    label="Your Name" 
                    name="name"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br />
                    <TextField 
                    sx={{width: '100%'}}
                    label="Your Email" 
                    name="email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br />
                    <TextField 
                    sx={{width: '100%'}}
                    label="Your Password" 
                    name="password"
                    type="password"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br />
                    <TextField 
                    sx={{width: '100%', mb: '5px'}}
                    label="Retype Password" 
                    name="password2"
                    type="password"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br />
                    <Button type='submit' variant='contained' sx={{backgroundColor: '#804d4d'}} >Sign Up <ExitToAppRoundedIcon sx={{fontSize: 'medium', ml: '5px'}}/></Button><br /><br />
                    <NavLink to="/login" style={{color: '#804d4d'}}>Already Register?Please LogIn</NavLink>
                    </form> <br />     
               
                </Paper>
                {user.email && <Alert severity="success" sx={{width: '75%'}}>Successfully Register</Alert>};
             {error && <Alert severity="error" sx={{width: '75%'}}>{error}</Alert>}
            </Grid>
            
        
        // sx={{ boxShadow: 3, width: '25%', height: '460px', mt: '100px', ml: '500px', p: '30px', border: '1px solid #804d4d', borderRadius: '5px'}}
        // container spacing={2}
        // item xs={12} sm={6} md={12}  sx={{textAlign: 'center', mt: '20px'}}
    );
};

export default Register;