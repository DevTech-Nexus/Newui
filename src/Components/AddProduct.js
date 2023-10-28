
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


    const [errors, setErrors] = React.useState({
        productName: '',
        stockQuantity: '',
        category: '',
        brand: '',
        price: '',
        weight: '',
        imgUrl: '',
        dimensions: '',
        description: '',
    });



    const handleChange = (event) => {
        setcategorey(event.target.value)

    }
    const handleSubmit = (event) => {
        const data = new FormData(event.currentTarget);
        //check for nulls 
        if (!data.get('productName')) {
            setErrors({ ...errors, productName: 'Product Name is required' })

        }
        if (!data.get('stockQuantity')) {
            setErrors({ ...errors, stockQuantity: 'Stock Quantity is required' })
        }
        if (!data.get('category')) {
            setErrors({ ...errors, category: 'Category is required' })
        }
        if (!data.get('brand')) {
            setErrors({ ...errors, brand: 'Brand is required' })
        }
        if (!data.get('price')) {
            setErrors({ ...errors, price: 'Price is required' })
        }
        if (!data.get('weight')) {
            setErrors({ ...errors, weight: 'Weight is required' })
        }
        if (!data.get('imgUrl')) {
            setErrors({ ...errors, imgUrl: 'Image URL is required' })
        }
        if (!data.get('dimensions')) {
            setErrors({ ...errors, dimensions: 'Dimensions is required' })
        }
        if (!data.get('description')) {
            setErrors({ ...errors, description: 'Description is required' })
        }
        else {

            console.log({
                productName: data.get('productName'),
                stockQuantity: data.get('stockQuantity'),
                category: data.get('category'),
                brand: data.get('brand'),
                price: data.get('price'),
                weight: data.get('weight'),
                imgUrl: data.get('imgUrl'),
                dimensions: data.get('dimensions'),
                description: data.get('description'),
            });
            sendData(data);
        }
        alert("Some fields are still empty!");
    }

    const sendData = async (data) => {
        const response = await fetch("https://expertmobile-productservice.azurewebsites.net/products/",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json;"
                },
                body: `{
                    "productName": "${data.get('productName')}",
                    "description": "${data.get('description')}",
                    "category": "${data.get('category')}",
                    "brand": "${data.get('brand')}",
                    "price": ${data.get('price')},
                    "currency" : "USD",
                    "weight": ${data.get('weight')},
                    "dimensions": "${data.get('dimensions')}",
                    "stockQuantity": ${data.get('stockQuantity')},
                    "imgUrl": "${data.get('imgUrl')}",
                    
                }`

            });
        const reply = await response.text();
        console.log(reply);
    }

    return (
        <div className="Align">

            <br />
            <br />
            <br />
            <br />
            <br />

            <center> <form onSubmit={handleSubmit}>

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Product Name" variant="outlined" name='productName' required={true} />
                    <TextField id="outlined-basic" label="Stock Quantity" variant="outlined" name='stockQuantity' required={true} />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" name="Category" required={true}>category</InputLabel>
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
                    <TextField id="outlined-basic" label="Brand" variant="outlined" name='brand' required={true} />


                    <TextField id="outlined-basic" label="price" variant="outlined" name='price' type='number' required={true} />
                    <TextField id="outlined-basic" label="weight" variant="outlined" name='weight' type='number' required={true} />
                    <TextField id="outlined-basic" label="image URL" variant="outlined" name='imgUrl' required={true} />

                    <TextField id="outlined-basic" label="dimensions" variant="outlined" name="dimensions" required={true} />
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        required={true}
                    />

                </Box><br></br>

                <Button variant='primary' type="submit" className='custom-button8' >Add Phone</Button>
            </form></center><br></br>
        </div>
    );
};

export default ProductAddPage;