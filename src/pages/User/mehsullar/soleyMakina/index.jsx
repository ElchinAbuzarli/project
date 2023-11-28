import { Grid } from '@mui/material'
import ProductNav from '../productNav/productNav'
import './index.scss'
import soleymakina from '../images/SOLEY-new.jpg'
import { getAllSoleyProducts } from '../../../../api/soleyRequests'
import { useEffect, useState } from 'react'
import HashLoader from 'react-spinners/HashLoader'

const SoleyMakina = () => {
  const [soleyProducts,setSoleyProducts]=useState()
  const [loading, setLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    // Set loading to true when starting to fetch data
    setLoading(true);
    getAllSoleyProducts()
      .then((res) => {
        setSoleyProducts(res);
      })
      .finally(() => {
        // Set loading to false when data fetching is complete
        setLoading(false);
      });
  }, [setSoleyProducts]);
  return (
    <section>
      <ProductNav/>

      
      <img style={{marginBottom:'100px' ,marginTop:'100px'}} className='soley-logo' src={soleymakina} alt="" />
      
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
            {soleyProducts &&
              soleyProducts.map((soleyProduct) => (
                <Grid key={soleyProduct._id} item lg={3}>
                  {/* Soley Makina Product Card */}
                  <a href={soleyProduct.link}>
                    <div className='ekin-card'>
                      {/* Product Image */}
                      <img className='ekin-prod' src={soleyProduct.imageURL} alt="" />
                      {/* Product Name */}
                      <p className='prod-name'><b>{soleyProduct.name}</b></p>
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

export default SoleyMakina;
