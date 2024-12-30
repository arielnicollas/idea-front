import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../models/offer.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  constructor(private http: HttpClient) {}

  getOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${environment.apiUrl}/offers`);
  }

  getOffersByCategory(categoria: string): Observable<Offer[]> {
    const params = new HttpParams().set('categoria', categoria);
    return this.http.get<Offer[]>(`${environment.apiUrl}/offers`, { params });
  }

  createOffer(offer: FormData): Observable<Offer> { 
    return this.http.post<Offer>(`${environment.apiUrl}/offers/create`, offer);
  }

  

}