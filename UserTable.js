import React from 'react';
import axios from 'axios';

const UserTable = () =>{
   

    React.useEffect(() =>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) =>{
         console.log(response.data);
    })
    },[]);
    return(
         <div>
             <pre>
                 {JSON.stringify()}
             </pre>
             <p>Rangi</p>
         </div>
    )
};
export default UserTable;