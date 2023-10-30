
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
import React, { useEffect } from "react";
import './Styles.css';
import { Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";

const ProductUpdatePage = () => {

    const { id } = useParams();

    const [formData, setFormData] = React.useState({
        id: 0,
        productName: '',
        stock_Quantity: 0,
        category: '',
        brand: '',
        price: 0,
        weight: 0,
        imgUrl: '',
        dimensions: '',
        description: '',
    });

    console.log(formData.id);
    const getData = async () => {
        const response = await fetch("http://localhost:8081/products/" + id);
        const data = await response.json();
        console.log(data);
        setFormData(data);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

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

    useEffect(() => {
        getData();
    }, []);


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(
            formData.productName,
            formData.stockQuantity,
            formData.category,
            formData.brand,
            formData.price,
            formData.weight,
            formData.imgUrl,
            formData.dimensions,
            formData.description
        )

        //check for nulls
        if (formData.productName !== null && formData.stockQuantity !== null && formData.category !== null && formData.brand !== null && formData.price !== null && formData.weight !== null && formData.imgUrl !== null && formData.dimensions !== null && formData.description !== null) {
            sendData();
        }
        else {
            alert('Please fill in all fields');
        }
    }

    const sendData = async () => {

        console.log(
            formData.productName,
            formData.stockQuantity,
            formData.category,
            formData.brand,
            formData.price,
            formData.weight,
            formData.imgUrl,
            formData.dimensions,
            formData.description
        )

        const response = await fetch("http://localhost:8081/products/",
            {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json;"
                },
                body: `{

                    "id": ${id},
                    "productName": "${formData.productName}",
                    "stock_Quantity": ${formData.stock_Quantity},
                    "category": "${formData.category}",
                    "brand": "${formData.brand}",
                    "price": ${formData.price},
                    "weight": ${formData.weight},
                    "imgUrl": "${formData.imgUrl}",
                    "dimensions": "${formData.dimensions}",
                    "description": "${formData.description}",
                    "currency" : "USD"
                    
                }`

            });
        const reply = await response.json();
        console.log(reply);
        window.location.href = '/shop';
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
                    <TextField id="outlined-basic" label="Product Name" variant="outlined" name='productName' required={true} value={formData.productName} onChange={handleInputChange} />
                    <TextField id="outlined-basic" label="Stock Quantity" variant="outlined" name='stock_Quantity' type='number' required={true} value={formData.stock_Quantity} onChange={handleInputChange} />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" name="Category" required={true}>category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formData.category}
                            label="category"
                            name="category"
                            onChange={handleInputChange}
                        >
                            <MenuItem value={'high'}>high-end</MenuItem>
                            <MenuItem value={'medium'}>medium</MenuItem>
                            <MenuItem value={'low'}>low budget</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField id="outlined-basic" label="Brand" variant="outlined" name='brand' required={true} value={formData.brand} onChange={handleInputChange} />


                    <TextField id="outlined-basic" label="price" variant="outlined" name='price' type='number' required={true} value={formData.price} onChange={handleInputChange} />
                    <TextField id="outlined-basic" label="weight" variant="outlined" name='weight' type='number' required={true} value={formData.weight} onChange={handleInputChange} />
                    <TextField id="outlined-basic" label="image URL" variant="outlined" name='imgUrl' required={true} value={formData.imgUrl} onChange={handleInputChange} />

                    <TextField id="outlined-basic" label="dimensions" variant="outlined" name="dimensions" required={true} value={formData.dimensions} onChange={handleInputChange} />
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        required={true}
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                    />

                </Box><br></br>

                <Button variant='primary' type="submit" className='custom-button8' >Edit Phone</Button>
            </form></center><br></br>
        </div>
    );
};

export default ProductUpdatePage;