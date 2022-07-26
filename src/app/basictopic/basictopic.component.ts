import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basictopic',
  templateUrl: './basictopic.component.html',
  styleUrls: ['./basictopic.component.css']
})
export class BasictopicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  //Two Binding

  teacherName:string='';

  onClickTeacher(name:any){
    this.teacherName=name.value;
  }
}
