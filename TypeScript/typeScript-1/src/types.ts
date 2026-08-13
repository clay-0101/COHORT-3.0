// interface product = {

//     category: string,
//     description: string,
//     id: number,
//     image: string,
//     price: number,
//     rating: {
//         rate: number,
//         count: number
//     }
//     title: string,
// }

export interface ProductType  {
    id : number ,
    category : number ,
    description : string ,
    image : string,
    price : number,
    rating : {
        rate : number ,
        count : number ,
    },
    title : string

}