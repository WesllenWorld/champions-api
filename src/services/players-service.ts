import { PlayerModel } from "../models/player-model"
import { StatisticsModel } from "../models/statistics-model"
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
        response = await httpResponse.badRequest()
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

export const deletePlayerService = async (id: number) => {
    let response = null

    const data = await playersRepository.findPlayerById(id)
    if (!data) {
        response = await httpResponse.noContent()
    } else {
        playersRepository.deletePlayer(id)
        response = await httpResponse.ok('Successfully deleted')
    }
    return response
}

export const updatePlayerService = async (id: number, bodyValue: StatisticsModel) => {
    let response = null
    const data = await playersRepository.findPlayerById(id)

    if (Object.keys(bodyValue).length === 0) {
        response = await httpResponse.badRequest()
    } else if (!data) {
        response = await httpResponse.noContent()
    } else {
        const updatedPlayer = await playersRepository.findAndUpdatePlayer(id, bodyValue)
        response = await httpResponse.ok(updatedPlayer)
    }

    return response
}