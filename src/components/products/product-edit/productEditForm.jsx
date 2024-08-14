import {useState} from 'react'

export const ProductEditForm = ( {product}) => {
    const [name, setName] = useState(product.name);
    const [stock, setStock] = useState(product.stock);
    const [description, setDescription] = useState(product.description);
    
    const handleSave = (e) => {
        e.preventDefault();
        // Aquí se manejaría la lógica para guardar los cambios
    };



    return (
        <div>
    <form onSubmit={handleSave} className="mt-4">
        <div className="mb-3">
            <label htmlFor="productName" className="form-label">
            Nombre del Producto
            </label>
            <input
            type="text"
            className="form-control"
            id="productName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="stock" className="form-label">
            Existencias
            </label>
            <input
            type="number"
            className="form-control"
            id="stock"
            value={productStock}
            onChange={(e) => setProductStock(e.target.value)}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">
            Descripción
            </label>
            <textarea
            className="form-control"
            id="description"
            rows="3"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
            Guardar
        </button>
        </form>
        </div>
        
    );

}