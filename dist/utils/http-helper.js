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

// src/utils/http-helper.ts
var http_helper_exports = {};
__export(http_helper_exports, {
  badRequest: () => badRequest,
  conflict: () => conflict,
  created: () => created,
  noContent: () => noContent,
  notFound: () => notFound,
  ok: () => ok
});
module.exports = __toCommonJS(http_helper_exports);
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
var notFound = () => __async(void 0, null, function* () {
  return {
    statusCode: 404 /* NOT_FOUND */,
    body: "not found"
  };
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  badRequest,
  conflict,
  created,
  noContent,
  notFound,
  ok
});
