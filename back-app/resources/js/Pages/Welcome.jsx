import { Link, Head } from '@inertiajs/react';
import { Stack, Button,Typography,Paper,MenuItem, Select, FormControl, InputLabel ,Box, useMediaQuery, useTheme} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React, { useState } from 'react';
//import StarIcon from '@mui/icons-material/Star';
import '../../css/app.css';

export default function Welcome({ auth, laravelVersion, phpVersion }) {

    const [selectedActe, setSelectedActe] = useState('naissance');
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));


    const handleActeChange = (event) => {
        setSelectedActe(event.target.value);
    };

    const dossier = {
        naissance: ["Certificat de résidence du concerné", "Copie d'acte de naissance du concerné", "Carte d'identité du demandeur"],
        mariage: ["Certificat de résidence des mariés", "Carte d'identité CIN des deux (02) témoins","Scan de la carte d'identité CIN des mariés", "Certificat de célibat", "Copie d'acte de naissance des mariés"],
        deces: ["Carte d'identité CIN ou copie du défunt", "Carte d'identité CIN du déclarant", "Fiche stastiquede décès INSTAT", "Fiche de constation de décès par la BMH"]
    };
    return (
        <>
            <Head title="Citizen Connect" />
            
            <Stack
            direction={'column'}
                style={{
                    backgroundImage: 'url(/images/people.png)',
                    backgroundSize: '100%',
                    backgroundPosition: 'top',
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    marginTop:'1px',
                    justifyContent: 'center',
                    color: '#fff', // Adjust text color for better visibility
                    textAlign: 'center',
                }}
            >
                <img src="images/logo.png" alt="" width={70} style={{marginTop:'40px'}} />
                <h1 className='righteous-regular'>Citizen Connect</h1>
                <Stack spacing={2} direction="row" sx={{width:'60%'}} >
                
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab libero dolore blanditiis ipsa explicabo nostrum quisquam aliquam, fugiat non nam nobis eligendi eius laudantium vitae laboriosam culpa assumenda ducimus.</p>

            </Stack>
                <div className='waveWhite'></div>

            </Stack>
            <Stack className='wave-background'  sx={{marginTop:"100px"}} height={isSmallScreen ? '100vh' : 'fit-content'}>
            <Stack direction={isSmallScreen ? 'column' : 'row'}>
                
                            <Paper elevation={3} sx={{padding:"30px", margin:"10px 50px 0px 50px", height:"450px"}}>
                            <Typography variant="h5" component="h2" sx={{marginBottom:'-20px'}} >
                                    Acte d'etat civil
                                    </Typography>
                                    <Typography variant="p" component="p" >
                                    Dossier a fournir pour faire une demande d'acte d'etat civil
                                    </Typography>
                                <FormControl fullWidth sx={{ margin: "20px 0" }}>
                            <InputLabel id="acte-select-label">Type d'acte</InputLabel>
                            <Select
                                labelId="acte-select-label"
                                id="acte-select"
                                value={selectedActe}
                                label="Type d'acte"
                                onChange={handleActeChange}
                            >
                                <MenuItem value="naissance">Acte de Naissance</MenuItem>
                                <MenuItem value="mariage">Acte de Mariage</MenuItem>
                                <MenuItem value="deces">Acte de Deces</MenuItem>
                            </Select>
                        </FormControl>
                        <List
                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', height:"40%" }}
                            aria-label="contacts"
                        >
                            {dossier[selectedActe].map((item, index) => (
                                <ListItem key={index} disablePadding>
                                    <ListItemText primary={item} />
                                </ListItem>
                            ))}
                        </List>

                            <Button variant="contained" sx={{marginTop:"20px"}}>
                                Faire une demande
                            </Button>
                            </Paper>
                            <Paper elevation={3} sx={{padding:"30px", margin:"10px 50px", height:"450px", maxWidth:"500px"}}>
                            <Typography variant="h5" component="h2">
                                Legalisation de documents
                                    </Typography>
                                    <Typography variant="p" component="p">
                                    Dossier a fournir pour faire une demande de legalisation de documents
                                    </Typography>
                                    <List
                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginTop:'20px' }}
                                aria-label="contacts"
                                >
                                <ListItem disablePadding>
                                    
                                    <ListItemIcon>
                                    
                                    </ListItemIcon>
                                    <ListItemText primary="Carte d'identité CIN du demandeur" />
                                
                                </ListItem>
                                <ListItem disablePadding>
                                    
                                    <ListItemText inset primary="Scan du document à legaliser (CIN,acte d'état civil,etc....)" />
                                
                                </ListItem>
                                </List>

                            <Button variant="contained" sx={{marginTop:"60px"}}>
                                Faire une demande
                            </Button>
                            </Paper>
                          
                            </Stack>
                            <Box sx={{marginTop:"50px"}}> Projet de gouvernqnce digitale ENI Copyright 2024</Box>
                
            </Stack>

        </>
    );
}
