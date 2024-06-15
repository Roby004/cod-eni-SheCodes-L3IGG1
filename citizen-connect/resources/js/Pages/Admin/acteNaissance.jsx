import React, { useState, useEffect } from 'react';
import { Head, useForm } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Paper, Typography, TextField, Button, Stack } from '@mui/material';



export default function LegalPage({ user, auth }) {
    const [input, setInput] = useState({
        nomNaissance: '',
        prenomNaissance: '',
        dateNaissance: '',
        lieuNaissance: '',
        nomPere: '',
        nomMere: '',
        agePere: '',
        ageMere: '',
        professionPere: '',
        professionMere: '',
        lieuParent: '',
        regimeMatrimonial: '',
        quantite: ''
    })
    const [file, setFile] = useState({
        CRNaissance: null,
        CINDemandeur: null,
        copieNaissance: null
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
        formData.append('CRNaissance', file.CRNaissance);
        formData.append('copieNaissance', file.copieNaissance);
        formData.append('nomNaissance', input.nomNaissance);
        formData.append('prenomNaissance', input.prenomNaissance);
        formData.append('dateNaissance', input.dateNaissance);
        formData.append('lieuNaissance', input.lieuNaissance);
        formData.append('nomPere', input.nomPere);
        formData.append('nomMere', input.nomMere);
        formData.append('ageMere', input.ageMere);
        formData.append('agePere', input.agePere);
        formData.append('professionPere', input.professionPere);
        formData.append('professionMere', input.professionMere);
        formData.append('lieuParent', input.lieuParent);
        formData.append('regimeMatrimonial', input.regimeMatrimonial);
        formData.append('quantite', input.quantite);

        post(route('legalisation.store'), formData, {
            forceFormData: true,
        });
    };

    return (

        <>
            <Head title="Citizen Connect - Demande d'acte de naissance" />

            <div className='h-screen w-screen relative bg-gray-100'>
                <div className='h-[90vh] w-[90vw] items-center border absolute top-1/2 left-1/2 rounded-xl bg-white shadow-xl grid' style={{ transform: 'translate(-50%, -50%)', gridTemplateRows: '10% 90%' }}>
                    <Typography sx={{ fontSize: 27, fontWeight: '500', color: 'rgb(38 38 38)', margin: 'auto' }}>Demande d'acte de naissance</Typography>

                    <div className='h-full w-full grid  p-2' style={{ height: '100%', width: '100%', gridTemplateColumns: '48% 48%', gap: '3%' }}>
                        <div className='borde grid' style={{ height: '100%', width: '100%', gridTemplateRows: '10% 90%' }} >
                            <Typography sx={{ fontSize: 18, fontWeight: '600', color: 'rgb(30 58 138)', margin: '0', textDecoration: 'underline' }}>Informations et fichiers à fournir :</Typography>

                            <div>
                                <div className="grid items-center mt-2" style={{ width: '100%', gridTemplateColumns: '39% 59%', gap: '2%' }}>
                                    <TextField
                                        label="Nom du concerné"
                                        id="outlined-size-small"
                                        defaultValue="Small"
                                        size="small"
                                        required
                                        value={input.nomNaissance} name="nomNaissance" onChange={handleChange}
                                    />

                                    <TextField
                                        label="Prénom du concerné"
                                        id="outlined-size-small"
                                        defaultValue="Small"
                                        size="small"
                                        required
                                        value={input.prenomNaissance} name="prenomNaissance" onChange={handleChange}
                                    />
                                </div>

                                <div className="grid items-center mt-12" style={{ width: '100%', gridTemplateColumns: '49% 49%', gap: '2%' }}>
                                    <TextField
                                        label="Date de naissance"
                                        id="outlined-size-small"
                                        defaultValue="Small"
                                        size="small"
                                        required
                                        value={input.dateNaissance} name="dateNaissance" onChange={handleChange}
                                    />

                                    <TextField
                                        label="Lieu de naissance"
                                        id="outlined-size-small"
                                        defaultValue="Small"
                                        size="small"
                                        required
                                        value={input.lieuNaissance} name="lieuNaissance" onChange={handleChange}
                                    />
                                </div>

                                <div className="grid items-center mt-12" style={{ width: '100%', gridTemplateColumns: '79% 19%', gap: '2%' }}>
                                    <TextField
                                        label="Nom du père"
                                        id="outlined-size-small"
                                        defaultValue="Small"
                                        size="small"
                                        required
                                        value={input.nomPere} name="nomPere" onChange={handleChange}
                                    />

                                    <TextField
                                        type='number'
                                        label="Age"
                                        id="outlined-size-small"
                                        defaultValue="Small"
                                        size="small"
                                        required
                                        value={input.agePere} name="agePere" onChange={handleChange}
                                    />
                                </div>

                                <div className="grid items-center mt-12" style={{ width: '100%', gridTemplateColumns: '79% 19%', gap: '2%' }}>
                                    <TextField
                                        label="Nom de la mère"
                                        id="outlined-size-small"
                                        defaultValue="Small"
                                        size="small"
                                        required
                                        value={input.nomMere} name="nomMere" onChange={handleChange}
                                    />

                                    <TextField
                                        type='number'
                                        label="Age"
                                        id="outlined-size-small"
                                        defaultValue="Small"
                                        size="small"
                                        required
                                        value={input.ageMere} name="ageMere" onChange={handleChange}
                                    />
                                </div>

                                <div className="grid items-center mt-12" style={{ width: '100%', gridTemplateColumns: '49% 49%', gap: '2%' }}>
                                    <TextField
                                        label="Profession du père"
                                        id="outlined-size-small"
                                        defaultValue="Small"
                                        size="small"
                                        required
                                        value={input.professionPere} name="professionPere" onChange={handleChange}
                                    />

                                    <TextField
                                        label="Profession de la mère"
                                        id="outlined-size-small"
                                        defaultValue="Small"
                                        size="small"
                                        required
                                        value={input.professionMere} name="professionMere" onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='borde grid' style={{ height: '100%', width: '100%', gridTemplateRows: '10% 90%' }} >
                            <Typography sx={{ fontSize: 18, fontWeight: '500', color: 'rgb(38 38 38)', margin: '0', textDecoration: 'underline' }}></Typography>

                            <div>
                                <div className="grid items-center mt-2" style={{ width: '100%', gridTemplateColumns: '100%', gap: '0%' }}>
                                    <TextField
                                        label="Lieu de résidence des parents"
                                        id="outlined-size-small"
                                        defaultValue="Small"
                                        size="small"
                                        required
                                        value={input.lieuParent} name="lieuParent" onChange={handleChange}
                                    />
                                </div>

                                <div className="grid items-center mt-12" style={{ width: '100%', gridTemplateColumns: '69% 29%', gap: '2%' }}>
                                    <TextField
                                        label="Régime matrimonial des parents"
                                        id="outlined-size-small"
                                        defaultValue="Small"
                                        size="small"
                                        required
                                        value={input.RégimeMatrimonial} name="RégimeMatrimonial" onChange={handleChange}
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

                                <div className="grid items-center mt-12" style={{ width: '100%', gridTemplateColumns: '100%', gap: '0%' }}>
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
                                        label="Certificat de residence"
                                        size="small"
                                        required
                                        value={file.CRNaissance} name="CRNaissance" onChange={handleFileChange}
                                    />

                                </div>

                                <div className="grid items-center mt-12" style={{ width: '100%', gridTemplateColumns: '100%', gap: '0%' }}>
                                    <TextField
                                        type="file"
                                        // onChange={handleResidenceChange}
                                        InputLabelProps={{ shrink: true }}
                                        inputProps={{ accept: 'image/*,application/pdf' }}
                                        label="Copie du concerné"
                                        size="small"
                                        value={file.copieNaissance} name="copieNaissance" onChange={handleFileChange}
                                    // required
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