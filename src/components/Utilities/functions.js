const loadMore =(description)=>{
    alert(description);
}
const addToCart = (id) => {
    const quantity = localStorage.getItem(id);
    if(quantity){
        console.log("This Product is already existed in your cart");
        const newQty = parseInt(quantity)+1;
        localStorage.setItem(id,newQty);
    }
    else{
        console.log("product:", id, "is added");
        localStorage.setItem(id,1);
    }
}

export {loadMore,addToCart}