import { Grid } from '@mui/material'
import ProductNav from '../productNav/productNav'
import './index.scss'
import ceylift from '../images/CEYLIFT_logo.png'
import { useEffect, useState } from 'react'
import { getAllCeyliftProducts } from '../../../../api/ceyliftRequests'

const CEYLIFT = () => {
  const [ceyliftProducts,setCeyliftProducts]=useState()
  useEffect(()=>{
    getAllCeyliftProducts().then(res=>{
      setCeyliftProducts(res);
    })
  },[setCeyliftProducts])

  return (
    <section>
      <ProductNav/>

      <img style={{marginBottom:'100px' ,marginTop:'100px'}} className='ceylift-logo' src={ceylift} alt="" />
      
      <div className='all-products' style={{marginBottom:'100px'}}>
        <Grid className='grid' container spacing={{ xs: 12, sm:6, md:4, lg:3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {ceyliftProducts && ceyliftProducts.map((ceyliftProduct)=>{
            return <Grid key={ceyliftProduct._id} item lg={3}>
          <a href={ceyliftProduct.link}>
          <div className='ceylift-card'>
            <img className='ekin-prod' style={{width:'100%'}} src={ceyliftProduct.imageURL} alt="" />
            <p className='ceylift-title'>{ceyliftProduct.title}</p>
            <p className='ceylift-name'><b>{ceyliftProduct.name} </b></p>
          </div>
          </a>
         </Grid>
         })}
         
        </Grid>
      </div>

    </section>
  )
}

export default CEYLIFT
