"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/repositories/players-repository.ts
var players_repository_exports = {};
__export(players_repository_exports, {
  addPlayer: () => addPlayer,
  deletePlayer: () => deletePlayer,
  findAllPlayers: () => findAllPlayers,
  findAndUpdatePlayer: () => findAndUpdatePlayer,
  findPlayerById: () => findPlayerById
});
module.exports = __toCommonJS(players_repository_exports);
var database = [
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
    name: "Kylian Mbapp\xE9",
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
];
var findAllPlayers = () => __async(void 0, null, function* () {
  return database;
});
var findPlayerById = (id) => __async(void 0, null, function* () {
  return database.find((player) => player.id === id);
});
var addPlayer = (newPlayer) => __async(void 0, null, function* () {
  database.push(newPlayer);
});
var deletePlayer = (id) => __async(void 0, null, function* () {
  const index = database.findIndex((player) => player.id === id);
  database.splice(index, 1);
});
var findAndUpdatePlayer = (id, bodyValue) => __async(void 0, null, function* () {
  const playerIndex = database.findIndex((player) => player.id === id);
  if (playerIndex !== -1) {
    database[playerIndex].statistics = bodyValue;
  }
  return database[playerIndex];
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addPlayer,
  deletePlayer,
  findAllPlayers,
  findAndUpdatePlayer,
  findPlayerById
});
