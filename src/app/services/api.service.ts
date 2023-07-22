import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
//  private url_api = 'https://freetogame.com/api/games';
  private textSub!: BehaviorSubject<string>;
  public textObservable!: Observable<string>;
 
 
  constructor(private http: HttpClient) { 
    this.textSub = new BehaviorSubject<string>('');
    this.textObservable = this.textSub.asObservable();

  }
  
  

  private url: string = environment.URL;
  private url_category: string = environment.URL_FILTER_CATEGORY;
  private api_key: string = environment.APIKEY;
  private api_host: string = environment.APIHOST;
 /* getData():  any {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '1c145db606msh23e3bd2d6f1064ap12f5eajsn753f05cbe59e',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
    
    return fetch(this.url,options).
    then(this.handleErrors);
  }
*/
  async getData(): Promise<Response> {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': this.api_key,
        'X-RapidAPI-Host': this.api_host
      }
    };
    const response = await fetch(this.url,options);
    return this.handleErrors(response);

  }
  async getDataByCategory(characters: string): Promise<Response> {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': this.api_key,
        'X-RapidAPI-Host': this.api_host
      }
    };
    const response = await fetch(this.url_category+characters,options);
    return this.handleErrors(response);

  }

  handleErrors(response: Response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  emitText(chars: string){
    this.textSub.next(chars);
   
  }
}