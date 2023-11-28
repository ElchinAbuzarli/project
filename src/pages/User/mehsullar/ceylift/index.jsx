import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import ProductNav from '../productNav/productNav';
import './index.scss';
import ceylift from '../images/CEYLIFT_logo.png';
import { getAllCeyliftProducts } from '../../../../api/ceyliftRequests';
import HashLoader from 'react-spinners/HashLoader';

const CEYLIFT = () => {
  const [ceyliftProducts, setCeyliftProducts] = useState(null); // Initialize ceyliftProducts as null
  const [loading, setLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    // Set loading to true when starting to fetch data
    setLoading(true);
    getAllCeyliftProducts()
      .then((res) => {
        setCeyliftProducts(res);
      })
      .finally(() => {
        // Set loading to false when data fetching is complete
        setLoading(false);
      });
  }, [setCeyliftProducts]);

  return (
    <section>
      <ProductNav />
      <img style={{ marginBottom: '100px', marginTop: '100px' }} className='ceylift-logo' src={ceylift} alt="" />

      <div className='all-products' style={{ marginBottom: '100px' }}>
        {/* Display loading message or spinner when data is loading */}
        {loading ? (
                <HashLoader
                className='loading'
                color={"#5DDAC9"}
                loading={loading}
                size={80}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
        ) : (
          <Grid className='grid' container spacing={{ xs: 12, sm: 6, md: 4, lg: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {ceyliftProducts &&
              ceyliftProducts.map((ceyliftProduct) => (
                <Grid key={ceyliftProduct._id} item lg={3}>
                  {/* CEYLIFT Product Card */}
                  <a href={ceyliftProduct.link}>
                    <div className='ceylift-card'>
                      {/* Product Image */}
                      <img className='ekin-prod' style={{ width: '100%' }} src={ceyliftProduct.imageURL} alt="" />
                      {/* Product Title */}
                      <p className='ceylift-title'>{ceyliftProduct.title}</p>
                      {/* Product Name */}
                      <p className='ceylift-name'><b>{ceyliftProduct.name} </b></p>
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

export default CEYLIFT;
