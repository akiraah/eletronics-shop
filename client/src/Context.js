import React, { createContext, useState } from "react"

const context = createContext();
const { Provider } = context;

const Context = ({children}) => {
    const [ items, setItems ] = useState([])
    const [total, setTotal] = useState(0);
    const addItemsToCart = (item) => {
        calculateTotal(item.price)
        setItems([...items, item])
    }
    const calculateTotal = (price) => {
        const newPrice = price + total;
        setTotal(newPrice)
    }
    return (
        <Provider value={{addItemsToCart, items, total}}>
            {children}
        </Provider>
    )
}   

export { 
    Context,
    context
}