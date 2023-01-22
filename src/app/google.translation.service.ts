import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleTranslationService {

  constructor(private http:HttpClient) { }

  translate(model:any){
    return this.http.post("https://translation.googleapis.com/language/translate/v2?key=<apikey>",model);
  }
}
