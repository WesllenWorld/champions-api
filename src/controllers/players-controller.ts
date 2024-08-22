import { Request, Response } from "express"
import * as playersService from "../services/players-service"
import { noContent } from "../utils/http-helper"

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
    } else {
        const responseNoContent = await noContent()
        response.status(responseNoContent.statusCode).json(responseNoContent.body)
    }

}