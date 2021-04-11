import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})

export class SearchformComponent implements OnInit {

  searchForm: FormGroup;
  submitted = false;
  artist: string;
  song: string;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.searchForm=this.formBuilder.group({
      name:"",
      song:""
    })

  }

  onSubmit(){

    this.submitted=true;

    //display form values

    alert('SUCCESS!! ' + JSON.stringify(this.searchForm.value) + this.searchForm.value["name"] +this.searchForm.value["song"]) 
    this.artist=this.searchForm.value["name"]; //Assign to Local Variable "artist"
    this.song=this.searchForm.value["song"]; //Assign to Local Variable "song"
    //Pass to lyrics.html

  }

  onReset(){

    this.submitted = false;
    this.searchForm.reset();

  }

}
