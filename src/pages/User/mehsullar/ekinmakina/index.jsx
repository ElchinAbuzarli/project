import { Grid } from '@mui/material'
import ProductNav from '../productNav/productNav'
// import EkinNav from './ekinNav/ekin'
import ekinLogo from '../images/ekinmakinabg.png'

import './index.scss'
import { getAllProducts } from '../../../../api/ekinRequests'
import { useEffect, useState } from 'react'
import HashLoader from 'react-spinners/HashLoader'
const EKIN = () => {

  const [ekinProducts,setEkinProducts]=useState()
  const [loading, setLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    // Set loading to true when starting to fetch data
    setLoading(true);
    getAllProducts()
      .then((res) => {
        setEkinProducts(res);
      })
      .finally(() => {
        // Set loading to false when data fetching is complete
        setLoading(false);
      });
  }, [setEkinProducts]);

  return (
    <div>
      <ProductNav/>
      
      <img className='prod-logo' style={{marginTop:'100px', marginBottom:'100px'}} src={ekinLogo} alt="" />
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
        <div className='all-products'>
          <Grid style={{ marginBottom: '100px' }} className='grid' container spacing={{ xs: 12, sm: 6, md: 4, lg: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {ekinProducts &&
              ekinProducts.map((ekinProduct) => (
                <Grid key={ekinProduct._id} item lg={3}>
                  {/* EKIN Product Card */}
                  <a href={ekinProduct.link}>
                    <div className='ekin-card'>
                      {/* Product Image */}
                      <img className='ekin-prod' src={ekinProduct.imageURL} alt="" />
                      {/* Product Name */}
                      <p className='prod-name'><b><span>{ekinProduct.weight}</span> {ekinProduct.name}</b></p>
                    </div>
                  </a>
                </Grid>
              ))}
          </Grid>
        </div>
      )}
    </div>
  );
}
export default EKIN
