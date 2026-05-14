import jwt from 'jsonwebtoken';import {cookies} from 'next/headers';
export function signAdmin(){return jwt.sign({role:'owner'},process.env.JWT_SECRET||'dev',{expiresIn:'7d'})}
export function isAdmin(){const t=cookies().get('admin_token')?.value;if(!t)return false;try{return (jwt.verify(t,process.env.JWT_SECRET||'dev') as any).role==='owner'}catch{return false}}
