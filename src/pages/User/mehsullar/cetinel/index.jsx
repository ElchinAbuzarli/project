import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import ProductNav from '../productNav/productNav';
import './index.scss';
import cetinel from '../images/cetinel.png';
import { getAllCetinelProducts } from '../../../../api/cetinelRequests';

import HashLoader from "react-spinners/HashLoader";

const CETINEL = () => {
  const [cetinelProducts, setCetinelProducts] = useState(null); // Initialize cetinelProducts as null
  const [loading, setLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    // Set loading to true when starting to fetch data
    setLoading(true);
    getAllCetinelProducts()
      .then((res) => {
        setCetinelProducts(res);
      })
      .finally(() => {
        // Set loading to false when data fetching is complete
        setLoading(false);
      });
  }, [setCetinelProducts]);

  return (
    <section>
      <ProductNav />
      <img style={{ marginBottom: '100px', marginTop: '100px' }} className='cetinel-logo' src={cetinel} alt="" />

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
            {cetinelProducts &&
              cetinelProducts.map((cetinelProduct) => (
                <Grid key={cetinelProduct._id} item lg={3}>
                  {/* CETINEL Product Card */}
                  <a href={cetinelProduct.link}>
                    <div className='ekin-card'>
                      {/* Product Image */}
                      <img className='ekin-prod' src={cetinelProduct.imageURL} alt="" />
                      {/* Product Name */}
                      <p className='prod-name'><b>{cetinelProduct.name}</b></p>
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

export default CETINEL;
