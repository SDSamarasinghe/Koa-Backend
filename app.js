const Koa = require('koa');
const json = require('koa-json');
const KoaRouter = require('koa-router');

const router = new KoaRouter();

const app= new Koa();

const PORT =  8000;

app.use(json(
    
))


// app.use(async (ctx, next) =>{
//     ctx.body = {
        
//             "id": 1,
//             "name": "Sadisha Dilmin",
    

//     };
// });

app.use(json());

router.get('/api', async (ctx, next) =>{   //first endpoint
    ctx.body = {
        
    }

});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})