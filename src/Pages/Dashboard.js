import React from 'react'
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import cancel4 from '../Img/cancel.png';
import delivery from '../Img/delivery.png';
import order from '../Img/order.png';
import revenue from '../Img/revenue.png';
import Barchart from '../charts/Barchart';
import Order from '../charts/Order';
import { Revenue } from '../charts/Revenue';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Dashboard = () => {

  return (
    <>
    <Sidebar>
    <div style={{padding: '25px' ,marginTop:'80px',marginLeft:'150px',marginRight:'150px'}}> 
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
     {/*top 4 boxes--01--------------------------------------------------------------------------------- */}
      <Grid item xs={12} sm={6} md={3}>
          <Card  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 212,'&:hover': { backgroundColor: '#f0f0f0' } }}>
      <CardMedia
        sx={{
        width: 58,
        height: 58,
        ml: 2 
       }}
        image={order}
      />
      <CardContent sx={{ flex: '1' }}>
      <Typography gutterBottom variant="h5" component="div">
        65
        </Typography>
        <Typography >
        Total Orders
        </Typography>
      </CardContent>
    </Card>
        </Grid>

  {/*top 4 boxes--02--------------------------------------------------------------------------------- */}
  <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 212}}>
      <CardMedia
        sx={{
        width: 58,
        height: 58,
        ml: 2 
       }}
        image={cancel4}
      />
      <CardContent sx={{ flex: '1' }}>
      <Typography gutterBottom variant="h5" component="div">
        60
        </Typography>
        <Typography >        Total Delivery
        </Typography>
      </CardContent>
    </Card>
        </Grid>
      {/*top 4 boxes--03--------------------------------------------------------------------------------- */}
      <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 212}}>
      <CardMedia
        sx={{
        width: 58,
        height: 58,
        ml: 2 
       }}
        image={delivery}
      />
      <CardContent sx={{ flex: '1' }}>
      <Typography gutterBottom variant="h5" component="div">
        57
        </Typography>
        <Typography >        Total Cancel
        </Typography>
      </CardContent>
    </Card>
        </Grid>
    {/*top 4 boxes--04--------------------------------------------------------------------------------- */}
 
    <Grid item xs={12} sm={6} md={3}>
          <Card  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 212}}>
      <CardMedia
        sx={{
        width: 58,
        height: 58,
        ml: 2 
       }}
        image={revenue}
      />
      <CardContent sx={{ flex: '1' }}>
      <Typography gutterBottom variant="h5" component="div">
        6
        </Typography>
        <Typography > Total Revenue</Typography>
      </CardContent>
    </Card>
        </Grid>
        </Grid>
        </Box>
      </div>
      
  {/*---------------------------graph------------------------------------------------------- */}
  <Box sx={{ padding: '25px',marginTop:'20px', marginLeft: '100px', marginRight: '100px'}}>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
    <Grid item xs={12} sm={6}>
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto', overflow: 'auto'}}>        <CardContent>
          <Barchart />
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} sm={6}>
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto', overflow: 'auto' }}>        <CardContent>
          <Barchart />
        </CardContent>
      </Card>
    </Grid>

    <Grid item xs={12}>
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto', overflow: 'auto' ,backgroundColor:'plum'}}>        <CardContent>
          <Order/>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12}>
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 'auto', overflow: 'auto',backgroundColor:'pink' }}>        <CardContent>
          <Revenue />
        </CardContent>
      </Card>
    </Grid>
  </Grid>
</Box>


  {/*---------------------------Footer------------------------------------------------------- */}
   
      <div style={{marginTop:'100px',maxWidth:'100%'}}> 
    <Footer/>
    </div>
    </Sidebar>
    
 
  </>
  )
}

export default Dashboard;