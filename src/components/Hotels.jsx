import { useState } from "react";
import useFetch from "../useFetch";
import { FaTrash } from 'react-icons/fa';

const Hotels = () => {
    const [successMessage, setSuccessMessage] = useState("");

    const {data,loading,error} = useFetch("https://backend-hotel-api-phi.vercel.app/hotels")
    // console.log(data)

    const handleDelete= async (hotelId)=>{
        try{
            const response = await fetch(`https://backend-hotel-api-phi.vercel.app/hotels/${hotelId}`,{
                method: "DELETE",
            }) 

            if(!response.ok){
                throw "Failed to delete data"
            }else{
                const data = await response.json();
                console.log(data);

                if(data){
                    setSuccessMessage("Hotel deleted successfully.");
                    window.location.reload();
                }
            }
        }catch(error){
            console.log(error)
        }
    }

    return (
        <>
        <div className="mb-5 mt-4">
           {loading ? (
            <p className="mt-4 mb-4 fw-semibold fs-3 rounded" style={{fontFamily:"-moz-initial",backgroundColor:"blueviolet"}}>
                <span className="ms-3 text-light">Loading...</span></p>
           ) : (
            <div>
                 <h1 className="py-2 mt-2 display-3" style={{fontFamily:"-moz-initial"}}>All Hotels</h1>
                {data && data.length > 0 ? (
                    <ul className="list-group">
                        {data.map((hotel)=><li className="list-group-item list-group-item-primary" key={hotel._id}>
                            <span className="fs-3 fw-bold" style={{fontFamily:"-moz-initial"}}>{hotel.name}</span>
                            <button className="float-end btn btn-outline-dark" onClick={()=>handleDelete(hotel._id)}>
                              <FaTrash/>
                            </button>
                        </li>)}
                    </ul>
                ) : (
                    <p className="mt-4 mb-4 fw-semibold fs-3 rounded" style={{fontFamily:"-moz-initial",backgroundColor:"blueviolet"}}>
                        <span className="ms-3 text-light">An error occurred while fetch the data. {error}</span>
                        </p>
                )}
            </div>
           )}

          {
            successMessage && <p className="mt-4 mb-4 fw-semibold fs-3 rounded" style={{fontFamily:"-moz-initial",backgroundColor:"blueviolet"}}>
            <span className="ms-3 text-light">{successMessage}</span>
            </p>
          } 
        </div>

        <hr />
        </>        
    )
}

export default Hotels;