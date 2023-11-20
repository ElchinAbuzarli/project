import './index.scss'
import { Helmet } from 'react-helmet'
import AqroInvest from './images/aqroinvest.jpg'
import CennetAqro from './images/banan.png'
import Bio from './images/biommc.jpg'
import TovuzAqro from './images/TovuzAqropark.jpg'
import Naxcivan from './images/naxcivan.png'
import Azersun from './images/azersun.png'
import Fiber from  './images/Fiber.jpg'
import Serur from './images/serur.jpg'
import Miran from './images/miran.jpg'
import Siyezen from './images/siyezen.png'
import Aweta from './assets/Aweta.mp4'
import Ekin from './assets/Ekin.mp4'
const Projects = () => {
  return (
    <section>
      <Helmet>
       <meta charset="utf-8" />
       <title> Layihələrimiz-LALETECH MMC | LALETECH MMC | Mühəndislik Şirkəti</title>
       </Helmet>

       <div className='project-title'>
        <h1>LAYİHƏLƏRİMİZ</h1>
       </div>

       <div>
        <p className='project-content'>
        Müştərilərimizlə əməkdaşlıq edərək, biz kənd təsərrüfatını daha davamlı, müxtəlif və daha müasir, yüksək keyfiyyətli texnologiya ilə təmin edə bilərik.
         Biz müştərilərin ehtiyaclarını başa düşürük, qabaqcıl texnologiya ilə cavab veririk və həmişə müştərilərimizin rifahını nəzərə alırıq.
         <br />
         Bəzi layihələrimizə nəzər salın:
        </p>
       </div>

        {/* PROJECTS */}
       <div className='all-projects' style={{margin:'100px 0 100px 0'}}>

        {/* PROJECT 1 */}
        <div className='projects' id='project-1'>
          <div><img className='project-image' id='project-image-1' src={AqroInvest} alt="" /></div>
          <div  className='projects-content'>
            <h4 className='projects-title'>AQRO INVEST & ISTEHSALAT MMC</h4>
            <h1>KARTON QUTU FABRIKININ TAM QURULMASI</h1>
            <p>Azərbaycanda Aqro invest şirkətində dünya standartlarına cavab verən <b> 2.15 </b> enində <b> BÜZMƏLİ KARTON MAKİNASINI </b> uğurla Çalışdıraraq təhvil verdik</p>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className='projects' id='project-2'>
          <div className='projects-content'>
            <h4>CƏNNƏT AQRO MMC.</h4>
            <h1>Banan Saraltma Soyuducusunun Qurulması.</h1>
            <p>Azərbaycanda Cənnət Aqro MMC şirkətində dünya standartlarına cavab verən <b> BANAN SARALTMA SOYUDUCUSUNU </b> uğurla Çalışdıraraq təhvil verdik</p>
          </div>
          <div><img className='project-image' id='project-image-2' src={CennetAqro} alt="" /></div>
        </div>

        {/* PROJECT 3 */}
        <div className='projects' id='project-3'>
          <div><img className='project-image' id='project-image-3'  src={Bio} alt="" /></div>
          <div className='projects-content'>
            <h4>BİO MMC</h4>
            <h1>Karton Qutu və Qutu Yapışdırma Avadanlıqlarının Qurulması</h1>
            <p>Azərbaycanda BİO MMC şirkətində dünya standartlarına cavab verən <b> Büzməli karton -3 və 5 laylı | Karton qutular – 3 və 5 laylı, rəngli və rəngsiz</b>  <b> BÜZMƏLİ KARTON MAKİNASINI </b> uğurla Çalışdıraraq təhvil verdik</p>
          </div>
        </div>

        {/* PROJECT 4 */}
        <div className='projects' id='project-4'>
          <div className='projects-content'>
            <h4> TOVUZ AQROPARK</h4>
            <h1>Heyvandarlıq Kompleksinin Qurulması</h1>
            <p> Ən müasir ət kəsimi və baytarlıq məntəqələri  İstənilən şəxs istədiyi vaxt heyvanını gətirib burada kəsdirdikdən sonra baytarlıq sertifikatı ala biləcək. Bir sözlə, əhalini <b> EKOLOJI TƏMİZ MƏHSULLARI</b> ilə təmin etmək üçün bütün şərait yaradılır.</p>
          </div>
          <div> <img className='project-image' id='project-image-4' src={TovuzAqro} alt="" /></div>
        </div>


        {/* PROJECT 5 */}
        <div className='projects' id='project-5'>
          <div><img className='project-image' id='project-image-7' src={Azersun} alt="REGİONAL SOYUQ ANBARLAR" /></div>
          <div className='projects-content'>
            <h4 className='projects-title'>AZERSUN HOLDING MMC</h4>
            <h1>ÇÖRƏK ZAVODU</h1>
            <p>Azərbaycanda <b>Azersun Holding MMC</b> şirkətində dünya standartlarına cavab verən <b> Çörək Zavodunu </b> uğurla Çalışdıraraq təhvil verdik</p>
          </div>
        </div>

                {/* PROJECT VIDEO */}
                <div className='projects' id='project-4'>
          <div className='projects-content'>
            <h4> GRAND GARDEN</h4>
            <h1>Aweta Çeşidləmə Makinası</h1>
            <p>LALETECH MMC şirkəti olaraq qubada 3-cü layihəmizi həyata keçirdik qeyd edək ki <b>AWETA</b> demək olarki bütün məhsullar üçün çeşidləmə gücünə malikdir</p>
          </div>
          <div> <video className='project-image' id='project-image-4' src={Aweta} controls autoPlay loop muted /></div>
        </div>


                {/* PROJECT VIDEO */}
                <div className='projects' id='project-5'>
                <div> <video className='project-image' id='project-image-7' src={Ekin} controls autoPlay loop muted /></div>
          <div className='projects-content'>
            <h4 className='projects-title'>ŞƏMKİR</h4>
            <h1>FIZIKI ŞƏXS</h1>
            <p>Şəmkirdə dünya standartlarına cavab verən <b> EKİN MAKİNAMIZI </b> uğurla Çalışdıraraq təhvil verdik</p>
          </div>
        </div>

        {/* PROJECT 6 */}
        <div className='projects' id='project-6'>
          <div className='projects-content'>
            <h4> FIBER KARTON MMC</h4>
            <h1>Viol,Karton qutu və Köşəbənd Avadanlığının Qurulması</h1>
            <p> Azərbaycanda <b>FIBER KARTON MMC</b> şirkətində dünya standartlarına cavab verən <b> Viol | Karton qutu  və Köşəbənd</b> Makinasını uğurla Çalışdıraraq təhvil verdik</p>
          </div>
          <div> <img className='project-image' id='project-image-4' src={Fiber} alt="" /></div>
        </div>

                {/* PROJECT 7 */}
                <div className='projects' id='project-5'>
          <div><img className='project-image' id='project-image-7' src={Serur} alt="REGİONAL SOYUQ ANBARLAR" /></div>
          <div className='projects-content'>
            <h4 className='projects-title'>Şərur 3 MMC</h4>
            <h1>Karton qutu və Kağız Klok makinasının qurulması</h1>
            <p>Azərbaycanda <b>Şərur 3 MMC</b> şirkətində dünya standartlarına cavab verən <b> Karton qutu və Kağız Klok makinasını </b> uğurla Çalışdıraraq təhvil verdik</p>
          </div>
        </div>

        {/* PROJECT 8 */}
        <div className='projects' id='project-6'>
          <div className='projects-content'>
            <h4>MİRAN 19 ÇİYƏLƏK ŞİRKƏTİ</h4>
            <h1>Plastik yeşik makinasının Qurulması </h1>
            <p> Azərbaycanda <b>MİRAN 19</b> şirkətində dünya standartlarına cavab verən <b> Plastik yeşik</b> Makinasını uğurla Çalışdıraraq təhvil verdik</p>
          </div>
          <div> <img className='project-image' id='project-image-4' src={Miran} alt="" /></div>
        </div>

        {/* PROJECT 9 */}
        <div className='projects' id='project-7'>
          <div><img className='project-image' id='project-image-7' src={Naxcivan} alt="REGİONAL SOYUQ ANBARLAR" /></div>
          <div className='projects-content'>
            <h4 className='projects-title'>NAXÇIVAN</h4>
            <h1>REGİONAL 
              SOYUQ ANBARLAR</h1>
            <p>Azərbaycanda <b>NAXÇIVANDA</b> dünya standartlarına cavab verən <b> SOYUDUCULARI </b> uğurla Çalışdıraraq təhvil verdik</p>
          </div>
        </div>

                {/* PROJECT 10 */}
                <div className='projects' id='project-6'>
          <div className='projects-content'>
            <h4>SIYƏZƏN BROYLER ASC</h4>
            <h1>Toyuq Kəsimxanası </h1>
            <p> Azərbaycanda <b>Siyəzən Broyler</b> şirkətində dünya standartlarına cavab verən <b> TOYUQ KƏSİMXANASINI</b> uğurla təhvil verdik</p>
          </div>
          <div> <img className='project-image' id='project-image-4' src={Siyezen} alt="" /></div>
        </div>

       </div>

    </section>
  )
}

export default Projects
