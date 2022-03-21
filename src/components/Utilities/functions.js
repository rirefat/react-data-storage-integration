//======================================== Functions for loading more describe part ======================================== 
const loadMore =(description)=>{
    alert(description);
}

//=========================================== localStorage functionality section ===========================================
const addToCart = (id) => {
    let shoppingCart={};
    // let shoppingCart;
    
    // get the shopping cart 
    const storedCart =localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart=JSON.parse(storedCart)
    }
    else{
        shoppingCart={};
    }


    // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQty = quantity+1;
        shoppingCart[id]=newQty;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}

export {loadMore,addToCart}