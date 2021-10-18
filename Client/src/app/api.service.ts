import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_API_URL = 'http://localhost:5000/api/';
  private username: string = 'demo';
  private password: string = 'enablex';
  constructor(private httpClient: HttpClient) {}

  public createRoom() {
    return this.httpClient.get('http://localhost:5000/api/create-room');
  }

  public getAuthToken({ tokenData }) {
    return this.httpClient.post('http://localhost:5000/api/create-token', tokenData, {
     
    });
  }

  public getRoomData({ roomId }) {
    return this.httpClient.get('http://localhost:5000/api/get-room/'+roomId)
  }
}
