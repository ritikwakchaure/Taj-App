import useFetch from "../useFetch";

const HotelByTitle = ({title}) => {
    const {data,loading,error} = useFetch(`https://backend-hotel-api-phi.vercel.app/hotels/${title}`)
    // console.log(data);
    
    return (
        <div>
            {loading ? (
                <p className="mt-4 mb-4 fw-semibold fs-3 rounded" style={{fontFamily:"-moz-initial",backgroundColor:"blueviolet"}}>
                <span className="ms-3 text-light">Loading...</span></p>
            ) : (
                <div>
                    {data ? (
                        <div className="py-2 mb-2">
                            <h1 className="py-2 mt-2  display-3" style={{fontFamily:"-moz-initial"}}>Search by Hotel's name</h1>

                            <div className="card mb-3 mt-3" style={{backgroundColor:"lightpink"}}>
                                <div className="card-body fw-semibold fs-5" style={{fontFamily:"-moz-initial"}}>
                                    <h2 className="display-5">{data.name}</h2>
                                    <hr />

                                    <p><strong>Location: </strong>{data.location}</p>
                                    <p><strong>Rating: </strong>{data.rating}</p>
                                    <p><strong>Price Range: </strong>{data.priceRange}</p>
                                    <p><strong>Amenities: </strong>{data.amenities.join(", ")}</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p className="mt-4 mb-4 fw-semibold fs-3 rounded" style={{fontFamily:"-moz-initial",backgroundColor:"blueviolet"}}>
                <span className="ms-3 text-light">An error occurred while fetching the data.  {error}</span></p>
                    )}
                </div>
            )}
        </div>
    )
}

export default HotelByTitle;