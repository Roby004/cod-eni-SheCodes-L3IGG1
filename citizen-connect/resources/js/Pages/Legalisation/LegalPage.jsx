import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TextInput from '@/Components/TextInput';
import { Paper, Stack, Typography, TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from '@mui/material';

export default function LegalPage({ auth, citoyen }) {
    const [cinFile, setCinFile] = useState(null);
    const [docFile, setDocFile] = useState(null);
    const [qte, setQte] = useState(1);
    const [residenceFile, setResidenceFile] = useState(null);
    const [open, setOpen] = useState(false);
    const [codeRef, setCodeRef] = useState(['', '', '', '', '', '']);
    
    /*const { post, reset } = useForm({
        cin: null,
        docScan:null,
        residence: null,
        citoyen_id: citoyen.idCitoyen,
        raison: '',
    });*/

    const handleCinChange = (e) => {
        setCinFile(e.target.files[0]);
    };
    const handleDocChange = (e) => {
        setDocFile(e.target.files[0]);
    };

    const handleResidenceChange = (e) => {
        setResidenceFile(e.target.files[0]);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleModalSubmit = (e) => {
        e.preventDefault();
        
        if (codeRef.some(code => code === '')) {
            alert('Veuillez remplir tous les champs.');
            return;
        }

        const formData = new FormData();
        formData.append('fichierLegaliser', docFile);
        formData.append('CRLegal', residenceFile);
        formData.append('citoyen_id', citoyen.idCitoyen);
        
        
        const formData2 = new FormData();
        formData.append('cin', cinFile);

        const formData3 = new FormData();
        formData.append('docScan', docFile);
        formData.append('residence', residenceFile);
        formData.append('citoyen_id', citoyen.idCitoyen);
        formData.append('raison', 'legalisation');
        
       

        post(route('/createActe'), formData2, {
            forceFormData: true,
            onSuccess: () => {
                setCinFile(null);
              
            },
        });
        post(route('/createLegalisation'), formData, {
            forceFormData: true,
            onSuccess: () => {
                setCinFile(null);
                setResidenceFile(null);
                setCodeRef(['', '', '', '', '', '']);
                reset('cin', 'residence', 'additional_info');
              
            },
        });

        post(route('/createDemande'), formData3, {
            forceFormData: true,
            onSuccess: () => {
                setCinFile(null);
                setResidenceFile(null);
               
                reset('cin', 'residence', 'additional_info');
                handleClose();
            },
        });
    };

    const handleCodeChange = (index, value) => {
        const newCodeRef = [...codeRef];
        newCodeRef[index] = value;
        setCodeRef(newCodeRef);
    };

    return (
        <AuthenticatedLayout
            user={citoyen}
        >
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
                        <img src="/images/Group 1.png" alt="" width={70} style={{ marginTop: '40px' }} />
                        <h1 className='righteous-regular'>Citizen Connect</h1>
                    </Stack>
                    <Paper elevation={3} sx={{ padding: "30px", margin: "10px 0", textAlign: 'center', justifyContent: "center" }}>
                        <Typography variant="h5" component="h2" sx={{ marginBottom: "10px" }}>
                            Demande de legalisation
                        </Typography>
                        <p>Les deux fichiers sont obligatoires!</p>
                        <form onSubmit={handleOpen}>
                            <Stack spacing={2}>
                                <TextField
                                    type="file"
                                    onChange={handleCinChange}
                                    InputLabelProps={{ shrink: true }}
                                    inputProps={{ accept: 'image/*,application/pdf' }}
                                    label="Ajout CIN"
                                    required
                                />
                                <TextField
                                    type="file"
                                    onChange={handleResidenceChange}
                                    InputLabelProps={{ shrink: true }}
                                    inputProps={{ accept: 'image/*,application/pdf' }}
                                    label="Certificat de residence"
                                />
                                <TextField
                                    type="file"
                                    onChange={handleDocChange}
                                    InputLabelProps={{ shrink: true }}
                                    inputProps={{ accept: 'image/*,application/pdf' }}
                                    label="Document a legaliser"
                                />

                    <TextInput
                        id="qte"
                        type="number"
                        name="qte"
                        value={qte}
                        
                        autoComplete="1"
                        
                        onChange={(e) => setQte( e.target.value)}
                    />
                                <Button type="button" variant="contained" onClick={handleOpen}>
                                    Valider la demande
                                </Button>
                            </Stack>
                        </form>
                    </Paper>
                </div>
            </div>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Confirmation de la demande</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Afin d'envoyer votre demande, veuillez payer les frais de la demande d'un montant de <br />
                        <strong>2000ar</strong> en les envoyant à ces numéros <strong>Mvola</strong>.
                        <br />
                        Après le paiement, saisir ci-dessous le code que vous avez reçu pour valider votre demande.
                    </DialogContentText>
                    <Grid container spacing={2} justifyContent="center" marginTop={2}>
                        {codeRef.map((digit, index) => (
                            <Grid item xs={2} key={index}>
                                <TextField
                                    type="number"
                                    inputProps={{ maxLength: 1, style: { textAlign: 'center' } }}
                                    value={digit}
                                    onChange={(e) => handleCodeChange(index, e.target.value)}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Annuler</Button>
                    <Button onClick={handleModalSubmit}>Soumettre</Button>
                </DialogActions>
            </Dialog>
        </AuthenticatedLayout>
    );
}
