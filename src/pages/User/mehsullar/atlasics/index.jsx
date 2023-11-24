import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import ProductNav from '../productNav/productNav';
import './index.scss';
import atlas from '../images/laletechsogutma.png';
import { getAllAtlasProducts } from '../../../../api/atlasicsRequests';

import HashLoader from "react-spinners/HashLoader";

const ATLASICS = () => {
  const [atlasProducts, setAtlasProducts] = useState(null); // Initialize atlasProducts as null
  const [loading, setLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    // Set loading to true when starting to fetch data
    setLoading(true);
    getAllAtlasProducts()
      .then((res) => {
        setAtlasProducts(res);
      })
      .finally(() => {
        // Set loading to false when data fetching is complete
        setLoading(false);
      });
  }, [setAtlasProducts]);

  return (
    <section>
      <ProductNav />
      <img style={{ marginBottom: '100px', marginTop: '100px' }} className='atlasics-logo' src={atlas} alt="" />

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
            {atlasProducts &&
              atlasProducts.map((atlasProduct) => (
                <Grid key={atlasProduct._id} item lg={3}>
                  {/* Atlas Product Card */}
                  <div className='atlas-card'>
                    {/* Product Image */}
                    <img className='ekin-prod' src={atlasProduct.imageURL} alt="" />
                    {/* Product Name */}
                    <p className='prod-name'><b>{atlasProduct.name} </b></p>
                  </div>
                </Grid>
              ))}
          </Grid>
        )}
      </div>
    </section>
  );
}

export default ATLASICS;
