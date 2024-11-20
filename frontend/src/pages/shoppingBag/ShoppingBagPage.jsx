import React, {useContext} from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import MeasurementsForm from './MeasurementsForm'
import { ShoppingBagContext } from "../../context/ShoppingBagContext";
import DeleteIcon from '@mui/icons-material/Delete';

const ShoppingBagPage = () => {
  const { selectedProducts, removeProduct } = useContext(ShoppingBagContext);
  // const location = useLocation();  
  // const { selectedProducts } = location.state || { selectedProducts: [] };  

  const handleRemoveProduct = (product) => {
    removeProduct(product);
  }; 

  return (
    <>
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'Mandali, sans-serif', 
          fontSize: 60,
          fontWeight: 200,                   
          color: 'white',
          textShadow: '2px 2px 8px rgba(224, 8, 69, 0.4)',
          textAlign: 'center',
          mt:1,
          mb:2,
          pb:1,
          borderBottom: '9px white solid',
          borderTop: '4px white solid',
          backgroundColor:'#f9d7e4'
        }}
      >
        Shopping Bag
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, 
          padding: 6,
          // border:1,
          justifyContent: 'space-around',
        }}
      >
        {/* Products */}
        <Box sx={{  width: 300, margin: 'auto', flex: 0.5, border:3, borderRadius:1, borderColor: 'white',}}>

          {selectedProducts.length === 0 ? (
            <Typography sx={{ margin: 2, textAlign:'center'}}>Your shopping bag is empty.</Typography>
          ) : (
            <Box sx={{ padding:2 }}>
              {selectedProducts.map((product, index) => (

                <Box key={index} sx={{ display: 'flex', alignItems: 'center', borderBottom: 2, borderColor:'white',padding:2 }}>
                  <img src={product.image} alt={product.name} style={{ width: 80, height: 80, marginRight: 10 }} />
                  <Typography sx={{ flex: 1 }}>
                    {product.name} - {product.price} €
                  </Typography>

                  <button 
                    onClick={() => handleRemoveProduct(product)} 
                    style={{ 
                      border: 'none', 
                      background: 'none', 
                      cursor: 'pointer', 
                      display: 'flex', 
                      alignItems: 'center' 
                    }}
                  >
                    <DeleteIcon style={{ color: 'grey', fontSize: '20px' }} />
                  </button>

                </Box>
              ))}
               
            </Box>
          )}
        </Box>

        <Box sx={{ flex: 0.5, mt:4 }}>
           <MeasurementsForm/>
        </Box>

      </Box>
    </>
  );
};

export default ShoppingBagPage;
