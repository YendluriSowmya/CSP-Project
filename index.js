const app = require('./Requires');

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Listening on port http://localhost:${port}`);
});
