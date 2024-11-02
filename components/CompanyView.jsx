import PropTypes from "prop-types"

export const CompanyView = ({company ,title}) =>{

return(
    <>
    <h3>{title}</h3>
                                <ul className="list-group">
                                    <li className="list-group-item active">{company.name}</li>
                                    <li className="list-group-item">{company.fiscalNumber}</li>
                                </ul>
    </>
)

}

CompanyView.propTypes = {
company: PropTypes.shape ={
    name: PropTypes.string.isRequired,
    fiscalNumber: PropTypes.string.isRequired
}

}