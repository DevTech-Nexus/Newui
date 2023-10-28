
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
                    <TextField id="outlined-basic" label="productName" variant="outlined" />
                    <TextField id="outlined-basic" label="stock_Quantity" variant="outlined" />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">categorey</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={categorey}
                            label="category"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>phone</MenuItem>
                            <MenuItem value={20}>Tab</MenuItem>
                            <MenuItem value={30}>Pc</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={Brand}
                            label="brand"
                            onChange={handleChanges}
                        >
                            <MenuItem value={10}>phone</MenuItem>
                            <MenuItem value={20}>Tab</MenuItem>
                            <MenuItem value={30}>Pc</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField id="outlined-basic" label="price" variant="outlined" />
                    <TextField id="outlined-basic" label="weight" variant="outlined" />
                    <TextField id="outlined-basic" label="imgUrl" variant="outlined" />

                    <TextField id="outlined-basic" label="dimensions" variant="outlined" />
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        defaultValue=""
                    />

                </Box><br></br>

                <Button variant='primary' type="submit" className='custom-button8' >Add Record</Button>
            </form></center><br></br>
        </div>
    );
};

export default ProductAddPage;