import { StatusCode } from "./http-status-code"
import { HttpResponse } from "../models/http-response-model"

export const ok = async (data: any): Promise<HttpResponse> => {
    return {
        statusCode: StatusCode.OK,
        body: data
    }
}

export const created = async (): Promise<HttpResponse> => {
    return {
        statusCode: StatusCode.CREATED,
        body: 'successful'
    }
}

export const noContent = async (): Promise<HttpResponse> => {
    return {
        statusCode: StatusCode.NO_CONTENT,
        body: 'no content'
    }
}

export const conflict = async (): Promise<HttpResponse> => {
    return {
        statusCode: StatusCode.CONFLICT,
        body: 'Already exists'
    }
}

export const badRequest = async (): Promise<HttpResponse> => {
    return {
        statusCode: StatusCode.BAD_REQUEST,
        body: 'bad request'
    }
}

export const notFound = async (): Promise<HttpResponse> => {
    return {
        statusCode: StatusCode.NOT_FOUND,
        body: 'not found'
    }
}
