

import './App.css'
import Countries from './assets/Countries'
import { Suspense } from 'react'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())



function App() {


  return (
    <>
    <div>

<Suspense fallback ={<p>data is loading</p>}>


      <Countries countriesPromise={countriesPromise} ></Countries>
</Suspense>
     
    </div>
    </>
  )
}

export default App
