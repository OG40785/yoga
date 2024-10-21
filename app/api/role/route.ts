import { NextRequest, NextResponse } from 'next/server';
import db from '../../../db/index'; 
import * as schema from '../../../db/schema';

export async function GET(request: NextRequest) {
  try {

    const searchParams= request.nextUrl.searchParams;
    const teacherId = searchParams.get('teacher');
    const role = await db.query.role.findMany();

  
    return NextResponse.json(role);
  } catch (error) {
  
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
}


/* export async function POST(request: NextRequest) {
  try {
    const newRole = await db.query.role.create({ data: req.body });
    return NextResponse.json(newRole);
  } catch (error) {
    return NextResponse.json({ error: 'Error creating role' }, { status: 500 });
  }
} */