import { Injectable, ErrorHandler } from '@angular/core';
import axios, { AxiosInstance, AxiosError } from 'axios';
import { HttpErrorResponse } from '@angular/common/http';

export interface Params {
  [key: string]: any;
}

export interface GetOptions {
  url: string;
  params?: Params;
}

export interface ErrorResponse {
  id: string;
  code: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private axiosClient: AxiosInstance;

  constructor(
    private errorHandler: ErrorHandler
  ) {
    this.axiosClient = axios.create({
      timeout: 3000
    });
  }

  public async get<T>(options: GetOptions): Promise<T> {
    try {
      const axiosReponse = await this.axiosClient.request<T>({
        method: 'get',
        url: options.url,
        params: options.params
      });

      return axiosReponse.data;
    } catch (error) {
      return Promise.reject(this.normalizeError(error));
    }
  }

  private normalizeError(error: AxiosError): AxiosError {
    this.errorHandler.handleError(new HttpErrorResponse({
      error: error,
      headers: error.response.headers,
      status: error.response.status,
      statusText: error.response.statusText,
      url: error.response.config.baseURL,
    }));

    return error;
  }
}
