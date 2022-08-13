// libraries
import express, { Application } from 'express'
import morgan from 'morgan'
// routes
import IndexRoutes from "./routes/index.routes"
import ProductsRoutes from "./routes/products.routes"
import SalesRoutes from "./routes/sales.routes"
import ImagesRoutes from "./routes/images.routes"

export class App {
    private app: Application
    
    constructor(private port?: number | string){
        this.app = express()
        this.settings()
        this.middlewares()
        this.routes()
    }
    settings(){
        this.app.set('port', this.port || process.env.PORT || 3000)
    }
    middlewares(){
        this.app.use(express.json())
        this.app.use(morgan('dev'))
    }
    routes(){
        this.app.use('/v1', IndexRoutes)
        this.app.use('/v1/products', ProductsRoutes)
        this.app.use('/v1/sales', SalesRoutes)
        this.app.use('/v1/images', ImagesRoutes)
    }
    async listen(){
        let PORT = this.app.get('port')
        await this.app.listen(PORT)
        console.log(`App running on port ${PORT}...`)
    }

}