import logo from './logo.svg';
import './App.css';
import FloatingActionButtonZoom from './components/MuiAnimation';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';
import NavigationIcon from '@mui/icons-material/Navigation';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

function App() { 
  const [open, setOpen] = useState(false);
  const [like, setLike] = useState(1);
  return (    
    <div className="App">
        <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
        확인!
        </Alert>
      </Collapse> 

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a data-id="a-id1" id="idid1" name="namename1" onClick={(event) => {
          alert(event.target.id + '/' + event.target.name);
        }}>he</a>
         <Stack className="stacko" spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button color="secondary" variant="contained" onClick={() => {
            setOpen(true);
          }}>Contained</Button>
          <Button color="error" variant="outlined">Outlined</Button>
        </Stack>

        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="edit">
            <EditIcon />
          </Fab>
          <Fab variant="extended">
            <NavigationIcon sx={{ mr: 1 }} />
            Navigate
          </Fab>
          <Fab variant="extended" aria-label="like" onClick={() => {
            setLike(like+1);
          }}>
            <StarIcon sx={{ mr: 1 }}/> {like}
          </Fab>
          <Button><StarIcon /></Button>          
          <IconButton color="secondary" aria-label="delete" variant="outlined">
            <DeleteIcon /> {like}
          </IconButton>
        </Box>
        <FloatingActionButtonZoom></FloatingActionButtonZoom> 
      </header>
    </div>
  );
}

export default App;
