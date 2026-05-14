import {products} from './data';
export type Order={id:string;player:string;productIds:string[];total:number;status:'approved'|'delivered';createdAt:number};
export type Delivery={id:string;orderId:string;player:string;commands:string[];status:'pending'|'delivered'};
declare global{var lordOrders:Order[]|undefined;var lordDeliveries:Delivery[]|undefined}
export const orders=globalThis.lordOrders??(globalThis.lordOrders=[]);export const deliveries=globalThis.lordDeliveries??(globalThis.lordDeliveries=[]);
export function createOrder(player:string,ids:string[]){const selected=products.filter(p=>ids.includes(p.id));const total=selected.reduce((s,p)=>s+p.price,0);const order={id:'ORD-'+Date.now(),player,productIds:ids,total,status:'approved' as const,createdAt:Date.now()};orders.push(order);deliveries.push({id:'DEL-'+Date.now(),orderId:order.id,player,commands:selected.flatMap(p=>p.commands.map(c=>c.replaceAll('{player}',player))),status:'pending'});return order}
