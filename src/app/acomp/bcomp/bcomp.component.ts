import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-bcomp',
  templateUrl: './bcomp.component.html',
  styleUrls: ['./bcomp.component.scss']
})
export class BcompComponent implements OnInit {

  @Input() firstName:string = '';
  @Output() studentLoginDetails = new EventEmitter;

  constructor() { }

  ngOnInit(): void {}

  studentData(){
    const studentDetails: any = {
      studentName: 'Mihira',
      studentMama: 'Mahi'
    }
    this.studentLoginDetails.emit(studentDetails);
  }
}
