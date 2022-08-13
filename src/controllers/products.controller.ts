import { Request, Response } from 'express'
import { connect } from '../dbconnection'

const table: string = 'medicines'

export async function getProducts(_req: Request, res: Response) {
    const conn = await connect()
    const products = await conn.query(`SELECT * FROM ${table}`)
    return res.json(products[0])
}