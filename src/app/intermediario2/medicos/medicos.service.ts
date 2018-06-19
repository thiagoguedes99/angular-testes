import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  constructor(public http: HttpClient) { }

  getMedicos() {
    return this.http.get('.......');
  }
}
