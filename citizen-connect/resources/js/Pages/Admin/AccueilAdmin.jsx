import { Link, Head } from '@inertiajs/react';
import { Stack, Button,Typography,Paper,MenuItem, Select, FormControl, InputLabel ,Box} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React, { useState } from 'react';
//import StarIcon from '@mui/icons-material/Star';
import '../../../css/app.css';

export default function AccueilAdmin() {

   
    return (
        <>
            <Head title="Agent Citizen Connect" />
            
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
                    overflowY:'hidden',
                    overflow:'hidden'
                }}
            >
                <img src="images/logo.png" alt="" width={70} style={{marginTop:'40px'}} />
                <h1 className='righteous-regular'>Citizen Connect</h1>
                <Stack spacing={2} direction="row" sx={{width:'60%',marginTop:'10px'}}>
                
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab libero dolore blanditiis ipsa explicabo nostrum quisquam aliquam, fugiat non nam nobis eligendi eius laudantium vitae laboriosam culpa assumenda ducimus.</p>

            </Stack>
            <Link href='/test'>
            <Button variant="contained" sx={{marginTop:"60px"}}>
                                Se connecter
                            </Button>
            </Link>
            </Stack>

           

        </>
    );
}
