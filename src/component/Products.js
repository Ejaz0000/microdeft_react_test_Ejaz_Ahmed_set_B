import React, { useEffect, useState } from 'react'
import './products.css'

const Products = () => {

    const [products,setProducts] =useState([]);


    useEffect(()=>{
        async function fetchProducts(){
            try{
                const res = await fetch("https://react-interview.1putym.easypanel.host/api/product?email=naim.microdeft@gmail.com")

                if(!res.ok){
                    throw new Error("data fetch failed");
                }

                const data = await res.json();
                console.log(data.data);

                

                setProducts(data.data)
                
            }catch(error){
                console.log(error);
            }


        }

        fetchProducts()
    },[])


  return (
    <div className='w-full box-border p-6 flex flex-wrap justify-center gap-2'>

        {products.length > 0 && products.map(product =>
                <div className='card' key={product.id}>
                    <div className='prod_img'>
                      <img src={product.image} alt='prod'/>
                    </div>

                    <p className='prod_name'>{product.title}</p>
                    <p>${product.price}</p>
                    <button>Order Now</button>
                </div>

            )}

    </div>
  )
}

export default Products