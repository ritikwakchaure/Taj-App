import AddHotelForm from "./components/AddHotelForm"
import HotelByTitle from "./components/HotelByTitle"
import Hotels from "./components/Hotels"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <main className="container-fluid px-2 px-md-3 py-3">
      <div className="row">
        <div className="col-12 col-md-10 col-lg-8 mx-auto">
             <AddHotelForm/>
    
            <Hotels />

            <HotelByTitle title = "Lake view"/> 
        </div>
      </div>   
    </main>
  )
}

export default App
