import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ContentsService {

  contentsBody: Object[]=[];

  translated: string;

  ngOnInit(){
    this.clear();
  }

  ngOnChanges(){
    this.clear();
  }

  add(contents: {}) {
    this.contentsBody.push(contents)
  }

  addTranslate(contents:string) {

    this.translated=contents;
    console.log("contents service/translated:  " + this.translated)
  
  }

  clear() {
    this.contentsBody = [];
    this.translated="";
  }

  // constructor() { }
}

