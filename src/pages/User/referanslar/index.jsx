import './index.scss'
import { Helmet } from "react-helmet"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAllReferences } from '../../../api/referenceRequest';

import HashLoader from "react-spinners/HashLoader";

const References = () => {
  const [references,setReferences]=useState()

  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    // Set loading to true when starting to fetch data
    setLoading(true);
    getAllReferences()
      .then((res) => {
        setReferences(res);
      })
      .finally(() => {
        // Set loading to false when data fetching is complete
        setLoading(false);
      });
  }, [setReferences]);
  return (
    <section className="section-references">
      <Helmet>
       <meta charset="utf-8" />
       <title> Referanslar-LALETECH MMC | LALETECH MMC | Mühəndislik Şirkəti</title>
       </Helmet>

       <div className='partner-title'>
       <h1 className='partners'>PARTNYORLARIMIZ</h1>
       </div>
       

       <div className='div-grid'>
        
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
          <Grid  style={{display:'flex',justifyContent:'center', alignItems:'center'}}container spacing={{ xs: 12, sm: 6, md: 4, lg: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {references &&
              references.map((reference) => (
                <Grid key={reference._id} item lg={3}>
                  {/* Reference Card */}
                  <div className='card'>
                    {/* Image */}
                    <div><img className='reference-image' src={reference.imageURL} alt="" /></div>
                    {/* Card Text */}
                    <div className='card-txt'>
                      <div><p className='card-title'>{reference.name}</p></div>
                      <div><p className='card-content'>{reference.content}</p></div>
                    </div>
                    {/* Divider Line */}
                    <div className='line-ref'></div>
                    {/* Link Button */}
                    <div className='buton-div'><a href={reference.link}><Button><MoreHorizIcon /> DAHA ÇOX</Button></a></div>
                  </div>
                </Grid>
              ))}

      </Grid>
      )}

       </div>
    </section>
  )
}

export default References
