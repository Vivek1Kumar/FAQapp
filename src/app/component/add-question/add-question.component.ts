import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { question } from '../../model/questions';


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  text:string;
  answer:string;
  
 @Output() questionAdded = new EventEmitter<question>();

 

  constructor() { }

  ngOnInit() {
  }
addQuestion(){
  return this.questionAdded.emit({text:this.text, answer:this.answer, hide:true});
}
}
