import React, { useState, useEffect } from 'react';
import { Head, useForm } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Paper, Typography, TextField, Button, Stack } from '@mui/material';



export default function LegalPage({ user, auth }) {
    const [input, setInput] = useState({
        nomDefunt: '',
        dateDeces: '',
        dateNDefunt: '',
        quantite: ''
    })
    const [file, setFile] = useState({
        CINDefunt: null,
        CINDemandeur: null,
        ficheDeces: null,
        ficheBMH: null,
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
        formData.append('CINDefunt', file.CINDefunt);
        formData.append('ficheDeces', file.ficheDeces);
        formData.append('ficheBMH', file.ficheBMH);
        formData.append('nomDefunt', input.nomDefunt);
        formData.append('dateNDefunt', input.dateNDefunt);
        formData.append('dateDeces', input.dateDeces);
        formData.append('quantite', input.quantite);

        post(route('legalisation.store'), formData, {
            forceFormData: true,
        });
    };

    return (

        <>
            <Head title="Citizen Connect - Demande d'acte de décès" />

            <div className='h-screen w-screen relative bg-gray-100'>
                <div className='h-[90vh] w-[90vw] items-center border absolute top-1/2 left-1/2 rounded-xl bg-white shadow-xl grid' style={{ transform: 'translate(-50%, -50%)', gridTemplateRows: '10% 90%' }}>
                    <Typography sx={{ fontSize: 27, fontWeight: '500', color: 'rgb(38 38 38)', margin: 'auto' }}>Demande d'acte de décès</Typography>

                    <div className='h-full w-full grid  p-2' style={{ height: '100%', width: '100%', gridTemplateColumns: '48% 48%', gap: '3%' }}>
                        <div className='borde grid' style={{ height: '100%', width: '100%', gridTemplateRows: '10% 90%' }} >
                            <Typography sx={{ fontSize: 18, fontWeight: '600', color: 'rgb(30 58 138)', margin: '0', textDecoration: 'underline' }}>Informations et fichiers à fournir :</Typography>

                            <div className='h-full'>
                                <div className="grid items-center mt-2" style={{ width: '100%', gridTemplateColumns: '100%', gap: '0%' }}>
                                    <TextField
                                        label="Nom du défunt"
                                        id="outlined-size-small"
                                        defaultValue="Small"
                                        size="small"
                                        required
                                        value={input.nomDefunt} name="nomDefunt" onChange={handleChange}
                                    />
                                </div>

                                <div className="grid items-center mt-12" style={{ width: '100%', gridTemplateColumns: '100%', gap: '0%' }}>
                                    <TextField
                                        label="Date de naissance du défunt"
                                        id="outlined-size-small"
                                        defaultValue="Small"
                                        size="small"
                                        required
                                        value={input.dateNDefunt} name="dateNDefunt" onChange={handleChange}
                                    />
                                </div>

                                <div className="grid items-center mt-12" style={{ width: '100%', gridTemplateColumns: '100%', gap: '0%' }}>
                                    <TextField
                                        label="Date de décès du défunt"
                                        id="outlined-size-small"
                                        defaultValue="Small"
                                        size="small"
                                        required
                                        value={input.dateDeces} name="dateDeces" onChange={handleChange}
                                    />
                                </div>

                                <div className="grid items-center mt-12" style={{ width: '100%', gridTemplateColumns: '30%', gap: '0%' }}>
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

                                <div className="grid items-center mt-12" style={{ width: '100%', gridTemplateColumns: '100%', gap: '0%' }}>
                                <TextField
                                        type="file"
                                        // onChange={handleResidenceChange}
                                        InputLabelProps={{ shrink: true }}
                                        inputProps={{ accept: 'image/*,application/pdf' }}
                                        label="CIN du défunt"
                                        size="small"
                                        required
                                        value={file.CINDefunt} name="CINDefunt" onChange={handleFileChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='borde grid relative' style={{ height: '100%', width: '100%', gridTemplateRows: '10% 90%' }} >
                            <Typography sx={{ fontSize: 18, fontWeight: '500', color: 'rgb(38 38 38)', margin: '0', textDecoration: 'underline' }}></Typography>

                            <div className='h-full borde'>
                                <div className="grid items-center mt-2" style={{ width: '100%', gridTemplateColumns: '100%', gap: '1%' }}>
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

                                </div>

                                <div className="grid items-center mt-12" style={{ width: '100%', gridTemplateColumns: '100%', gap: '0%' }}>
                                    <TextField
                                        type="file"
                                        // onChange={handleResidenceChange}
                                        InputLabelProps={{ shrink: true }}
                                        inputProps={{ accept: 'image/*,application/pdf' }}
                                        label="Fiche statistique de décès INSTAT"
                                        size="small"
                                        required
                                        value={file.ficheDeces} name="ficheDeces" onChange={handleFileChange}
                                    />
                                </div>

                                <div className="grid items-center mt-12" style={{ width: '100%', gridTemplateColumns: '100%', gap: '0%' }}>
                                    <TextField
                                        type="file"
                                        // onChange={handleResidenceChange}
                                        InputLabelProps={{ shrink: true }}
                                        inputProps={{ accept: 'image/*,application/pdf' }}
                                        label="Fiche de constatation de décès"
                                        size="small"
                                        required
                                        value={file.ficheBMH} name="ficheBMH" onChange={handleFileChange}
                                    />

                                </div>

                                <div className="grid items-center absolute" style={{ width: '60%', gridTemplateColumns: '100%', gap: '0%', right: 10, bottom: 10 }}>
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