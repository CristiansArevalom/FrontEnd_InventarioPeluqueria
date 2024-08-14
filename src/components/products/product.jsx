
import { Link } from 'react-router-dom';

export const Product = () => {
    return (
        <>
        <section className="Categorias">
            <div className="container container-sm py-5">
                <h2 className="mb-4">Categorías</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100" style={{ width: '200px' }}>
                            <img src="https://via.placeholder.com/200x150" className="card-img-top rounded-top" alt="Categoría 1" />
                            <div className="card-body">
                                <h5 className="card-title">Productos belleza</h5>
                            </div>
                        </div>
                    </div>
                    {/* Puedes agregar más columnas aquí */}
                    <div className="col">
                        <div className="card h-100" style={{ width: '200px' }}>
                            <img src="https://via.placeholder.com/200x150" className="card-img-top rounded-top" alt="Categoría 1" />
                            <div className="card-body">
                                <h5 className="card-title">Productos belleza</h5>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </section>


        {/* Aca falta un contador de productos */}


        {/*PDT VE COMO LELNAR ESO CON SIDEBARRS Y RECORRERLO   */}


        <section style={{ backgroundColor: '#eee' }}>
            <div className="container py-5">
            <h2>Inventario</h2>
            <p> 55 productos</p>
                <div className="row justify-content-center mb-3">

                <div className="col-md-12 col-xl-10">

                    <div className="card shadow-0 border rounded-3">
                    <div className="card-body">
                        <div className="row">
                        <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                            <div className="bg-image hover-zoom ripple rounded ripple-surface">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp" className="w-100" alt="Producto 1"/>
                            <a href="#!">
                                <div className="hover-overlay">
                                <div className="mask" style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}></div>
                                </div>
                            </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <h5>Producto 1</h5>
                            <div className="mt-1 mb-0 text-muted small">
                            <span>100% cotton</span>
                            <span className="text-primary"> • </span>
                            <span>Light weight</span>
                            <span className="text-primary"> • </span>
                            <span>Best finish<br /></span>
                            </div>
                            <div className="mb-2 text-muted small">
                            <span>Unique design</span>
                            <span className="text-primary"> • </span>
                            <span>For men</span>
                            <span className="text-primary"> • </span>
                            <span>Casual<br /></span>
                            </div>
                            <p className="text-truncate mb-4 mb-md-0">
                            Descripcion corta
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                            <div className="d-flex flex-row align-items-center mb-1">
                            <h4 className="mb-1 me-1">1399</h4>
                            <span className="text-danger">123</span>
                            </div>
                            <h6 className="text-success">Existencias</h6>
                            <div className="d-flex flex-column mt-4">
                            <div className="btn btn-primary btn-sm">
                                <Link to="/product-details" className="text-white text-decoration-none">Ver detalles</Link>     
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>


                    
            </div>
            </div>
            </div>

            
        </section>
        
        
        </>
    );
}