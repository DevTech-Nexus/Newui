
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import React from "react";
import './Styles.css';
import { Button } from 'react-bootstrap';

const ProductAddPage = () => {
    const [categorey, setcategorey] = React.useState('');
    const [Brand, setbrand] = React.useState('');

    const handleChange = (event) => {
        setcategorey(event.target.value)

    }
    const handleChanges = (event) => {

        setbrand(event.target.value)
    }

    return (
        <div className="Align">

            <br />
            <br />
            <br />
            <br />
            <br />

            <center> <form>

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Product Name" variant="outlined" name='productName'/>
                    <TextField id="outlined-basic" label="Stock Quantity" variant="outlined" name='stockQuantity'/>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" name="Category">category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={categorey}
                            label="category"
                            onChange={handleChange}
                        >
                            <MenuItem value={'high'}>high-end</MenuItem>
                            <MenuItem value={'medium'}>medium</MenuItem>
                            <MenuItem value={'low'}>low budget</MenuItem>
                        </Select>
                    </FormControl>
                        <TextField id="outlined-basic" label="Brand" variant="outlined" name='brand'/>

                    
                    <TextField id="outlined-basic" label="price" variant="outlined" name='price' type='number'/>
                    <TextField id="outlined-basic" label="weight" variant="outlined" name='weight' type='number'/>
                    <TextField id="outlined-basic" label="image URL" variant="outlined" name='imgUrl' />

                    <TextField id="outlined-basic" label="dimensions" variant="outlined" name="dimensions"/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                    />

                </Box><br></br>

                <Button variant='primary' type="submit" className='custom-button8' >Add Phone</Button>
            </form></center><br></br>
        </div>
    );
};

export default ProductAddPage;