import { Grid } from '@mui/material'
import ProductNav from '../productNav/productNav'
import './index.scss'
import osmancubuk from '../images/osmancubuk-logo.png'
import { getAllOsmanCubukProducts } from '../../../../api/osmancubukRequests'
import { useEffect, useState } from 'react'
import HashLoader from 'react-spinners/HashLoader'

const OsmanCubuk = () => {

  const [osmanCubukProducts,setOsmanCubukProducts]=useState()
  const [loading, setLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    // Set loading to true when starting to fetch data
    setLoading(true);
    getAllOsmanCubukProducts()
      .then((res) => {
        setOsmanCubukProducts(res);
      })
      .finally(() => {
        // Set loading to false when data fetching is complete
        setLoading(false);
      });
  }, [setOsmanCubukProducts]);

  return (
    <section>
      <ProductNav/>
      
      <img style={{marginBottom:'100px' ,marginTop:'100px'}} className='osman-logo' src={osmancubuk} alt="" />
      
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
            {osmanCubukProducts &&
              osmanCubukProducts.map((osmanCubukProduct) => (
                <Grid key={osmanCubukProduct._id} item lg={3}>
                  {/* Osman Cubuk Product Card */}
                  <a href={osmanCubukProduct.link}>
                    <div className='ekin-card'>
                      {/* Product Image */}
                      <img style={{ overflow: 'hidden' }} className='ekin-prod' src={osmanCubukProduct.imageURL} alt="" />
                      {/* Product Title */}
                      <p style={{ textAlign: 'center' }}>{osmanCubukProduct.title}</p>
                      {/* Product Name */}
                      <p className='prod-name'><b>{osmanCubukProduct.name}</b></p>
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

export default OsmanCubuk;