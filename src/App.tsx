import { useState } from 'react';
import Aside from "./Components/Aside/Aside"


import Header from './Components/Header';
import Footer from './Components/Footer';
import Content_dashboard from './Components/Content/Content-Dashboard'
import Content_more from './Components/Content/Content-more'
import Content_sales from './Components/Content/Content-sales'
import Content_visitors from './Components/Content/Content-visitors'
function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const onBurgerClick = () => {
    setShowSidebar(!showSidebar);
    console.log(showSidebar)
  }
  return (


    <main className="flex ">
      <aside className={`top-0 left-0 w-1/6 bg-blue-600 text-white fixed h-full ease-in-out duration-300 ${showSidebar ? "-translate-x-full": "translate-x-0 "
        }`}>
        <Aside />

      </aside>
      <section className={`flex flex-col w-full  ${showSidebar? "w-full":"w-5/6 ml-56"}  bg-slate-100  h-screen overflow-y-auto ease-in-out duration-300`}>
        <Header onMenuClick={onBurgerClick} />

        <Content_dashboard />
        <Content_more />
        <Content_sales />
        <Content_visitors/>


        <Footer />
      </section>
    </main>
  )

}

export default App
