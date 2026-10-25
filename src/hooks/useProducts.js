import axios from "axios";
import { useEffect, useState } from "react";
function useProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    const fetchProducts = async () => {

        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setLoading(false);

            setProducts(response.data);
            // setLoading(false);

        } catch (error) {
            setError("Something went wrong");

        }

    };
    useEffect(() => {
        fetchProducts();
    }, []);
    return { products, loading, error };

}
export default useProducts;