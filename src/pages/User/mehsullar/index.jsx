import './responsive.scss'
import { Helmet } from 'react-helmet'
import EKIN from './ekinmakina'

const Products = () => {
  return (
    <section className='section-products'>
     <Helmet>
       <meta charset="utf-8" />
       <title> Bütün Məhsullar-LALETECH MMC | LALETECH MMC | Mühəndislik Şirkəti</title>
     </Helmet>

      <div>
        <EKIN/>
      </div>
    </section>
  )
}

export default Products
