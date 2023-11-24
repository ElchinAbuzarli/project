import { Grid } from '@mui/material'
import ProductNav from '../productNav/productNav'
import './index.scss'
import karaduman from '../images/karadumanbg.png'
import { useEffect, useState } from 'react'
import { getAllKaradumanProducts } from '../../../../api/karadumanRequests'
import HashLoader from 'react-spinners/HashLoader'

const KaradumanKalip = () => {
  const [karadumanProducts,setKaradumanProducts]=useState()
  const [loading, setLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    // Set loading to true when starting to fetch data
    setLoading(true);
    getAllKaradumanProducts()
      .then((res) => {
        setKaradumanProducts(res);
      })
      .finally(() => {
        // Set loading to false when data fetching is complete
        setLoading(false);
      });
  }, [setKaradumanProducts]);

  return (
    <section>
      <ProductNav/>

      <img style={{marginBottom:'100px' ,marginTop:'100px'}} className='karaduman-logo' src={karaduman} alt="" />
      
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
            {karadumanProducts &&
              karadumanProducts.map((karadumanProduct) => (
                <Grid key={karadumanProduct._id} item lg={3}>
                  {/* Karaduman Product Card */}
                  <a href={karadumanProduct.link}>
                    <div className='ekin-card'>
                      {/* Product Image */}
                      <img className='ekin-prod' src={karadumanProduct.imageURL} alt="" />
                      {/* Product Name */}
                      <p className='prod-name'><b>{karadumanProduct.name}</b></p>
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

export default KaradumanKalip;