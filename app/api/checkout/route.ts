import {createOrder} from '@/lib/store';import {z} from 'zod';
const schema=z.object({player:z.string().min(3).max(16).regex(/^[a-zA-Z0-9_]+$/),products:z.array(z.string()).min(1)});
export async function POST(req:Request){const body=await req.json();const p=schema.safeParse(body);if(!p.success)return Response.json({ok:false,error:'Dados inválidos.'},{status:400});const order=createOrder(p.data.player,p.data.products);return Response.json({ok:true,order})}
