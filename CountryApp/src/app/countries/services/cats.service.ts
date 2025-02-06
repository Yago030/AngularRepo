import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Breed } from '../interfaces/cats'; // Asegúrate de tener tu interfaz correcta

@Injectable({ providedIn: 'root' })
export class CatService {
  private apiUrl: string = 'https://api.thecatapi.com/v1';

  constructor(private http: HttpClient) {}

  // Obtener todas las razas
  getAllBreeds(): Observable<Breed[]> {
    const url = `${this.apiUrl}/breeds`; // Endpoint para obtener todas las razas
    return this.http.get<Breed[]>(url);
  }

  // Obtener imágenes de gatos con razas
  getCatImages(limit: number = 10): Observable<any[]> {
    const url = `${this.apiUrl}/images/search?limit=${limit}&has_breeds=1`; // Endpoint para obtener imágenes
    return this.http.get<any[]>(url);
  }
}
