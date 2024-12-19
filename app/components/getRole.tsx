import { NextRequest, NextResponse } from 'next/server';
import db from '../../db/index'; 

type Role = {
    id: string;
    name: string;
  };
  
  export default async function GetRole(){
    const role = await db.query.roles.findMany();
    const firstRole = role[0];
  
    return (
      <div>
        <h1>Role from Server Component</h1>
        <p>ID: {firstRole.id}</p>
        <p>Name: {firstRole.name}</p>
      </div>
    );
  }

