import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { useState, useEffect, React, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { MenuItem, Menu, Typography, Button, Select, FormControl, TextField, Box } from '@mui/material';
import { DataGrid, gridClasses, GridToolbar } from '@mui/x-data-grid'
import { frFR } from '@mui/x-data-grid/locales'
import { PieChart } from '@mui/x-charts/PieChart'
import WatchLaterIcon from '@mui/icons-material/WatchLater';

// import { Delete, PersonOutlined, WidgetsOutlined, FactoryOutlined, Logout, LeaderboardOutlined, ShoppingBagOutlined, ChevronRight, ChevronLeft, Cancel, CheckCircle, } from '@mui/icons-material';

const StyledSelect = styled(Select)(({ theme }) => ({
    '& .MuiSelect-select': {
        backgroundColor: 'white',
        // borderColor: 'white',
        borderRadius: '10px',
        // outline: 'white',
        height: '10px',
        color: 'rgb(115 115 115)',
        fontSize: '0.85rem',
        width: '100%',
        '&:focus': {
            borderColor: '#ff7f00',
            outline: '#ff7f00'
        },
    },
}));

const btnCard = {
    height: '90%',
    width: '80%',
    display: 'grid',
    gridTemplateColumns: '50% 30%',
    alignItems: 'center',
    borderRadius: '5px',
    justifyContent: 'flex-start',
    textAlign: 'right',
    backgroundColor: 'white'
}

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    [`& .${gridClasses.row}.even`]: {
        border: 'none',
        backgroundColor: 'rgb(245 245 245)',
        '&:hover': {
            backgroundColor: 'rgb(245 245 245)',
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
    },
    [`& .${gridClasses.row}.odd`]: {
        border: 'none',
        '&:hover': {
            backgroundColor: 'white',
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
    },
    border: 'none',
    textAlign: 'center',
    width: '63vw'
}))

