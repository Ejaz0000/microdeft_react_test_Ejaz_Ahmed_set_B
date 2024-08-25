import React, { useState } from 'react'

const Form = () => {
    const [title,setTitle] = useState('');
    const [stock,setStock] = useState('');
    const [price,setPrice] = useState('');
    const [discount,setDiscount] = useState('');
    const [email,setEmail] = useState('');

    function handleSubmit(e){
        e.priventDefault()

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: title, })
        };

        async function postdata(){
            const response = await fetch('', requestOptions);
            const data = await response.json();
        } 


        postdata()
    }
  return (
    <div>
    <form onSubmit={handleSubmit} className='rounded-md w-[400px] flex flex-col bg-blue-300  gap-6 p-6'>
    <input className='rounded-md p-2'  type='text' placeholder='Enter Title' value={title} onChange={e => setTitle(e.target.value)}></input>
    <input className='rounded-md p-2' type='number' placeholder='Enter Stock' value={stock} onChange={e => setStock(e.target.value)}></input>
    <input className='rounded-md p-2' type='number' placeholder='Enter Price' value={price} onChange={e => setPrice(e.target.value)}></input>
    <input className='rounded-md p-2' type='number' placeholder='Enter Discount'value={discount} onChange={e => setDiscount(e.target.value)}></input>
    <input className='rounded-md p-2' type='hidden' placeholder='Enter Email' value={email} onChange={e => setEmail(e.target.value)}></input>

    <button className='rounded-md p-2 bg-blue-600 text-white' type='submit'>Submit</button>
  </form>
  </div>
  )
}

export default Form