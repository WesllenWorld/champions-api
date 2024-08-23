import { Request, Response } from 'express'
import * as clubsService from '../services/clubs-service'

export const getClubs = async (request: Request, response: Response) =>{
    const httpResponse = await clubsService.getClubsService()
    response.status(httpResponse.statusCode).json(httpResponse.body)
}

