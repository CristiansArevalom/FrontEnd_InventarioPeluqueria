import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Product } from "../components/products/product";
import { ProductDetail } from "../components/products/product-edit/product-detail";
import { Home } from "../components/Home";
import Layout from '../components/layout/Layout';

export const AppRouter = () => {

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/products' element={<div className="content"><Product /></div>}></Route>
                    <Route path='/product-details' element={<div className="content"><ProductDetail /></div>}></Route>
                </Routes>
            </Layout >
        </Router>
    )

}