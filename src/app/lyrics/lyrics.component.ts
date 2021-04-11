import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Lyric } from '../lyrics';
import { LyricsService } from '../lyrics.service';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.css']
})
export class LyricsComponent implements OnInit {

  @Input('artist') artistName:string;
  @Input('song') songName:string;

  // lyrics: Lyric[];
  lyrics: {}; //Change type from Lyric[] -> Object

  constructor( private LyricsService: LyricsService) { }

  ngOnInit() {

    this.getLyrics();

  }

  getLyrics():void{
    this.LyricsService.getLyrics()
    .subscribe(lyrics => this.lyrics = lyrics); // *check what this does
  }


}

