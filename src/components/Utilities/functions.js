//======================================== Functions for loading more describe part ======================================== 
const loadMore =(description)=>{
    alert(description);
}

//====================================== localStorage management functionality section ======================================
// Adding to the cart
const addToCart = (id) => {
    let shoppingCart;
    
    // get the shopping cart 
    const storedCart =localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart=JSON.parse(storedCart)
        console.log(shoppingCart);
    }
    else{
        shoppingCart={};
        console.log(shoppingCart);
    }


    // add quantity
    const quantity = shoppingCart[id];
    console.log(quantity);
    if(quantity){
        const newQty = quantity+1;
        shoppingCart[id]=newQty;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}

// Removing from the cart
const removeFromCart = id =>{
    let shoppingCart;
    const storedCart =localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart=JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
    
}


export {loadMore,addToCart, removeFromCart}