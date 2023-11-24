import { Grid } from '@mui/material'
import ProductNav from '../productNav/productNav'
import './index.scss'
import ilerimakina from '../images/ilerimakina.png'
import { getAllIleriProducts } from '../../../../api/ileriRequests'
import { useEffect, useState } from 'react'
import HashLoader from 'react-spinners/HashLoader'

const IleriMakina = () => {
  const [ileriProducts,setIleriProducts]=useState()
  const [loading, setLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    // Set loading to true when starting to fetch data
    setLoading(true);
    getAllIleriProducts()
      .then((res) => {
        setIleriProducts(res);
      })
      .finally(() => {
        // Set loading to false when data fetching is complete
        setLoading(false);
      });
  }, [setIleriProducts]);
  return (
    <section>
      <ProductNav/>

      <img style={{marginBottom:'100px' ,marginTop:'100px'}} className='ileri-logo' src={ilerimakina} alt="" />
      
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
        <div className='all-products' style={{ marginBottom: '100px' }}>
          <Grid className='grid' container spacing={{ xs: 12, sm: 6, md: 4, lg: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {ileriProducts &&
              ileriProducts.map((ileriProduct) => (
                <Grid key={ileriProduct._id} item lg={3}>
                  {/* Ileri Product Card */}
                  <a href={ileriProduct.link}>
                    <div className='ekin-card'>
                      {/* Product Image */}
                      <img className='ekin-prod' src={ileriProduct.imageURL} alt="" />
                      {/* Product Model */}
                      <p className='prod-name'><b>{ileriProduct.model} </b></p>
                      {/* Product Name */}
                      <p style={{ textAlign: 'center', fontSize: '18px' }}>{ileriProduct.name}</p>
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

export default IleriMakina;