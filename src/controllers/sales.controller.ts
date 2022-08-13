import { Request, Response } from 'express'
import { connect } from '../dbconnection'
import { Sale } from '../interfaces/sale.interface'

const table: string = 'sales'

export async function getSales(_req: Request, res: Response) {
    const conn = await connect()
    const sales = await conn.query(`SELECT * FROM ${table}`)
    const response = sales[0]
    return res.json(response)
}
export async function postSale(req: Request, res: Response) {
    const conn = await connect()
    const newSale: Sale = req.body
    await conn.query(`INSERT INTO ${table} SET ?`, [newSale])
    const response = {
        message: 'Sale stored'
    }
    return res.json(response)
}