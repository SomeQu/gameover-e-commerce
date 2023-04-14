import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function MediaCard() {
  return (
    <Box sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }}>
    <Card sx={{ width: 280,
    height:567 }}>
      <CardMedia
        sx={{ height: 400 }}
        image=""
        title=""
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">Zombies</Typography>
        <Typography gutterBottom variant="h5" component="div">
          Dead Space
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{
            width: '119px',
            height: '52px',
            background:' #4F3ACE',
            border:'1px solid #4F3ACE',
            fontSize:'26px',
            fontFamily:'qore',
            color:'white'
        }}>9,99</Button>
        <Button size="small"
        sx={{
            width: '119px',
            height: '52px',
            background:' #4F3ACE',
            border:'1px solid #4F3ACE',
            fontSize:'12px',
            fontFamily:'qore',
            color:'white'
        }}>+ to favorite</Button>
        <Button size="small"
         sx={{
            width: '119px',
            height: '52px',
            background:' #4F3ACE',
            border:'1px solid #4F3ACE',
            fontSize:'12px',
            fontFamily:'qore',
            color:'white'
        }}>+ to cart</Button>
      </CardActions>
    </Card>
    </Box>
  );
}