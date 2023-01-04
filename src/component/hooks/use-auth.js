import {  onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {auth} from '../../firebase/firebase';

 

 const useAuth =() => {

   const [user, setUser] = useState();
   const [error, setError] = useState(null);
   const [isLoading, setIsLoading] = useState(true);

   const navigate = useNavigate();

   const userAuthHandler= async (userHandler,email, password,nav )   => {

      setError(null);
      setIsLoading(true);

      try { 
       await userHandler(auth, email, password );
       navigate(nav)

    } catch(error) {
        setError(error.message)
        alert(error.message)
       }
       setIsLoading(false);
   }
   



 useEffect( () => {

  const unsubscrib = onAuthStateChanged(auth, (user) => {

    if (user) { setUser(user);  }

    else { setUser(null) }

  })

  return unsubscrib;

 }, []);


  return { 
    user, error,isLoading, userAuthHandler }
}

export default useAuth;

//  const logOut= async() => {

//   try { 

//         await signOut(auth) 
//         navigate('/login') 

//        }  catch(error)   {   setError(error.message)  }

//  } 
// const signUp = async(email, password, name) => {
  //       try{ 
  //         await createUserWithEmailAndPassword(auth, email, password, name);
  //         navigate('/login')
  
  //        }   catch(error)  {  
  //         setError(error.meaasge) 
  //         alert(error.message)
  //         navigate('/register')    
  //       }
  //   }
  
  // //   const signIn= async(email, password) => {
  
  // //     try { 
  
  // //       await signInWithEmailAndPassword(auth, email, password);
  // //       navigate('/')
  // //       // setIsLogin(false);
  
  // //      }  catch(error) {  
  // //         alert(error.message)   
  // //       // setIsLogin(false);  
  // //     }
  
  // // }
