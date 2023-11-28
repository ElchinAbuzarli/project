import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import ProductNav from '../productNav/productNav';
import './index.scss';
import { getAllOtherProducts } from '../../../../api/otherRequests';
import HashLoader from 'react-spinners/HashLoader';

const ElaveMehsullar = () => {
  const [otherProducts, setOtherProducts] = useState(null); // Initialize otherProducts as null
  const [loading, setLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    // Set loading to true when starting to fetch data
    setLoading(true);
    getAllOtherProducts()
      .then((res) => {
        setOtherProducts(res);
      })
      .finally(() => {
        // Set loading to false when data fetching is complete
        setLoading(false);
      });
  }, [setOtherProducts]);

  return (
    <section>
      <ProductNav />
      
      <div className='other-title'><h1>XAMMAL VƏ ƏLAVƏ MƏHSULLAR</h1></div>

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
        <Grid style={{ marginTop: '100px', marginBottom: '100px' }} className='grid' container spacing={{ xs: 12, sm: 6, md: 4, lg: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {otherProducts &&
            otherProducts.map((otherProduct) => (
              <Grid key={otherProduct._id} item lg={3}>
                {/* Other Product Card */}
                <div className='ekin-card'>
                  {/* Product Image */}
                  <img className='ekin-prod' src={otherProduct.imageURL} alt={otherProduct.name} />
                  {/* Product Name */}
                  <p className='prod-name'><b>{otherProduct.name} </b></p>
                </div>
              </Grid>
            ))}
        </Grid>
      )}
    </section>
  );
}

export default ElaveMehsullar;
