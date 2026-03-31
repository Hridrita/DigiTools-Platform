import { Suspense } from 'react'
import './App.css'
import BannerSection from './Components/BannerSection'
import DataSection from './Components/DataSection'
import NavBar from './Components/NavBar'


const productPromise = fetch("/data.json")
.then(res => res.json());

function App() {
  

  return (
    <>
      
    <NavBar></NavBar>
    <BannerSection></BannerSection>

    <Suspense>
      <DataSection productPromise={productPromise}></DataSection>
    </Suspense>
    
    </>
  )
}

export default App
