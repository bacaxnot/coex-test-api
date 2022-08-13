import { Request, Response } from 'express'

export function getIndex(_req: Request, res: Response){
    return res.send('Welcome??')
}