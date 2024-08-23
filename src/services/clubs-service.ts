import * as httpResponse from "../utils/http-helper"
import * as clubsRepository from "../repositories/clubs-repository"


export const getClubsService = async () => {
    const data = await clubsRepository.findAllClubs()
    let response = null

    if (!data) {
        response = await httpResponse.noContent()
    } else {
        response = await httpResponse.ok(data)
    }

    
    
    return response
}