import PropTypes from "prop-types"
import { GridRowView } from "./GridRowView"

export const ListItemsViews = ({title , items}) =>{

    return(
        <>
        <h4>{title}</h4>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(({ id, product, price, quantity }) => (
                                    <GridRowView key={id} product={product} price={price} quantity={quantity}/>
                                ))}

                            </tbody>
                        </table>
        </>
    )
}

GridRowView.propTypes ={
    items: PropTypes.shape ={
        id: PropTypes.number.isRequired,
        product: PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        quantity:PropTypes.number.isRequired
    }
}
