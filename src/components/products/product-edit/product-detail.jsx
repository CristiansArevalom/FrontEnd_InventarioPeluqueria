export const ProductDetail = () => {
    return (
        <div className="container">


        {/** ACA PODRIA ESTAR DOS COMPONENTES,
         * UN FORUM PARA EDITAR LA INFORMACION GENERAL DE PRODUCTO
         * 
         *  UNA TABLA DE TODOS LOS REGISTROS DEL INVENTAROP
         *  DE DICHO PRODUCTO 
         * PARA HACER UN CRUD
         * 
        */}
            <section className="products">
                <h2>Detalle Producto</h2>
                    <div className="container mt-5">
                        <div className="row">
                    
                            <div className="col-md-6">
                                <div className="card">
                                    <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Producto"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h3>Nombre Producto</h3>
                                <h4 className="mb-3">123 Existencias disponibles</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                                <div className="d-flex">
                                    <button className="btn btn-dark btn-block me-2">Editar</button>
                                    <button className="btn btn-dark btn-block">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <hr className="featurette-divider mb-2"/>


            <section className="Inventory">
                <h2>Existencias de productos en inventario</h2>
                {/** PDT ARREGLAR PAR AQUE SE LLENE https://www.youtube.com/watch?v=kEd81ZirrCY&t=1s */}
            <div className="table-responsive">
                <table className="table">
                <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Codigo Barras</th>
                        <th scope="col">Fecha Vencimiento</th>
                        <th scope="col">Fecha Ingreso</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Peso</th>
                        <th scope="col">Precio Compra</th>
                        <th scope="col">Precio Venta</th>
                        <th scope="col">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>
                        <div className="d-flex">
                                    <button className="btn btn-dark btn-block me-2">Editar</button>
                                    <button className="btn btn-dark btn-block">Eliminar</button>
                                </div>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>

                </table>
            </div>

            </section>


        </div>
    );
}