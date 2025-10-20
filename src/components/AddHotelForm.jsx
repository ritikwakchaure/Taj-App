import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const AddHotelForm = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const [formData, setFormData] = useState({
        name:"",
        category:"Budget",
        location:"",
        rating:"",
        reviews:"",
        website:"",
        phoneNumber:"",
        checkInTime:"",
        checkOutTime:"",
        amenities:"",
        priceRange:"$$ (11-30)",
        reservationsNeeded:false,
        isParkingAvailable:false,
        isPoolAvailable:false,
        isWifiAvailable:false,
        isSpaAvailable:false,
        isRestaurantAvailable:false,
        photos:"",
    })

    const handlerOfChange = (event) => {
        const {name,value,checked,type} = event.target;

        {name === "rating" ? parseFloat(value) : value}

        setFormData((prevState)=>({...prevState,
            [name] : type === "checkbox" ? checked : value,
        }))
    }
    // console.log(formData.isParkingAvailable)
    // console.log(formData.category)
    // console.log(formData.priceRange)
    // console.log(formData.amenities)

    const formHandler = async (event) => {
        event.preventDefault();

        try{
            const response = await fetch("https://backend-hotel-api-phi.vercel.app/hotels", {
                method: "POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(formData),
            });

            if(response.ok){
                const data = await response.json();

                if(data){
                    setSuccessMessage("Hotel added successfully.");
                    window.location.reload();
                }

                // console.log("Added a Hotel data: \n",data);
            }else{
                throw "Failed to post my data"
            }
        }catch(error){
            console.log(error);
        }
    }

    return (                  
        <>
        <h1 className="py-2 mt-2 display-3" style={{fontFamily:"-moz-initial"}}>Add New Hotel</h1>
        <form onSubmit={formHandler}>

            <label className="fs-4 fw-semibold" style={{fontFamily:"-moz-initial"}}>Title: </label><br />
            <input type="text" className="form-control" name="name" value={formData.name} onChange={handlerOfChange} />
            <br />

            <label className="fs-4 fw-semibold" style={{fontFamily:"-moz-initial"}}>Category: </label><br />
            <select name="category" className="form-select" value={formData.category} onChange={handlerOfChange}>
                <option value="Budget">Budget</option>
                <option value="Mid-Range">Mid-Range</option>
                <option value="Luxury">Luxury</option>
                <option value="Boutique">Boutique</option>    
                <option value="Resort">Resort</option>
                <option value="Other">Other</option>
            </select>
            <br />
            
            <label className="fs-4 fw-semibold" style={{fontFamily:"-moz-initial"}}>Location: </label><br />
            <input type="text" className="form-control" name="location" value={formData.location} onChange={handlerOfChange} />
            <br />

            <label className="fs-4 fw-semibold" style={{fontFamily:"-moz-initial"}}>Rating: </label><br />
            <input type="number" className="form-control" name="rating" placeholder="we can rate between 1 to 5..." value={formData.rating} onChange={handlerOfChange} />
            <br />

            <label className="fs-4 fw-semibold" style={{fontFamily:"-moz-initial"}}>Reviews: </label><br />
            <input type="text" className="form-control" name="reviews" value={formData.reviews} onChange={handlerOfChange} />
            <br />

            <label className="fs-4 fw-semibold" style={{fontFamily:"-moz-initial"}}>Website: </label><br />
            <input type="text" className="form-control" name="website" value={formData.website} onChange={handlerOfChange} />
            <br />

            <label className="fs-4 fw-semibold" style={{fontFamily:"-moz-initial"}}>Phone Number: </label><br />
            <input type="number" className="form-control" name="phoneNumber" value={formData.phoneNumber} onChange={handlerOfChange} />
            <br />

            <label className="fs-4 fw-semibold" style={{fontFamily:"-moz-initial"}}>Check In Time: </label><br />
            <input type="text" className="form-control" name="checkInTime" value={formData.checkInTime} onChange={handlerOfChange} />
            <br />

            <label className="fs-4 fw-semibold" style={{fontFamily:"-moz-initial"}}>Check Out Time: </label><br />
            <input type="text" className="form-control" name="checkOutTime" value={formData.checkOutTime} onChange={handlerOfChange} />
            <br />

            <label className="fs-4 fw-semibold" style={{fontFamily:"-moz-initial"}}>Amenities: </label><br />
            <input type="text" className="form-control" name="amenities" value={formData.amenities} onChange={handlerOfChange} />
            <br />
            
            <label className="fs-4 fw-semibold" style={{fontFamily:"-moz-initial"}}>Price Range: </label><br />
            <select  value={formData.priceRange} className="form-select" name="priceRange" onChange={handlerOfChange}>
                <option value="$$ (11-30)">$$ (11-30)</option>
                <option value="$$$ (31-60)">$$$ (31-60)</option>
                <option value="$$$$ (61+)">$$$$ (61+)</option>
                <option value="Other">Other</option>    
            </select>
            <br /><br />            

            <div className="form-check">
                <input id="reservationsNeeded" className="form-check-input"  type="checkbox" name="reservationsNeeded" value={formData.reservationsNeeded} onChange={handlerOfChange} />     
                <label className="fs-5 fw-semibold form-check-label" style={{fontFamily:"-moz-initial"}} htmlFor="reservationsNeeded">Reservations Needed</label>
            </div>
            <br />

             <div className="form-check">
                <input type="checkbox" className="form-check-input" id="parkingAvailable" name="isParkingAvailable" value={formData.isParkingAvailable} onChange={handlerOfChange} />     
                <label className="fs-5 form-check-label fw-semibold" style={{fontFamily:"-moz-initial"}} htmlFor="parkingAvailable">Parking Available</label>
             </div>
            <br />

             <div className="form-check">
                <input type="checkbox" className="form-check-input" id="isPoolAvailable" name="isPoolAvailable" value={formData.isPoolAvailable} onChange={handlerOfChange} />     
                <label className="fs-5 form-check-label fw-semibold" style={{fontFamily:"-moz-initial"}} htmlFor="isPoolAvailable">Pool Available</label>
             </div>
            <br />
            
             <div className="form-check">
                <input type="checkbox" className="form-check-input" id="isWifiAvailable" name="isWifiAvailable" value={formData.isWifiAvailable} onChange={handlerOfChange} />     
                <label className="fs-5 form-check-label fw-semibold" style={{fontFamily:"-moz-initial"}} htmlFor="isWifiAvailable">Wifi Available</label>
             </div>
            <br />
            
             <div className="form-check">
                <input type="checkbox" className="form-check-input" id="isSpaAvailable" name="isSpaAvailable" value={formData.isSpaAvailable} onChange={handlerOfChange} />     
                <label className="fs-5 form-check-label fw-semibold" style={{fontFamily:"-moz-initial"}} htmlFor="isSpaAvailable">Spa Available</label>
             </div>
            <br />

             <div className="form-check">
                <input type="checkbox" className="form-check-input" id="isRestaurantAvailable" name="isRestaurantAvailable" value={formData.isRestaurantAvailable} onChange={handlerOfChange} />     
                <label className="fs-5 form-check-label fw-semibold" style={{fontFamily:"-moz-initial"}} htmlFor="isRestaurantAvailable">Restaurant Available</label>
             </div>
            <br />
            
            <label className="fs-4 fw-semibold" style={{fontFamily:"-moz-initial"}}>Photos: </label><br />
            <input type="text" className="form-control" name="photos" value={formData.photos} onChange={handlerOfChange} />     
            <br />

            <button type="submit" className="btn btn-outline-primary fs-3 fw-bold mt-3 mb-4" style={{fontFamily:"-moz-initial"}}>Submit <FaPaperPlane/></button>
        </form>

        {successMessage && <p className="mt-2 mb-4 fw-semibold fs-3 rounded" style={{fontFamily:"-moz-initial",backgroundColor:"blueviolet"}}><span className="ms-3 text-light">{successMessage}</span></p>}

        <hr />
        </>
    )
}

export default AddHotelForm;