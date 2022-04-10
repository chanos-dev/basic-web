import React, {useEffect} from 'react'
import { Typography, Card, CardContent, TextField, Button } from '@mui/material'
import { Box } from '@mui/system'
import Center from './Center';
import useForm from '../hooks/useForm';
import { createAPIEndpoint, ENDPOINTS } from './../api/index';
import useStateContext from '../hooks/useStateContext'
import { useNavigate } from 'react-router-dom';

const getFreshModel = () => ({
    name: '',
    email: '',
})

export default function Login() {
    const { context, setContext, resetContext } = useStateContext(); 
    const navigate = useNavigate();

    const attr = {
        margin: 1,
        width: '90%'
    };

    const { values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModel);

    useEffect(() => {
        resetContext();
    }, [])
    
    const login = (e) => {
        e.preventDefault();
        if (validate()) {
            createAPIEndpoint(ENDPOINTS.participant)
            .post(values)
            .then((response) => {
                setContext({
                    participantId: response.data.participantId,
                })                
                navigate("/quiz");
            })            
            .catch((error) => console.log(error))
        }             
    }

    const validate = () => {
        let valid = {};
        valid.email = (/\S+@\S+\.\S+/).test(values.email) ? "" : "Email is no valid.";
        valid.name = values.name != "" ? "" : "This field is required.";
        setErrors(valid);

        return Object.values(valid).every(v => v == "");
    }

    return (
        <Center>
            <Card sx={{ width: 400 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ my: 3 }}>Quiz App with ASP.NET</Typography>
                    <Box sx={{
                        '& .MuiTextField-root': attr
                    }}>
                        <form noValidate autoComplete="on" onSubmit={login}>
                            <TextField
                                label="Email"
                                name="email"
                                variant="outlined"
                                value={values.email}
                                onChange={handleInputChange}
                                {...(errors.email && { error: true, helperText: errors.email })} />
                            <TextField
                                label="Name"
                                name="name"
                                variant="outlined"
                                value={values.name}
                                onChange={handleInputChange}
                                {...(errors.name && { error: true, helperText: errors.name })} />
                            <Button type="submit" variant="contained" size="large" color="success" sx={attr}>Start</Button>
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Center>
    )
}