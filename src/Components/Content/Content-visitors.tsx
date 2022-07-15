function Content_visitors() {

  return (
    <div className="bg-blue-700 w-2/5 h-3/6  ml-auto mr-5 rounded-md border -mt-20 border-gray-300 flex">
      <h1 className="font-semibold text-lg ml-12 mt-3 h-8 text-white">Visitors</h1>
      <button className="bg-blue-600 text-white w-8 h-8 rounded-md ml-56 mt-2  hover:bg-blue-800"></button>
      <button className="bg-blue-600 text-white hover:bg-blue-800 font-extrabold text-2xl w-8 h-8 rounded-md ml-1 mt-2" title="Collapse" >-</button>
      <hr />
      <h2 className="mt-96 -ml-96 text-white">Visitors</h2>
      <h2 className="mt-96 ml-24 text-white">Online</h2>
      <h2 className="mt-96 ml-24 text-white">Sales</h2>
    </div>

  )
}

export default Content_visitors