 import React, { useCallback, useEffect, useState } from 'react'

 const useCart = (req) => {

  const [items, setItems] = useState({
    products:[],
    total:0,
    skip:1,
    limit:0 });
  const [loading, setLoading] = useState(true); // جاري التحميل
  const [error, setError] = useState(false);
     

  // useCallback()

  const reqData =  useCallback( async () => {

    setLoading(true);
    setError(null);

     try { 
      const response = await fetch(req.url, {
        method:req.method? req.method: 'GET',
        body:req.body? JSON.stringify(req.body):null,
        headers:req.headers? req.headers: {} })

        if (!response.ok) {  
          throw new Error('somthing went wrong!'); }  
          
        const data = await response.json();
        setItems(data);

       } catch(error) {  setError(true) }

      setLoading(false)
  }, [])

  // const url = `https://dummyjson.com/products`;

  //  useEffect(() => {
  //   reqData();
  // },[]);
 
   return {reqData,  items, loading, error }
}

export default useCart;
