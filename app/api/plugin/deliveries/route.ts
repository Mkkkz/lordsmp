import {deliveries} from '@/lib/store';
function auth(req:Request){return req.headers.get('x-plugin-token')===process.env.PLUGIN_SECRET}
export async function GET(req:Request){if(!auth(req))return Response.json({ok:false},{status:401});return Response.json({ok:true,deliveries:deliveries.filter(d=>d.status==='pending')})}
export async function POST(req:Request){if(!auth(req))return Response.json({ok:false},{status:401});const b=await req.json();const d=deliveries.find(x=>x.id===b.id);if(d)d.status='delivered';return Response.json({ok:true})}
