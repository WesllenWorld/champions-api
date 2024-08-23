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

// src/services/clubs-service.ts
var clubs_service_exports = {};
__export(clubs_service_exports, {
  getClubsService: () => getClubsService
});
module.exports = __toCommonJS(clubs_service_exports);

// src/utils/http-helper.ts
var ok = (data) => __async(void 0, null, function* () {
  return {
    statusCode: 200 /* OK */,
    body: data
  };
});
var noContent = () => __async(void 0, null, function* () {
  return {
    statusCode: 204 /* NO_CONTENT */,
    body: "no content"
  };
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getClubsService
});
