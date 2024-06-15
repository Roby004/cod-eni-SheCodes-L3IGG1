import React, { useState, useEffect } from 'react';
import { Head, useForm } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Paper, Typography, TextField, Button, Stack } from '@mui/material';



export default function LegalPage({ user, auth }) {
    const [input, setInput] = useState({
        nomHomme: '',
        nomFemme: '',
        dateNHomme: '',
        dateNFemme: '',
        nomTemoin1: '',
        nomTemoin2: '',
        dateMariage: '',
        quantite: ''
    })
    const [file, setFile] = useState({
        CRMariage: null,
        CINDemandeur: null,
        CINtemoin1: null,
        CINFemme: null,
        CINHomme: null,
        CINtemoin2: null,
        CCBFemme: null,
        CCBHomme: null,
    })

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleFileChange = (e) => {
        setFile({...file, [e.target.name]: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('CINDemandeur', file.CINDemandeur);
        formData.append('CRMariage', file.CRMariage);
        formData.append('CINtemoin1', file.CINtemoin1);
        formData.append('CINtemoin2', file.CINtemoin2);
        formData.append('CINHomme', file.CINHomme);
        formData.append('CINFemme', file.CINFemme);
        formData.append('CCBFemme', file.CCBFemme);
        formData.append('CCBHomme', file.CCBHomme);
        formData.append('nomHomme', input.nomHomme);
        formData.append('nomFemme', input.nomFemme);
        formData.append('dateNHomme', input.dateNHomme);
        formData.append('dateNFemme', input.dateNFemme);
        formData.append('dateMariage', input.dateMariage);
        formData.append('nomTemoin1', input.nomTemoin1);
        formData.append('nomTemoin2', input.nomTemoin2);
        formData.append('quantite', input.quantite);

        post(route('legalisation.store'), formData, {
            forceFormData: true,
        });
    };

    return (

        <>
            <Head title="Citizen Connect - Demande d'acte de mariage" />

            <div className='h-screen w-screen relative bg-gray-100'>
                <div className='h-[90vh] w-[90vw] items-center border absolute top-1/2 left-1/2 rounded-xl bg-white shadow-xl grid' style={{ transform: 'translate(-50%, -50%)', gridTemplateRows: '10% 90%' }}>
                    <Typography sx={{ fontSize: 27, fontWeight: '500', color: 'rgb(38 38 38)', margin: 'auto' }}>Demande d'acte de mariage</Typography>

                    <div className='h-full w-full grid  p-2' style={{ height: '100%', width: '100%', gridTemplateColumns: '48% 48%', gap: '3%' }}>
                        <div className='borde grid' style={{ height: '100%', width: '100%', gridTemplateRows: '10% 90%' }} >
                            <Typography sx={{ fontSize: 18, fontWeight: '600', color: 'rgb(30 58 138)', margin: '0', textDecoration: 'underline' }}>Informations et fichiers à fournir :</Typography>

                            <div>
                                <div className="grid items-center mt-2" style={{ width: '100%', gridTemplateColumns: '100%', gap: '0%' }}>
                                    <TextField
                                        label="Nom du marié"
                                        id="outlined-size-small"
                                        defaultValue="Small"
                                        size="small"
                                        required
                                        value={input.nomHomme} name="nomHomme" onChange={handleChange}
                                    />
                                </div>

                                <div className="grid items-center mt-12" style={{ width: '100%', gridTemplateColumns: '100%', gap: '0%' }}>
                                    <TextField
                                        label="Nom de la mariée"
                                        id="outlined-size-small"
                                        defaultValue="Small"
                                        size="small"
                                        required
                                        value={input.nomFemme} name="nomFemme" onChange={handleChange}
                                    />
                                </div>

                                <div className="grid items-center mt-12" style={{ width: '100%', gridTemplateColumns: '49% 49%', gap: '2%' }}>
                                    <TextField
                                        label="Date de naissance du marié"
                                        id="outlined-size-small"
                                        defaultValue="Small"
                                        size="small"
                                        required
                                        value={input.dateNHomme} name="dateNHomme" onChange={handleChange}
                                    />

                                    <TextField
                                        label="Date de naissance de la mariée"
                                        id="outlined-size-small"
                                        defaultValue="Small"
                                        size="small"
                                        required
                                        value={input.dateNFemme} name="dateNFemme" onChange={handleChange}
                                    />
                                </div>

                                <div className="grid items-center mt-12" style={{ width: '100%', gridTemplateColumns: '100%', gap: '0%' }}>
                                    <TextField
                                        label="Nom du 1er témoin"
                                        id="outlined-size-small"
                                        defaultValue="Small"
                                        size="small"
                                        required
                                        value={input.nomTemoin1} name="nomTemoin1" onChange={handleChange}
                                    />
                                </div>

                                <div className="grid items-center mt-12" style={{ width: '100%', gridTemplateColumns: '100%', gap: '0%' }}>
                                    <TextField
                                        label="Nom du 2ème témoin"
                                        id="outlined-size-small"
                                        defaultValue="Small"
                                        size="small"
                                        required
                                        value={input.nomTemoin2} name="nomTemoin2" onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='borde grid' style={{ height: '100%', width: '100%', gridTemplateRows: '10% 90%' }} >
                            <Typography sx={{ fontSize: 18, fontWeight: '500', color: 'rgb(38 38 38)', margin: '0', textDecoration: 'underline' }}></Typography>

                            <div>
                                <div className="grid items-center mt-2" style={{ width: '100%', gridTemplateColumns: '69% 29%', gap: '2%' }}>
                                    <TextField
                                        label="Date du mariage"
                                        id="outlined-size-small"
                                        defaultValue="Small"
                                        size="small"
                                        required
                                        value={input.dateMariage} name="dateMariage" onChange={handleChange}
                                    />
                                    <TextField
                                        type='number'
                                        label="Quantité demandée"
                                        id="outlined-size-small"
                                        defaultValue="1"
                                        size="small"
                                        required
                                        value={input.quantite} name="quantite" onChange={handleChange}
                                    />

                                </div>

                                <div className="grid items-center mt-12" style={{ width: '100%', gridTemplateColumns: '49% 49%', gap: '2%' }}>
                                    <TextField
                                        type="file"
                                        // onChange={handleResidenceChange}
                                        InputLabelProps={{ shrink: true }}
                                        inputProps={{ accept: 'image/*,application/pdf' }}
                                        label="CIN du demandeur"
                                        size="small"
                                        required
                                        value={file.CINDemandeur} name="CINDemandeur" onChange={handleFileChange}
                                    />
                                    <TextField
                                        type="file"
                                        // onChange={handleResidenceChange}
                                        InputLabelProps={{ shrink: true }}
                                        inputProps={{ accept: 'image/*,application/pdf' }}
                                        label="Certificat de residence"
                                        size="small"
                                        required
                                        value={file.CRMariage} name="CRMariage" onChange={handleFileChange}
                                    />
                                </div>

                                <div className="grid items-center mt-12" style={{ width: '100%', gridTemplateColumns: '49% 49%', gap: '2%' }}>
                                    <TextField
                                        type="file"
                                        // onChange={handleResidenceChange}
                                        InputLabelProps={{ shrink: true }}
                                        inputProps={{ accept: 'image/*,application/pdf' }}
                                        label="Cértificat de célibat du marié"
                                        size="small"
                                        required
                                        value={file.CCBHomme} name="CCBHomme" onChange={handleFileChange}
                                    />
                                    <TextField
                                        type="file"
                                        // onChange={handleResidenceChange}
                                        InputLabelProps={{ shrink: true }}
                                        inputProps={{ accept: 'image/*,application/pdf' }}
                                        label="Certificat de célibat de la marié"
                                        size="small"
                                        required
                                        value={file.CCBFemme} name="CCBFemme" onChange={handleFileChange}
                                    />

                                </div>

                                <div className="grid items-center mt-12" style={{ width: '100%', gridTemplateColumns: '49% 49%', gap: '2%' }}>
                                    <TextField
                                        type="file"
                                        // onChange={handleResidenceChange}
                                        InputLabelProps={{ shrink: true }}
                                        inputProps={{ accept: 'image/*,application/pdf' }}
                                        label="CIN du marié"
                                        size="small"
                                        required
                                        value={file.CINHomme} name="CINHomme" onChange={handleFileChange}
                                    />
                                    <TextField
                                        type="file"
                                        // onChange={handleResidenceChange}
                                        InputLabelProps={{ shrink: true }}
                                        inputProps={{ accept: 'image/*,application/pdf' }}
                                        label="CIN de la marié"
                                        size="small"
                                        required
                                        value={file.CINFemme} name="CINFemme" onChange={handleFileChange}
                                    />

                                </div>

                                <div className="grid items-center mt-12" style={{ width: '100%', gridTemplateColumns: '49% 49%', gap: '2%' }}>
                                    <TextField
                                        type="file"
                                        // onChange={handleResidenceChange}
                                        InputLabelProps={{ shrink: true }}
                                        inputProps={{ accept: 'image/*,application/pdf' }}
                                        label="CIN du 1er témoin"
                                        size="small"
                                        required
                                        value={file.CINtemoin1} name="CINtemoin1" onChange={handleFileChange}
                                    />
                                    <TextField
                                        type="file"
                                        // onChange={handleResidenceChange}
                                        InputLabelProps={{ shrink: true }}
                                        inputProps={{ accept: 'image/*,application/pdf' }}
                                        label="CIN du 2ème témoin"
                                        size="small"
                                        required
                                        value={file.CINtemoin2} name="CINtemoin2" onChange={handleFileChange}
                                    />

                                </div>

                                <div className="grid items-center mt-12" style={{ width: '60%', gridTemplateColumns: '100%', gap: '0%', marginLeft: 'auto' }}>
                                    <Button type="submit" variant="contained" >
                                        Valider la demande
                                    </Button>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>

    )
}