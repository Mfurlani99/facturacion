import PropTypes from "prop-types";

export const  ClienteView = ({client}) =>{
    const { name: nameClient, lastName, address :{country, city, street, number}} = client;
    
    return(
        <>
        <h3>Datos del cliente</h3>
                                <ul className="list-group">
                                    <li className="list-group-item active">{nameClient} {lastName}</li>
                                    <li className="list-group-item">{country} / {city}</li>
                                    <li className="list-group-item">{street} {number}</li>
                                </ul>
        </>
    )

}


ClienteView.propTypes ={
  client: PropTypes.shape ={
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    street:PropTypes.string.isRequired,
    number: PropTypes.number.isRequired
  }
}