export default function Admin({ auth }) {
    const [select, setSelect] = useState('Acte de naissance')
    const [pageSize, setPageSize] = useState(5)
    //const [dataDemande, setDataDemande] = useState([])
    const [etat, setEtat] = useState('reçu')
    const citoyen ={ nomCitoyen:'manarivo'}

    const acteSelect = ['Acte de naissance', 'Acte de Mariage', 'Acte de décès', 'Légalisation']
    const pieParams = { height: 230, width: 350, margin: { right: 150, } }

 const dataDemande = [
     { idDemande: 1, dateDemande: '11/06/2024', quantite: 2, nomCitoyen: 'Rabe', prenomCitoyen: 'Tahina' },
     { idDemande: 2, dateDemande: '11/06/2024', quantite: 2, nomCitoyen: 'Rabe', prenomCitoyen: 'Tahina' },
     { idDemande: 3, dateDemande: '11/06/2024', quantite: 2, nomCitoyen: 'Rabe', prenomCitoyen: 'Tahina' },
     { idDemande: 4, dateDemande: '11/06/2024', quantite: 2, nomCitoyen: 'Rabe', prenomCitoyen: 'Tahina' },
     { idDemande: 5, dateDemande: '11/06/2024', quantite: 2, nomCitoyen: 'Rabe', prenomCitoyen: 'Tahina' },
     { idDemande: 6, dateDemande: '11/06/2024', quantite: 2, nomCitoyen: 'Rabe', prenomCitoyen: 'Tahina' },
        { idDemande: 7, dateDemande: '11/06/2024', quantite: 2, nomCitoyen: 'Rabe', prenomCitoyen: 'Tahina' },
        { idDemande: 8, dateDemande: '11/06/2024', quantite: 2, nomCitoyen: 'Rabe', prenomCitoyen: 'Tahina' },
     { idDemande: 9, dateDemande: '11/06/2024', quantite: 2, nomCitoyen: 'Rabe', prenomCitoyen: 'Tahina' },
     { idDemande: 10, dateDemande: '11/06/2024', quantite: 2, nomCitoyen: 'Rabe', prenomCitoyen: 'Tahina' },
     { idDemande: 11, dateDemande: '11/06/2024', quantite: 2, nomCitoyen: 'Rabe', prenomCitoyen: 'Tahina' },
 ]
    const url = 'http://localhost:8000/'

    useEffect(() => {
        axios.get(url + `listDemandeFiltre/${select}/${etat}`).then(function (response) {
            setDataDemande(response.data)
        }, function (error) {
            console.log(error)
        })
    }, [select, etat, dataDemande])

    const etatClic = () => { setEtat('en cours') }

    const dataChart = [
        { label: 'Reçu', value: 2400 },
        { label: 'En cours', value: 4567 },
        { label: 'Fini', value: 1398 },
    ]

    const rowUpdate = dataDemande.map((obj, index) => {
        return { ...obj, id: index, action: 'ok' }
    })


    const columns = [
        { field: 'idDemande', headerName: 'N°', headerClassName: 'super-app-theme--header', width: 50, headerAlign: 'center', },
        { field: 'dateDemande', headerName: `Date d'envoi`, headerClassName: 'super-app-theme--header', width: 200, headerAlign: 'center', },
        { field: 'quantite', headerName: 'Qte', headerClassName: 'super-app-theme--header', width: 100, headerAlign: 'center', },
        { field: 'nomCitoyen', headerName: 'Nom', headerClassName: 'super-app-theme--header', width: 150, headerAlign: 'center', },
        { field: 'prenomCitoyen', headerName: 'Prénom', headerClassName: 'super-app-theme--header', width: 150, headerAlign: 'center', },
        {
            field: 'action',
            headerName: '',
            headerClassName: 'super-app-theme--header',
            width: 100,
            headerAlign: 'center',
            renderCell: (params) => {
                const row = params.row
                if (row.etat === 'en cours') {
                    return (
                        <div style={{ display: 'grid', width: '100%', height: 'fit-content', gridTemplateColumns: '48% 48%', gap: '4%', alignItems: 'center', justifyContent: 'center' }}>
                            <IconButton sx={{ p: 1, width: 'fit-content', height: 'fit-content' }} disabled={!row.acces} onClick={() => {
                                
                            }}>
                                {/* <Edit sx={{ color: '#ff9f00', }} /> */}
                            </IconButton>

                            <IconButton sx={{ p: 1, width: 'fit-content', height: 'fit-content' }} disabled={!row.acces} onClick={() => {
                                
                            }}>
                                {/* <Delete sx={{ color: '#ed1111', }} /> */}
                            </IconButton>
                        </div>
                    )
                } else {
                    return (
                        <button style={{ paddingRight: '20px', paddingLeft: '20px', width: 'fit-content', height: 'fit-content', border: 'none', borderRadius: '10px', color: 'rgb(2 132 199)', backgroundColor: 'transparent' }} onClick={() => {
                            // setInput(row)
                            // setForm(true)
                        }}>
                            Traiter
                        </button>
                    )
                }
            },
        },
    ]

    const handleChangeSelect1 = (event) => {
        setSelect(event.target.value)
    }


    return (
        <AdminLayout
        user={citoyen}
    >
        <Head title="Citizen Connect - Demande de legalisation" />
        <div style={{ height: '100vh', width: '100vw', display: 'grid', gridTemplateRows: '10% 90%' }} className=" overflow-hidden bg-gray-100 h-screen w-screen">
            {/*<div className="flex items-center w-full bg-white shadow-md">
                <Typography sx={{ fontSize: 27, fontWeight: '500', color: 'rgb(38 38 38)', marginLeft: '2%' }}>Dashboard</Typography>
                <Typography sx={{ fontSize: 15, fontWeight: '500', color: 'rgb(38 38 38)', marginLeft: 'auto', marginRight: '2%' }}>Manarivo Holy</Typography>
                <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Se deconnecter
                            </ResponsiveNavLink>
                        </div>
    </div>*/}

            <div style={{ height: '100%', width: '100vw', display: 'grid', gridTemplateColumns: '65vw 35vw' }} className="h-full borde border-blue-500 items-center w-full">
                <div style={{ display: 'grid', gridTemplateRows: '10% 18% 72%' }} className="borde border-black h-full w-full">
                    <div className="borde border-orange-500 h-full w-full flex items-center relative">
                        <Typography sx={{ fontSize: 20, fontWeight: '500', color: 'rgb(75 75 75)', marginLeft: '2%' }}>Liste des demandes</Typography>
                        <FormControl size="small" sx={{ m: 1, width: 'fit-content', height: '100px', float: 'right', mt: 8, marginLeft: 'auto' }}>
                            <StyledSelect
                                sx={{}}
                                value={select}
                                onChange={handleChangeSelect1}
                                displayEmpty
                                // label='Catégorie'
                                inputProps={{ 'aria-label': 'sort' }}
                                autoWidth
                            >
                                {acteSelect.map((item, index) => {
                                    return (
                                        <MenuItem key={index} value={item} >{item}</MenuItem>
                                    )
                                })}
                            </StyledSelect>
                        </FormControl>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '32% 32% 32%', gap: '0%' }} className="borde border-green-500 h-full w-full">
                        <div id='button-menu' style={btnCard} className='ml-10 shadow-md'>
                            <div>
                                <Typography sx={{ fontSize: 16, fontWeight: '500', color: 'rgb(100 100 100)', marginLeft: '2%', }}>Total reçus</Typography>
                                <Typography sx={{ fontSize: 22, fontWeight: '500', color: 'rgb(99 102 241)', marginLeft: '2%', }}>{122}</Typography>
                            </div>
                            <div className='h-10 w-10 bg-indigo-500 rounded-lg ml-[50%] mt-0 flex items-center justify-center'>
                                <WatchLaterIcon sx={{color:"white"}}/>
                                {/* <WidgetsOutlined sx={{ fontSize: 45, color: '#ff7f00', marginLeft: '20%' }} /> */}
                            </div>
                        </div>
                        <div id='button-menu' style={btnCard} className=' shadow-md'>
                            <div>
                                <Typography sx={{ fontSize: 16, fontWeight: '500', color: 'rgb(100 100 100)', marginLeft: '2%', }}>Non traitées</Typography>
                                <Typography sx={{ fontSize: 22, fontWeight: '500', color: 'rgb(99 102 241)', marginLeft: '2%', }}>{122}</Typography>
                            </div>
                            <div className='h-10 w-10 bg-teal-500 rounded-lg ml-[50%] mt-0 flex items-center justify-center'>
                            <WatchLaterIcon sx={{color:"white"}}/>
                                {/* <WidgetsOutlined sx={{ fontSize: 45, color: '#ff7f00', marginLeft: '20%' }} /> */}
                            </div>
                        </div>

                        <div id='button-menu' style={btnCard} onClick={etatClic} className='-ml-10 shadow-md'>
                            <div>
                                <Typography sx={{ fontSize: 16, fontWeight: '500', color: 'rgb(100 100 100)', marginLeft: '2%', }}>En cours</Typography>
                                <Typography sx={{ fontSize: 22, fontWeight: '500', color: 'rgb(249 115 22)', marginLeft: '2%', }}>{122}</Typography>
                            </div>

                            <div className='h-10 w-10 bg-orange-500 rounded-lg ml-[50%] mt-0 flex items-center justify-center'>
                                    <WatchLaterIcon sx={{color:"white"}}/>
                                {/* <WidgetsOutlined sx={{ fontSize: 45, color: '#ff7f00', marginLeft: '20%' }} /> */}
                            </div>
                        </div>

                    </div>

                    <div className="borde border-red-500 h-full w-full  pt-5">
                        <Box id='admin-tableau' sx={{ width: '63vw', backgroundColor: 'white', '& .super-app-theme--header': { color: 'rgb(100 100 100)', fontSize: 15, fontWeight: '700', height: '30px', textAlign: 'center' } }}>
                            <StripedDataGrid
                                columns={columns}
                                rows={rowUpdate}
                                getRowClassName={(params) =>
                                    params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
                                }
                                initialState={{
                                    pagination: {
                                        paginationModel: {
                                            pageSize: 6,
                                        },
                                    },
                                }}
                                // pageSize={pageSize}
                                // onRowDataChanged={handleRowDataChanged}
                                rowHeight={50}
                                localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
                                sx={{
                                    '& .MuiDataGrid-cell': {
                                        textAlign: 'center',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }
                                }}
                            />
                        </Box>
                    </div>

                </div>

                <div className="borde border-red-500 h-full w-full">

                    <div className='h-fit w-[95%] flex flex-col items-center justif-center bg-white rounded-lg mt-[28%]'>
                        <Typography sx={{ fontSize: 17, fontWeight: '500', color: 'rgb(110 110 110)', mt: 3 }}>Demandes traitées</Typography>

                        <PieChart
                            series={[
                                {
                                    data: dataChart,
                                    innerRadius: 70,
                                    outerRadius: 93,
                                    paddingAngle: 3,
                                    cornerRadius: 2,
                                    startAngle: -180,
                                    endAngle: 180,
                                    highlightScope: { faded: 'global', highlighted: 'item' },
                                    faded: { innerRadius: 10, additionalRadius: -10, },
                                },
                            ]}
                            {...pieParams}
                            sx={{ mt: 3, ml: 10 }}
                        />

                        <Button variant='contained' sx={{ color: 'white', backgroundColor: 'rgb(30 64 175)', mt: 3, width: '120px' }}>Semaine</Button>
                        <Button variant='contained' sx={{ color: 'white', backgroundColor: 'rgb(30 64 175)', mt: 3, mb: 3, width: '120px' }}>Mois</Button>
                    </div>

                </div>
            </div>
        </div>
        </AdminLayout>
    );
}