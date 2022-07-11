import { useState, FunctionComponent } from 'react';
import Aside from "./Components/Aside/Aside"


import Header from './Components/Header';
import Footer from './Components/Footer';
import Content_dashboard from './Components/Content/Content-Dashboard'
import Content_more from './Components/Content/Content-more'
import Content_sales from './Components/Content/Content-sales'
import Content_visitors from './Components/Content/Content-visitors'
function App() {

  return (


    <main className="flex">
      <aside className="w-1/6 bg-slate-200 h-screen">
        <Aside/>

      </aside>
      <section className="w-5/6 bg-orange-300 h-screen">
      <Header/>
      <section className="bg-slate-100 h-screen w-full ">
          <Content_dashboard/>
          <Content_more/>
          <Content_sales/>
          <Content_visitors/>
           </section>

          <Footer/>
      </section>
        </main>
    )

}

export default App
