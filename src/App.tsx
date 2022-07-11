import { useState } from 'react';
import logo from './logo.svg'
import './App.css'
import Header from './Components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex" >
    <aside className="w-1/6 bg-slate-200 h-screen">

    </aside>
    <section className="w-5/6 bg-orange-300 h-screen">
    <Header/>
    <section></section>
    
    </section>
   
  </main>
  )
}

export default App
