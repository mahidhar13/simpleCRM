import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acomp',
  templateUrl: './acomp.component.html',
  styleUrls: ['./acomp.component.scss']
})
export class AcompComponent implements OnInit {
  studentData:any = {};
  constructor() { }
  studentDetails(event:any){
    console.log("Student details is", event);
    this.studentData = event;
    console.log('mahi', this.studentData);
  }

  ngOnInit(): void {
  }


}
