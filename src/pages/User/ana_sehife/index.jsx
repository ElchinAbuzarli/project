import { Helmet } from 'react-helmet'
import {Link} from 'react-router-dom'
import {  Button, Grid } from '@mui/material';
import './index.scss'
import image1 from './images/aweta.jpg'
import image2 from './images/ekin-makina.png'
import image3 from './images/soley.png'
import image4 from './images/seri-makina.png'
import image5 from './images/karaduman.png'
import image7 from './images/kartonkosebend.png'
import image8 from './images/plastikkosebend.png'
import image9 from './images/seffaf.png'
import image10 from './images/kartonkutu.png'
import image11 from './images/kartonlist.png'
import image12 from './images/cember.png'
import image13 from './images/unlu.png'
import Map from './images/map-image.png'
import EkinLogo from'./images/ekinmakinabg.png'
import Aweta from './images/awetalogobg.png' 
import Karaduman from './images/karadumanbg.png'
import SeriLogo from './images/serimakinabg.png'
import Soley from './images/soley-1.jpg'
import LALETECH from './images/Logo.png'
import Ekin120 from './images/ekin-120-orion.jpg'
import Avocado from './images/sogutma.png'
import Dizel from './images/dizel.png'

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSitemap,faWrench,faQrcode,faGears, faEye } from '@fortawesome/free-solid-svg-icons'


// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import './styles.css';
import { Autoplay,EffectFade,Pagination } from 'swiper/modules';


