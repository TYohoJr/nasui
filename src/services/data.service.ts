import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  testApiService() {
    let myHeaders = new HttpHeaders();
    myHeaders.append('Authorization', 'Basic' + btoa('root:Festive9631'));
    let apiResponse = this.http.get(
      "https://192.168.0.10/api/v1.0/storage/volume",
      // {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': 'Basic' + btoa('root:Festive9631'),
      //     'Access-Control-Allow-Origin': '*'
      //   }
      // }
    );
    apiResponse.subscribe(data => {
      console.log(data);
    })
  }
}
