// libraries
import express, { Application } from 'express'
import morgan from 'morgan'
// routes

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
    }
    async listen(){
        let PORT = this.app.get('port')
        await this.app.listen(PORT)
        console.log(`App running on port ${PORT}...`)
    }

}