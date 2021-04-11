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

  }
  
  ngOnChanges(){
    this.getLyrics();
  };

  getLyrics():void{
    console.log("lyrics artistName: " + this.artistName)
    console.log("lyrics songName: " + this.songName)
    this.LyricsService.getLyrics(this.artistName,this.songName)
    .subscribe(lyrics => this.lyrics = lyrics); // *check what this does
  }


}

