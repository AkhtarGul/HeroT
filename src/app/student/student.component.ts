import { Component, OnInit } from '@angular/core';
import { Student } from '../Model/student';
import { STUDENT } from './DumyStudent';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }
sName1:string='AtifUllah'
sName2:string='Zaryab'
dummyStudentList:any;
  ngOnInit(): void {
  this.dummyStudentList  =STUDENT;
  }
  selectedStudent!:Student;
  onSelect(s:Student){
this.selectedStudent =s;
  }
  // sList:Student[]=[
  //   {
  //     rollNo:1,
  //     name:'jack',
  //     marks:123,
  //   },
  //   {
  //     rollNo:2,
  //     name:'make',
  //     marks:124,
  //   },
  //   {
  //     rollNo:3,
  //     name:'camron',
  //     marks:123,
  //   },
  // ]
}
