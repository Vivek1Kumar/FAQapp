import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { question } from '../../model/questions';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions:question[];
  constructor(public dataservice: DataService) { 
   
  }

  ngOnInit() {
    this.questions = this.dataservice.getQuestion();
  }
  addQuestion(questions:question){
    console.log(questions);
    this.dataservice.addQuestion(questions);
  }
}