const Home = () => {
  return (
    <section>

      <Helmet>
       <meta charset="utf-8" />
       <title>LALETECH MMC | Mühəndislik Şirkəti</title>
      </Helmet>

      {/* SWIPER */}
      <div className='swiper'>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade,  Pagination]}
        className="mySwiper"
      >
        {/* SLIDE 1 */}
        <SwiperSlide>
          <div className='text-div'>
            {/* <img className='laletech' src={Laletech} alt="" /> */}
            <p className='slide-text'>Daim daha yüksək standartlara can atmaq, dəyişən tələblərə cavab vermək və bazara çıxma müddətini daha da azaltmaq məqsədimizdir</p>
          </div>

          <div className='slide-button'>
          <Link to='/products/aweta'>
            <button className='prod-but-1'><FontAwesomeIcon icon={faEye} />MƏHSULA BAX</button>
          </Link>
          </div>

          <div className='swiper-div'>
            <img src={image1} alt="" />
          <img className='aweta' src={Aweta} alt="" />
          </div>
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <div className='text-div'>
           <p className='slide-text' id='slide-text-2'>

             <br />
             <br />
              sizin üçün ən sürətli və ən etibarlı şəkildə həllər istehsal etmək üçün çalışırıq. Öz sahələrində mütəxəssis olan mühəndis, texnik və texniki işçilərimiz daim özlərini təkmilləşdirir, ən son texnologiyaların takibcisidir
           </p>
          </div>

          <div className='slide-button' id='sb-2'>
          <Link to='/products/ekin-makina'>
          <button className='prod-but-1'><FontAwesomeIcon icon={faEye} />MƏHSULA BAX</button>
          </Link>
          </div>
          
          <div className='swiper-div-2'>
          <img className='ekin-makina-swp' src={image2} alt="" />
          <img className='ekin-logo-swp'  src={EkinLogo} alt="" />
          </div>
        </SwiperSlide>

        {/* SLIDE 3 */}
        <SwiperSlide>
        <div className='text-div' id='slide-3'>
            <p className='slide-text' id='slide-text-3'>
              <span className='slide-title'>
                 Perforeli Kese Kağıdı Makinası
                 
                 Perforated Paper Bag Machine</span>
              </p>
              
              <ul className='slide-text'>
                <li>Otomatik Kullanım</li>
                <li>Hızlı Üretim</li>
                <li>Pencere Filmi Takma</li>
                <li>Servo Motor</li>
                <li>PLC Ekran</li>
                <li>Max Dk 600</li>                        
              </ul>                           
          </div>

          <div className='slide-button' id='slide-button-3'>
          <Link to='/products/soley-makina'>
          <button className='prod-but-1'><FontAwesomeIcon icon={faEye} />MƏHSULA BAX</button>
          </Link>
          </div>

          <div  className='swiper-div-3'>
            <img src={image3} alt="" />
            <img src={Soley} alt="" />
          </div>
        </SwiperSlide>

        {/* SLIDE 4 */}
        <SwiperSlide>
          <div className='text-div'>
            <p className='slide-text' id='slide-text-4'>Təcrübəli işçi heyəti, satış sonrası xidmət və xidmətdə məsuliyyəti keyfiyyəti ilə dünya miqyasında böyük uğurlar qazanmışdır</p>
          </div>

          <div className='slide-button' id='sb-4'>
          <Link to='/products/seri-makina'>
          <button className='prod-but-1'><FontAwesomeIcon icon={faEye} />MƏHSULA BAX</button>
          </Link>
          </div>

          <div  className='swiper-div-4'>
            <img src={image4} alt="" />
            <img src={SeriLogo} alt="" />
            
          </div>

        </SwiperSlide>

        {/* SLIDE 5 */}
        <SwiperSlide>
          <div className='text-div'>
            <p className='slide-text'>
            <br />
            <br />
            sektorun gözləntilərinə uyğun, yüksək keyfiyyət standartlarında və müştəri ehtiyaclarına uyğun xüsusi istehsallar həyata keçirir</p>
          </div>

          <div className='slide-button' id='sb-3'>
          <Link to='/products/karaduman-kalip'>
          <button className='prod-but-1'><FontAwesomeIcon icon={faEye} />MƏHSULA BAX</button>
          </Link>
          </div>

          <div  className='swiper-div-5'>
          <img src={image5} alt=""/>
          <img src={Karaduman} alt="" />
          </div>
        </SwiperSlide>

        {/* SLIDE 6 */}
        <SwiperSlide>
          <div className='text-div'>
            
          </div >
          <div className='slide-button'>
          <Link to='/products/elave-mehsullar'>
          <button className='prod-but-1'><FontAwesomeIcon icon={faEye} />MƏHSULA BAX</button>
          </Link>
          </div>
          <div  className='swiper-div-6'>
          <img src={LALETECH} alt=""/>
          <img src={image7} alt='' />
          <img src={image8} alt='' />
          <img src={image9} alt='' />
          <img src={image10} alt='' />
          <img src={image11} alt='' />
          <img src={image12} alt='' />
          <img src={image13} alt='' /> 
          </div>
        </SwiperSlide>                
      </Swiper>
      </div>

      {/* INFO */}
      <div className='ltech-info' style={{display:'flex', flexDirection:'column'}}>
        <div style={{textAlign:'center'}}>
        <h1 className='product-category'>Bizi Seçmək üçün Dörd Səbəb</h1>
          <div className='line' style={{margin:' 25px auto'}}></div>
          <span className='product-category-txt'>Haqqımızda ətraflı məlumat üçün bu səhifəyə daxil ola bilərsiniz.</span>

        </div>
      <Grid className='grid' container spacing={{ xs: 12, sm:6, md:4, lg:3 }}>
     
       <Grid item lg={3}>
       <div className='info-content'>
        <FontAwesomeIcon style={{padding:'30px 25px'}} className='fa-info' icon={faSitemap}/> 
        <h3 className='info-title'>MÜTƏXƏSSİS HEYƏTİ</h3>
        <p className='info-text'>LALETECH MMC Expert 4 mühəndis və 10 texniki xidmət personalı ilə xidmət göstərir.</p>
        </div>
       </Grid>

       <Grid item lg={3}>
         <div className='info-content'>
           <FontAwesomeIcon className='fa-info' icon={faWrench}/> 
           <h3 className='info-title'>TEXNİKİ SERVİS</h3>
           <p className='info-text'>LALETCH MMC təcrübəli  mütəxəssis heyəti ilə  24 saat aktiv texniki, mobil xidmət göstərə bilər.</p>
         </div>
       </Grid>

       <Grid item lg={3}>
         <div className='info-content'>
           <FontAwesomeIcon style={{padding:'25px 30px'}} className='fa-info' icon={faQrcode}/> 
           <h3 className='info-title'style={{'textAlign':'center'}}>STOKTAN MƏHSUL TƏSLİMİ</h3>
           <p className='info-text'>LALETECH MMC inkişaf edən güclü məhsul çeşidi sayəsində məhsulları anbardan təhvil verir.</p>
         </div>
       </Grid>  

       <Grid item lg={3}>
         <div className='info-content'>
           <FontAwesomeIcon style={{padding:'25px 20px'}} className='fa-info' icon={faGears}/> 
           <h3 className='info-title'style={{'textAlign':'center'}}>KÖMƏKÇİ QURĞULARIN  TƏMİNİ</h3>
           <p className='info-text'>LALETECH MMC idxal etdiyi bütün makina qrupları üçün böyük ehtiyat hissələri ehtiyatına malikdir.</p>
         </div>
       </Grid>

     </Grid>
     <Link style={{margin:"50px 0"}} onClick={()=>window.scrollTo(0, 0)} to='about' className='all-products-1'>HAQQIMIZDA</Link>

      </div>

      <div className='map-parent'>
        <div className='map-div'>
          <div>
          <h1 className='map-title'>LALETECH TƏRƏFİNDƏN TƏHVİL VERİLƏN AVADANLIQLAR
          <br />
          HAZIRDA AZƏRBAYCANIN BİR ÇOX BÖLGƏSİNDƏ FƏALİYYƏT GÖSTƏRMƏKDƏDİR
        </h1>
          </div>

          <div className='map'>

        <img className='map-image' src={Map} alt="MAP" />
        <Link onClick={()=>window.scrollTo(0, 0)} to='projects' className='all-products-2'>Layihələrimiz</Link>

      </div>
        </div>
        <div style={{textAlign:'center'}}>
          <h1 className='product-category'>Geniş Məhsul Çeşidi</h1>
          <span className='product-category-txt'>Müxtəlif proseslər və sektorlar üçün müasir dizaynlı  makinalar...</span>
          <div className='line' style={{margin:' 25px auto'}}></div>

  <div className='div-grid-2'>
        

   <Grid  style={{display:'flex',justifyContent:'center', alignItems:'center'}}container spacing={{ xs: 12, sm: 6, md: 4, lg: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>


         {/* CARD 1 */}

         <Grid  item lg={3}>
         <Link onClick={()=>window.scrollTo(0, 0)} className='dropLink' to='/products/ekin-makina'>
           {/* Reference Card */}
           <div className='card-home'>
             {/* Image */}
             <div><img className='reference-image-home' src={Ekin120} alt="" /></div>
             {/* Card Text */}
             <div className='card-txt-home'>
               <div><p className='card-title-home'>EKIN MAKINA</p></div>
             </div>
           </div>
         </Link>
         </Grid>

        
         {/* CARD 2 */}
         <Grid  item lg={3}>
         <Link onClick={()=>window.scrollTo(0, 0)} className='dropLink' to='/products/atlasics'>
         <div className='card-home'>
             {/* Image */}
             <div><img className='reference-image-home' style={{padding:'40px 0 0 0'}} src={Avocado} alt="" /></div>
             {/* Card Text */}
             <div className='card-txt-home'>
               <div><p className='card-title-home'>LALETECH SOGUTMA SISTEMLERI</p></div>
             </div>
           </div>
         </Link>
         </Grid>



          {/* CARD 3 */}
         <Grid  item lg={3}>
         <Link onClick={()=>window.scrollTo(0, 0)} className='dropLink' to='/products/soley-makina'>
         <div className='card-home'>
             {/* Image */}
             <div><img className='reference-image-home' src={image3} alt="" /></div>
             {/* Card Text */}
             <div className='card-txt-home'>
               <div><p className='card-title-home'>SOLEY KAĞIZ PAKET MAKİNA</p></div>
             </div>
           </div>
         </Link>
         </Grid>



          {/* CARD 4 */}
         <Grid  item lg={3}>
         <Link onClick={()=>window.scrollTo(0, 0)} className='dropLink' to='/products/elave-mehsullar'>
         <div className='card-home'>
             {/* Image */}
             <div><img className='reference-image-home' src={image13} alt="" /></div>
             {/* Card Text */}
             <div className='card-txt-home'>
               <div><p className='card-title-home'> ƏLAVƏ MƏHSUL SATIŞI</p></div>
             </div>
           </div>

         </Link>
         </Grid>

</Grid>

</div>
<Link onClick={()=>window.scrollTo(0, 0)} to='products/ekin-makina' className='all-products-1'>Bütün Məhsulları Göstər</Link>

        </div>
      </div>

    </section>
  )
}

export default Home
