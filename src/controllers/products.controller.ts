import { Request, Response } from 'express'
import { connect } from '../dbconnection'

const table: string = 'medicines'

export async function getProducts(_req: Request, res: Response): Promise<Response> {
    const conn = await connect()
    const products = await conn.query(`SELECT * FROM ${table} WHERE quantity > 0`)
    const response = products[0] 
    return res.json(response)
}