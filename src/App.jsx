import { Suspense } from 'react'
import './App.css'
import BannerSection from './Components/BannerSection'
import DataSection from './Components/DataSection'
import NavBar from './Components/NavBar'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import StepsSection from './Components/StepsSection'
import PricingCard from './Components/PricingCard'
import Footer1 from './Components/Footer1'
import Footer2 from './Components/Footer2'


const productPromise = fetch("/data.json")
.then(res => res.json());

function App() {
  

  return (
    <>
      
    <NavBar></NavBar>
    <BannerSection></BannerSection>

    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <DataSection productPromise={productPromise}></DataSection>
    </Suspense>

    <ToastContainer position="top-right" autoClose={3000} />

    <StepsSection></StepsSection>

    <PricingCard></PricingCard>

    <Footer1></Footer1>

    <Footer2></Footer2>
    
    </>
  )
}

export default App
