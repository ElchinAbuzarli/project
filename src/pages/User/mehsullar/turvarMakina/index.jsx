import { Grid } from '@mui/material'
import ProductNav from '../productNav/productNav'
import './index.scss'
import turvar from '../images/turvarmakina.png'
import { getAllTurVarProducts } from '../../../../api/turvarRequests'
import { useEffect, useState } from 'react'
import HashLoader from 'react-spinners/HashLoader'

const TurVarMakina = () => {
  const [turvarProducts,setTurvarProducts]=useState()
  const [loading, setLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    // Set loading to true when starting to fetch data
    setLoading(true);
    getAllTurVarProducts()
      .then((res) => {
        setTurvarProducts(res);
      })
      .finally(() => {
        // Set loading to false when data fetching is complete
        setLoading(false);
      });
  }, [setTurvarProducts]);


  return (
    <section>
      <ProductNav/>
      <img style={{marginBottom:'100px' ,marginTop:'100px'}} className='turvar-logo' src={turvar} alt="" />
      
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
            {turvarProducts &&
              turvarProducts.map((turvarProduct) => (
                <Grid key={turvarProduct._id} item lg={3}>
                  {/* TurVar Makina Product Card */}
                  <a href={turvarProduct.link}>
                    <div className='ekin-card'>
                      {/* Product Image */}
                      <img className='ekin-prod' src={turvarProduct.imageURL} alt="" />
                      {/* Product Name */}
                      <p className='prod-name'><b>{turvarProduct.name}</b></p>
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

export default TurVarMakina;