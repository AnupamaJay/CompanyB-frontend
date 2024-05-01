import {  useState} from "react";
import { Box, Button,TextField, Typography } from '@mui/material';
import SimpleAlert from "./alert";
import { Snackbar } from "@material-ui/core";

function FileUploadform(){
    const [name,setName]=useState('');
    const [email,setEmail] =useState('');
    const [file,setFile] =useState(null);
    

    //Change of name
    const handleNameChange = (event)=>{
        setName(event.target.value);
    };

    //Change of email
    const handleEmailChange = (event)=>{
        setEmail(event.target.value);
    };
    
    //Changing the file 
    const fileChange = (event)=> {
        const file = event.target.files[0];
        if(file){
            const fileType = file.type;
            if(fileType!== "application/pdf"){
                alert("PDF files only");
                return;
            }
            setFile(file);
        }
    };

    const handleSubmit = (event)=> {
        event.preventDefault();
        if(!file){
            alert("Please upload a file.");
            return;
        }
        console.log('Name:',name);
        console.log("Email:",email);
        console.log('Uploading:',file.name);
        alert("Successfully Submitted.")
    };



    return(
        <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={{display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 600, margin: 'auto' ,padding: 2, 
        border: '1px solid #ccc', 
        borderRadius: '10px', 
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'}}>
            <Typography variant="h6" fontWeight="bold">SIMULATION REQUEST</Typography>
            <TextField
                label="Name"
                variant= "outlined"
                value={name}
                onChange={handleNameChange}
                required
                sx = {{mb:2,mt:2}}
            />

            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                <TextField
                    label="Email"
                    variant= "outlined"
                    value={email}
                    onChange={handleEmailChange}
                    type="email"
                    required
                    sx={{mb:2}}
                />
                <Button
                    variant="contained"
                    component="label"
                    sx={{
                        mb:2, 
                        justifyContent: "center", 
                        alignItems: "center", 
                        display: "flex"
                      }}
                >
                    Upload File
                    <input
                        type="file"
                        hidden
                        onChange={fileChange}
                        accept=".pdf"
                    />
                </Button>
            </Box>
            {file && <Typography>{file.name}</Typography>}
            <Button 
            type="submit" variant="contained" color="primary" >
                Upload Design
            </Button> 
        </Box>
    );
}

export default FileUploadform;