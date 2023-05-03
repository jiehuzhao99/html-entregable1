import { useState } from "react";
import { useEffect } from "react";

const products = [
    { name: "Product 1", price: 100, quantity: 1 },
    { name: "Product 2", price: 200, quantity: 1 },
    { name: "Product 3", price: 300, quantity: 1 },
    { name: "Product 4", price: 400, quantity: 1},
    { name: "Product 5", price: 500, quantity: 1},
];

const ShoppingCart = () => {
    const [cart, setCart] = useState([]);
    const [coupon, setCoupon] = useState("");
    const [total, setTotal] = useState(0);
    const [lastId, setLastId] = useState(0);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        if (savedCart) {
            setCart(savedCart);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const handleChangeCart = (e, product) => {
        if(!product.id) {
            const newProduct = { ...product, id: lastId + 1 };
            setCart([...cart, newProduct]);
            setLastId(lastId + 1);
            console.log("1st", product)
            setTotal(total + product.price);
        } else {
            const existingProductIndex = cart.findIndex((p) => p.id === product.id);
                if (existingProductIndex !== -1) {
                const updatedCart = [...cart];
                updatedCart[existingProductIndex].quantity += 1;
                setCart(updatedCart);
                setTotal(total + product.price);
                } else {
                product.id = lastId + 1;
                product.quantity = 1;
                setCart([...cart, product]);
                setLastId(lastId + 1);
                setTotal(total + product.price);
            }
        }
    }

        // setTotal(cart.reduce((acc, product) => acc + product.price, product.price));
    

    const handleChangeCoupon = (e) => {
        setCoupon(e.target.value);
    }

    const handleRemoveProduct = (e, product) => {
        delete product.id;
        setCart(cart.filter((p) => p.id !== product.id));

        console.log(cart)
        console.log(product);
        setTotal(total - product.price);

    }

    const applyCoupon = () => {
        if (coupon === "SAVE10") {
            setTotal(total - total * 0.1);
        }
    }

    return ( 
        <>
            <h2>Products</h2>
            <div className="products" style={{display: 'flex', justifyContent: 'center'}}>
                { products.map((product) => {
                    return (
                    <div key={product.id} style={{ margin: '10px'}}>
                        <p>{product.name}</p>
                        <p>${product.price}</p>
                        <button onClick={(e) => handleChangeCart(e, product)}>Add to cart</button>
                    </div>
                    )
                }) }
            </div>
            <h2>Shopping cart</h2>
            <div className="cart" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            { cart.map((product) => {
                return (
                <div key={product.id} style={{display: 'flex', margin: '10px'}}>
                    <p style={{marginRight: '50px'}}>{product.name}</p>
                    <p style={{marginRight: '20px'}}>${product.price}</p>
                    <p style={{marginRight: '20px'}}>{product.quantity}</p>
                    <button onClick={(e) => handleRemoveProduct(e, product)}>Remove</button>
                </div>
                )
            }) }
            </div>
            <input type="text" placeholder="Coupon code" onChange={handleChangeCoupon} />
            <button onClick={applyCoupon}>Apply coupon</button>
            <p>Total: {total}</p>
        </>
     );
}
 
export default ShoppingCart;