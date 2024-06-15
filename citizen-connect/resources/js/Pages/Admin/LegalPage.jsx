import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Paper, Typography, TextField, Button, Stack } from '@mui/material';



export default function LegalPage({ user,auth }) {
    const [cinFile, setCinFile] = useState(null);
    const [residenceFile, setResidenceFile] = useState(null);

    const handleCinChange = (e) => {
        setCinFile(e.target.files[0]);
    };

    const handleResidenceChange = (e) => {
        setResidenceFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('cin', cinFile);
        formData.append('residence', residenceFile);

        post(route('legalisation.store'), formData, {
            forceFormData: true,
        });
    };
  return (
    
    <>
             <Head title="Citizen Connect - Demande de legalisation" />

            <div className="py-12">
                <div className="max-w-2xl mx-auto sm:px-6 lg:px-8"> 
                <Stack 
                        className='entete' 
                        alignItems="center" 
                        justifyContent="center" 
                        spacing={2}
                        sx={{ width: '100%', textAlign: 'center', marginBottom: '20px' }}
                    >
                <img src="images/Group 1.png" alt="" width={70} style={{marginTop:'40px'}} />
                <h1 className='righteous-regular'>Citizen Connect</h1>
                
                
                </Stack>
                <Paper elevation={3} sx={{ padding: "30px", margin: "10px 0" ,textAlign:'center',justifyContent:"center"}}>
                        <Typography variant="h5" component="h2" sx={{ marginBottom: "10px" }}>
                            Demande de legalisation
                        </Typography>
                        <p>Les deux fichiers sont obligatoires!</p>
                        <form onSubmit={handleSubmit}>
                            <Stack spacing={2}>
                                <TextField
                                    type="file"
                                    onChange={handleCinChange}
                                    InputLabelProps={{ shrink: true }}
                                    inputProps={{ accept: 'image/*,application/pdf' }}
                                    label="Ajout CIN"
                                />
                                <TextField
                                    type="file"
                                    onChange={handleResidenceChange}
                                    InputLabelProps={{ shrink: true }}
                                    inputProps={{ accept: 'image/*,application/pdf' }}
                                    label="Certificat de residence"
                                />
                                <Button type="submit" variant="contained" >
                                    Valider la demande
                                </Button>
                            </Stack>
                        </form>
                    </Paper>
                </div>
            </div>
        
            </>
    
  )
}