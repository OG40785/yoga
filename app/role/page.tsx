"use client";

import { useState, useEffect } from 'react'
import GetRole from '../components/getRole';
 
type Role = {
  id: string;
  name:string;
};


export default function RoleList() {
  const [role, setRole] = useState<Role | null>(null);
  
  async function getRole(){
    await fetch('/api/role')
        .then((res) => {return res.json()})
        .then((data) => {
          setRole(data[0]);
          //console.log(data);
          
        })
  }
  useEffect  (() => {
    getRole();
      
  }, [])

/*   useEffect(() => {
    fetch('/api/role')
      .then((res) => {return res.json()})
      .then((data) => {
        setRole(data[0]);
        //console.log(data);
        
      })
      
  }, []) */

  //https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
  //https://github.com/Gabaldonlab/phylomizer3/blob/main/frontend/app/components/help-modal/HelpModal.tsx
  //if (!role) return <p>No roles</p>
 
  return (
    <div>

       <h1>{ role? role.id: ""}</h1>
      <p>{role? role.name: ""}</p> 
    </div> 
/*{       {<GetRole />} }*/
  
  )
}