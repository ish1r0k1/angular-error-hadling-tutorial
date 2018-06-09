import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClientService } from '../infrastructure/http-client.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

interface UserResponse {
  results: User[];
  info: any;
}

export interface User {
  name: { first: string; last: string; };
  picture: { large: string; };
}

@Injectable({
  providedIn: 'root'
})
export class UserRepository {

  constructor(
    private httpClient: HttpClientService,
    private errorHandler: ErrorHandler
  ) { }

  async random() {
    let url: string;

    // ランダムでエラーを起こす
    if (Math.random() * 1 > .5) {
      url = 'https://randomuser.me/api';
    } else {
      url = '/v1';
    }

    const response = await this.httpClient.get<UserResponse>({
      url
    });

    const { results: [user] } = response;
    return user;
  }
}
