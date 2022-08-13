import { Request, Response } from 'express'
import { connect } from '../dbconnection'

const table: string = 'images'

export async function getImage(req: Request, res: Response) {
    const productId = req.params.productId
    const conn = await connect()
    const images = await conn.query(`SELECT * FROM ${table} WHERE medicine_id = ?`, [productId])
    const response = images[0]
    return res.json(response)
}