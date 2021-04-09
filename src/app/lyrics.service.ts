import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ContentService } from './content.service';
import{ catchError,map,tap} from 'rxjs/operators';

import { Lyric } from './lyrics';



@Injectable({
  providedIn: 'root'
})

export class LyricsService {

  private lyricsUrl= 'https://api.lyrics.ovh/v1/Justin%Bieber/Peaches'; //URL to web api https://api.lyrics.ovh/v1/artist/title


  constructor(
    private http: HttpClient,
    private contentService: ContentService,
    
   ) { }


  private log(contents: string) {
  this.contentService.add(`Lyricservice: ${contents}`);
  }


  private HandleError<T>(operation = 'operation', result?:T){

    return(error:any): Observable<T> => {
      
      //TODO:send error to remote logging infra
      
      console.error(error);//log to console 
      
      // TODO: better job of transforming error for user consumption
      
      this.log('${operation} failed: ${error.message}')
      
      return of(result as T);
    }
  }
  
  getLyrics(): Observable<Lyric[]> {
    return this.http.get<Lyric[]>(this.lyricsUrl)
    .pipe(
      tap(_ => this.log('fetched lyrics')),
      catchError(this.HandleError<Lyric[]>('getLyrics',[]))
    )
  } 

  }

