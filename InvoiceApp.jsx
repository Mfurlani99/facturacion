import { getInvoice } from "./services/getInvoice";
import { ClienteView } from "./components/ClienteView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/invoiceView";
import { ListItemsViews } from "./components/ListItemsViews";

export const InvoiceApp = () => {

    const { id, name, client, company, items } = getInvoice();


    return (
        <>
            <div className="container">

                <div className="card my-3">

                    <div className="card-header">
                        Ejemplo Factura
                    </div>
                    <div className="card-body">
                       <InvoiceView id={id} name={name}/>

                        <div className="row my-3">

                            <div className="col">
                                <ClienteView client={client}/>
                            </div>

                            <div className="col">
                                <CompanyView title="Datos de la empresa" company={company}/>
                            </div>

                        </div>
                        <ListItemsViews title="Productos de la factura"  items={items}/>
                    </div>
                </div>
            </div>
        </>
    )
}