import { Suspense } from 'react'
import './App.css'
import BannerSection from './Components/BannerSection'
import DataSection from './Components/DataSection'
import NavBar from './Components/NavBar'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import StepsSection from './Components/StepsSection'
import PricingCard from './Components/PricingCard'


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
    
    </>
  )
}

export default App
