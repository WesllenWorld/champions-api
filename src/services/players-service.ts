import { PlayerModel } from "../models/player-model"
import * as playersRepository from "../repositories/players-repository"
import * as httpResponse from "../utils/http-helper"


export const getPlayersService = async () => {
    const data = await playersRepository.findAllPlayers()
    let response = null

    if (!data) {
        response = await httpResponse.noContent()
    } else {
        response = await httpResponse.ok(data)
    }

    return response
}

export const getPlayerByIdService = async (id: number) => {
    const data = await playersRepository.findPlayerById(id)
    let response = null

    if (!data) {
        response = await httpResponse.noContent()
    } else {
        response = await httpResponse.ok(data)
    }

    return response
}

export const addPlayerService = async (newPlayer: PlayerModel) => {
    let response = null

    if (Object.keys(newPlayer).length === 0) {
        response = httpResponse.badRequest()
    } else {
        const data = await playersRepository.findPlayerById(newPlayer.id)

        if (data) {
            response = await httpResponse.conflict()
        } else {
            await playersRepository.addPlayer(newPlayer)
            response = await httpResponse.created()
        }
    }
    return response

}