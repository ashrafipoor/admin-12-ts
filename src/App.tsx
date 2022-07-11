import Content_dashboard from './Content/Content-Dashboard'
import Content_more from './Content/Content-more'
import Content_sales from './Content/Content-sales'
import Content_visitors from './Content/Content-visitors'
function App() {

  return (
    <main className="flex" >
      <aside className="w-1/6 bg-slate-500 h-screen">
      </aside>
      <section className="w-5/6 bg-orange-300 h-screen">
      
      <section className="bg-slate-100 h-screen w-full ">
          <Content_dashboard/>
          <Content_more/>
          <Content_sales/>
          <Content_visitors/>
           </section>
          
      </section>
        </main>
    )
}

export default App
