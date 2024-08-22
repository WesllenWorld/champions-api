import { PlayerModel } from "../models/player-model"

const database: PlayerModel[] = [
    {
      id: 1,
      name: "Robert Lewandowski",
      club: "FC Barcelona",
      nationality: "Polish",
      position: "Striker",
      statistics: {
        overall: 91,
        pace: 78,
        shooting: 93,
        passing: 81,
        dribbling: 85,
        defending: 43,
        physical: 82
      }
    },
    {
      id: 2,
      name: "Kevin De Bruyne",
      club: "Manchester City",
      nationality: "Belgian",
      position: "Midfielder",
      statistics: {
        overall: 91,
        pace: 76,
        shooting: 86,
        passing: 93,
        dribbling: 88,
        defending: 60,
        physical: 78
      }
    },
    {
      id: 3,
      name: "Virgil van Dijk",
      club: "Liverpool",
      nationality: "Dutch",
      position: "Defender",
      statistics: {
        overall: 90,
        pace: 75,
        shooting: 60,
        passing: 71,
        dribbling: 70,
        defending: 92,
        physical: 86
      }
    },
    {
      id: 4,
      name: "Kylian Mbappé",
      club: "Paris Saint-Germain",
      nationality: "French",
      position: "Forward",
      statistics: {
        overall: 92,
        pace: 97,
        shooting: 89,
        passing: 80,
        dribbling: 92,
        defending: 36,
        physical: 77
      }
    },
    {
      id: 5,
      name: "Joshua Kimmich",
      club: "Bayern Munich",
      nationality: "German",
      position: "Midfielder",
      statistics: {
        overall: 89,
        pace: 70,
        shooting: 70,
        passing: 86,
        dribbling: 82,
        defending: 84,
        physical: 79
      }
    }
  ]
  

export const findAllPlayers = async ():Promise<PlayerModel[]> => {
    return database
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined>  => {
    return database.find(player => player.id === id)

}

export const addPlayer = async (newPlayer: PlayerModel) => {
    database.push(newPlayer)
}