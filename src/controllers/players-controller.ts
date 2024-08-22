import { Request, Response } from "express"
import * as playersService from "../services/players-service"
import { StatisticsModel } from "../models/statistics-model"


export const getPlayers = async (request: Request, response: Response) => {
    const httpResponse = await playersService.getPlayersService()
    response.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getPlayerById = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id)
    const httpResponse = await playersService.getPlayerByIdService(id)
    response.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postPlayer = async (request: Request, response: Response) => {
    const newPlayer = request.body
    const httpResponse = await playersService.addPlayerService(newPlayer)

    if (httpResponse) {
        response.status(httpResponse.statusCode).json(httpResponse.body)
    } 
}

export const updatePlayer = async (request:Request, response:Response) => {
    const id = parseInt(request.params.id)
    const bodyValue: StatisticsModel = request.body
    const httpResponse = await playersService.updatePlayerService(id, bodyValue)
    response.status(httpResponse.statusCode).json(httpResponse.body)

}

export const deletePlayer = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id)
    const httpResponse = await playersService.deletePlayerService(id)
    response.status(httpResponse.statusCode).json(httpResponse.body)
}