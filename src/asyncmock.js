const products = [
    {id:1,name:'iphone 13', price:'ARS 300000',      category: 'celular', img: 'https://http2.mlstatic.com/D_NQ_NP_2X_973345-MLA47781591382_102021-F.webp' },
    {id:2,name:'iphone 11', price:'ARS 200000',      category: 'celular', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwVklOL1btPzD76dxnpzRR6oC5EcYqkEdDzWwFHIUirCNh6kZKcQFxJVJAGE1LqSwR5_M&usqp=CAU' },
    {id:3,name:'iphone SE 2020', price:'ARS 130000', category: 'celular', img: 'https://i.blogs.es/18c46e/iphone-se-2020-01-iphone-7-03/450_1000.jpg' },
    {id:4,name:'iphone 2g', price:'ARS 1300000', category: 'celular', img: 'https://live.mrf.io/statics/i/ps/www.muycomputer.com/wp-content/uploads/2017/05/del-iPhone-2G.jpg?width=1200&enable=upscale' },
]

export const getProducts  = () => {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}