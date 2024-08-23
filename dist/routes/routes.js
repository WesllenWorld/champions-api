"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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

// src/routes/routes.ts
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});
module.exports = __toCommonJS(routes_exports);
var import_express = require("express");

// src/repositories/players-repository.ts
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

// src/utils/http-helper.ts
var ok = (data) => __async(void 0, null, function* () {
  return {
    statusCode: 200 /* OK */,
    body: data
  };
});
var created = () => __async(void 0, null, function* () {
  return {
    statusCode: 201 /* CREATED */,
    body: "successful"
  };
});
var noContent = () => __async(void 0, null, function* () {
  return {
    statusCode: 204 /* NO_CONTENT */,
    body: "no content"
  };
});
var conflict = () => __async(void 0, null, function* () {
  return {
    statusCode: 409 /* CONFLICT */,
    body: "Already exists"
  };
});
var badRequest = () => __async(void 0, null, function* () {
  return {
    statusCode: 400 /* BAD_REQUEST */,
    body: "bad request"
  };
});

// src/services/players-service.ts
var getPlayersService = () => __async(void 0, null, function* () {
  const data = yield findAllPlayers();
  let response = null;
  if (!data) {
    response = yield noContent();
  } else {
    response = yield ok(data);
  }
  return response;
});
var getPlayerByIdService = (id) => __async(void 0, null, function* () {
  const data = yield findPlayerById(id);
  let response = null;
  if (!data) {
    response = yield noContent();
  } else {
    response = yield ok(data);
  }
  return response;
});
var addPlayerService = (newPlayer) => __async(void 0, null, function* () {
  let response = null;
  if (Object.keys(newPlayer).length === 0) {
    response = yield badRequest();
  } else {
    const data = yield findPlayerById(newPlayer.id);
    if (data) {
      response = yield conflict();
    } else {
      yield addPlayer(newPlayer);
      response = yield created();
    }
  }
  return response;
});
var deletePlayerService = (id) => __async(void 0, null, function* () {
  let response = null;
  const data = yield findPlayerById(id);
  if (!data) {
    response = yield noContent();
  } else {
    deletePlayer(id);
    response = yield ok("Successfully deleted");
  }
  return response;
});
var updatePlayerService = (id, bodyValue) => __async(void 0, null, function* () {
  let response = null;
  const data = yield findPlayerById(id);
  if (Object.keys(bodyValue).length === 0) {
    response = yield badRequest();
  } else if (!data) {
    response = yield noContent();
  } else {
    const updatedPlayer = yield findAndUpdatePlayer(id, bodyValue);
    response = yield ok(updatedPlayer);
  }
  return response;
});

// src/controllers/players-controller.ts
var getPlayers = (request, response) => __async(void 0, null, function* () {
  const httpResponse = yield getPlayersService();
  response.status(httpResponse.statusCode).json(httpResponse.body);
});
var getPlayerById = (request, response) => __async(void 0, null, function* () {
  const id = parseInt(request.params.id);
  const httpResponse = yield getPlayerByIdService(id);
  response.status(httpResponse.statusCode).json(httpResponse.body);
});
var postPlayer = (request, response) => __async(void 0, null, function* () {
  const newPlayer = request.body;
  const httpResponse = yield addPlayerService(newPlayer);
  if (httpResponse) {
    response.status(httpResponse.statusCode).json(httpResponse.body);
  }
});
var updatePlayer = (request, response) => __async(void 0, null, function* () {
  const id = parseInt(request.params.id);
  const bodyValue = request.body;
  const httpResponse = yield updatePlayerService(id, bodyValue);
  response.status(httpResponse.statusCode).json(httpResponse.body);
});
var deletePlayer2 = (request, response) => __async(void 0, null, function* () {
  const id = parseInt(request.params.id);
  const httpResponse = yield deletePlayerService(id);
  response.status(httpResponse.statusCode).json(httpResponse.body);
});

// src/repositories/clubs-repository.ts
var import_promises = __toESM(require("fs/promises"));
var findAllClubs = () => __async(void 0, null, function* () {
  const data = yield import_promises.default.readFile("./src/data/clubs.json", "utf-8");
  const clubs = JSON.parse(data);
  return clubs;
});

// src/services/clubs-service.ts
var getClubsService = () => __async(void 0, null, function* () {
  const data = yield findAllClubs();
  let response = null;
  if (!data) {
    response = yield noContent();
  } else {
    response = yield ok(data);
  }
  return response;
});

// src/controllers/clubs-controller.ts
var getClubs = (request, response) => __async(void 0, null, function* () {
  const httpResponse = yield getClubsService();
  response.status(httpResponse.statusCode).json(httpResponse.body);
});

// src/routes/routes.ts
var router = (0, import_express.Router)();
router.get("/players", getPlayers);
router.get("/players/:id", getPlayerById);
router.post("/players", postPlayer);
router.delete("/players/:id", deletePlayer2);
router.patch("/players/:id", updatePlayer);
router.get("/clubs", getClubs);
var routes_default = router;
