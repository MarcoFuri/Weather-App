import DateObject from "react-date-object"

function NavbarCustom() {
    const newDate = new DateObject()

    return (

        <div className="m-3">
            <h3 className="fw-bold">{newDate.format("MMMM YYYY")}</h3>
            <h5 className="fw-light">{newDate.format("dddd, MMM DD, YYYY")}</h5>
        </div>
        
    )
}


export default NavbarCustom