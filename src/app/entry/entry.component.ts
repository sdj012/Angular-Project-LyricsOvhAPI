import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})

export class EntryComponent implements OnInit {

  public lyricForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) 
    {}


  // artistControl= new FormControl('');
  // songControl= new FormControl('');

  // submitted = false;

  onSubmit() { 
    // this.submitted = true; 
    console.log("submitted: ", )
    // this.displayData();

  }

  displayData(){
    // console.log("this.lyricForm: ", this.lyricForm.value);
    // this.lyricForm.reset();
  }



  ngOnInit() {

  this.lyricForm = this.formBuilder.group({
    'artist': new FormControl(''),
    'song': new FormControl('')
  });

  }


}



