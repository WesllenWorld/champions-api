import {Request, Response} from "express"
import { StatusCode } from "../utils/http-status-code"


export const getPlayer = (request: Request, response: Response) => {
    response.status(StatusCode.OK).json({
        player: 'klose'
    })
    
}