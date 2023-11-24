import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import ProductNav from '../productNav/productNav';
import './index.scss';
import aweta from '../images/awetalogobg.png';
import { getAllAwetaProducts } from '../../../../api/awetaRequests';

import HashLoader from "react-spinners/HashLoader";
const AWETA = () => {
  const [awetaProducts, setAwetaProducts] = useState(null); // Initialize awetaProducts as null
  const [loading, setLoading] = useState(true); // Introduce loading state

  
  useEffect(() => {
    // Set loading to true when starting to fetch data
    setLoading(true);
    getAllAwetaProducts()
      .then((res) => {
        setAwetaProducts(res);
      })
      .finally(() => {
        // Set loading to false when data fetching is complete
        setLoading(false);
      });
  }, [setAwetaProducts]);

  return (
    <section>
      <ProductNav />
      <img style={{ marginBottom: '100px', marginTop: '100px' }} className='aweta-logo' src={aweta} alt="" />

      <div className='all-products' style={{ marginBottom: '100px' }}>
        {/* Display loading message or spinner when data is loading */}
        {loading ? (
                <HashLoader
                className='loading'
                color={"#5DDAC9"}
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
        ) : (
          <Grid className='grid' container spacing={{ xs: 12, sm: 6, md: 4, lg: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {awetaProducts &&
              awetaProducts.map((awetaProduct) => (
                <Grid key={awetaProduct._id} item lg={3}>
                  {/* AWETA Product Card */}
                  <a href={awetaProduct.link}>
                    <div className='ekin-card'>
                      {/* Product Image */}
                      <img className='ekin-prod' src={awetaProduct.imageURL} alt="" />
                      {/* Product Name */}
                      <p className='prod-name'><b>{awetaProduct.name}</b></p>
                    </div>
                  </a>
                </Grid>
              ))}
          </Grid>
        )}
      </div>
    </section>
  );
}

export default AWETA;
