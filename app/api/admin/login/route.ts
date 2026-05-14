import {signAdmin} from '@/lib/auth';import {cookies} from 'next/headers';
export async function POST(req:Request){const b=await req.json();if(b.email!==process.env.ADMIN_EMAIL||b.password!==process.env.ADMIN_PASSWORD)return Response.json({ok:false},{status:401});cookies().set('admin_token',signAdmin(),{httpOnly:true,sameSite:'strict',path:'/'});return Response.json({ok:true})}
