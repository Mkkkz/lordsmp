export type Product={id:string;name:string;category:string;price:number;oldPrice?:number;discount?:number;image:string;limited?:boolean;commands:string[];description:string};
export const categories=[['ranks','Ranks','👑','Ranks premium'],['vips','VIPs','⭐','Vantagens especiais'],['chaves','Chaves','🔑','Caixas e recompensas'],['coins','Coins','🪙','Moeda do servidor'],['unban','Unban','⛔','Recupere acesso'],['kits','Kits','⚔️','Kits prontos'],['cash','Cash','💎','Cash exclusivo'],['tags','Tags','🏷️','Tags bonitas']].map(([id,name,icon,desc])=>({id,name,icon,desc}));
export const products:Product[]=[
{id:'mmo-plus',name:'MMO+',category:'ranks',price:49.9,oldPrice:69.9,discount:29,image:'⚔️',limited:true,description:'Rank máximo com vantagens premium.',commands:['lp user {player} parent add mmo+','crate key give {player} premium 3']},
{id:'mmo',name:'MMO',category:'ranks',price:34.9,oldPrice:49.9,discount:30,image:'🛡️',description:'Rank avançado para Survival.',commands:['lp user {player} parent add mmo']},
{id:'mvp-plus',name:'MVP+',category:'vips',price:24.9,oldPrice:34.9,discount:29,image:'🔥',description:'VIP completo com kit e prefixo.',commands:['lp user {player} parent add mvp+']},
{id:'vip-plus',name:'VIP+',category:'vips',price:14.9,oldPrice:19.9,discount:25,image:'⭐',description:'VIP acessível e bonito.',commands:['lp user {player} parent add vip+']},
{id:'tag-lord',name:'Tag LORD',category:'tags',price:9.9,oldPrice:14.9,discount:34,image:'🕷️',description:'Tag exclusiva LORD.',commands:['lp user {player} meta setsuffix 100 "&6🕷️LORD"']},
{id:'key-premium',name:'Chave Premium x3',category:'chaves',price:7.9,image:'🔑',description:'3 chaves premium.',commands:['crate key give {player} premium 3']}
];
export const reviews=[{name:'Mkzin4492',text:'Loja linda e entrega automática.',stars:5},{name:'Diripius',text:'Compra caiu certinho no servidor.',stars:5},{name:'LordPlayer',text:'Parece loja de network grande.',stars:5}];
export const faq=[{q:'Como comprar?',a:'Escolha o produto, informe seu nick e finalize o pagamento.'},{q:'Qual prazo de entrega?',a:'Após aprovação, a entrega é automática.'},{q:'E se não receber?',a:'Abra ticket no Discord com comprovante.'}];
