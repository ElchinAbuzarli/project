import { Grid } from '@mui/material'
import ProductNav from '../productNav/productNav'
import './index.scss'
import haknersan from '../images/haknersan.png'
import { getAllHaknersanProducts } from '../../../../api/haknersanRequests'
import { useEffect, useState } from 'react'
import HashLoader from 'react-spinners/HashLoader'

const HAKNERSAN = () => {

  const [haknersanProducts,setHaknersanProducts]=useState()
  const [loading, setLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    // Set loading to true when starting to fetch data
    setLoading(true);
    getAllHaknersanProducts()
      .then((res) => {
        setHaknersanProducts(res);
      })
      .finally(() => {
        // Set loading to false when data fetching is complete
        setLoading(false);
      });
  }, [setHaknersanProducts]);

  return (
    <section>
      <ProductNav/>

      <img style={{marginBottom:'100px' ,marginTop:'100px'}} className='haknersan-logo' src={haknersan} alt="" />
      
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
        <div className='all-products' style={{ marginBottom: '100px' }}>
          <Grid className='grid' container spacing={{ xs: 12, sm: 6, md: 4, lg: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {haknersanProducts &&
              haknersanProducts.map((haknersanProduct) => (
                <Grid key={haknersanProduct._id} item lg={3}>
                  {/* Haknersan Product Card */}
                  <a href={haknersanProduct.link}>
                    <div className='ekin-card'>
                      {/* Product Image */}
                      <img className='ekin-prod' src={haknersanProduct.imageURL} alt="" />
                      {/* Product Name */}
                      <p className='prod-name'><b>{haknersanProduct.name}</b></p>
                    </div>
                  </a>
                </Grid>
              ))}
          </Grid>
        </div>
      )}
    </section>
  );
}

export default HAKNERSAN;