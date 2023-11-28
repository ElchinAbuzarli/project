import ProductNav from '../productNav/productNav'
import './index.scss'
import serimakina from '../images/serimakinabg.png'
import { Grid } from '@mui/material'
import { getAllSeriProducts } from '../../../../api/seriRequests'
import { useEffect, useState } from 'react'
import HashLoader from 'react-spinners/HashLoader'

const SeriMakina = () => {
  const [seriProducts,setSeriProducts]=useState()
  const [loading, setLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    // Set loading to true when starting to fetch data
    setLoading(true);
    getAllSeriProducts()
      .then((res) => {
        setSeriProducts(res);
      })
      .finally(() => {
        // Set loading to false when data fetching is complete
        setLoading(false);
      });
  }, [setSeriProducts]);
  return (
    <section>
      <ProductNav/>
      <img style={{marginBottom:'100px' ,marginTop:'100px'}} className='seri-logo' src={serimakina} alt="" />
      
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
            {seriProducts &&
              seriProducts.map((seriProduct) => (
                <Grid key={seriProduct._id} item lg={3}>
                  {/* Seri Makina Product Card */}
                  <a href={seriProduct.link}>
                    <div className='ekin-card'>
                      {/* Product Image */}
                      <img className='ekin-prod' src={seriProduct.imageURL} alt="" />
                      {/* Product Name */}
                      <p className='prod-name'><b>{seriProduct.name}</b></p>
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

export default SeriMakina;