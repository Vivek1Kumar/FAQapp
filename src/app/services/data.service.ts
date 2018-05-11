import { Injectable } from '@angular/core';
import { question } from '../model/questions';

@Injectable()
export class DataService {
  questions:question[];
  constructor() { 
    // this.questions = [
    //   {
    //     text:'What is Ur name?',
    //     answer: 'My name is Vivek',
    //     hide: true
    //   },
    //   {
    //     text:'What is Ur favorite color?',
    //     answer: 'My favorite color is bluelight',
    //     hide: true
    //   },
    //   {
    //     text:'What is Ur favorite lang?',
    //     answer: 'My fab lang is JS',
    //      hide: true
    //   }
    // ]
  }
  //Get Question from LS
  getQuestion(){
    if(localStorage.getItem('questions')==null){
      this.questions = [];
    }else{
     this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }
  addQuestion(questions:question){
    console.log(questions);
    this.questions.unshift(questions);
//Init local Var
  let questiones;


    if(localStorage.getItem('questions') === null){
      questiones = [];
      questiones.unshift(questiones);
      localStorage.setItem('question', JSON.stringify('question'));
    }else{
      questiones = JSON.parse(localStorage.getItem('questions'));
      //Add new question 
      questiones.unshift(questions);
      //Reset LS
      localStorage.setItem('questions', JSON.stringify(questions));
    
    }
  }
  //Remove Question form LS
  removeQuestion(question){
    for(let i=0;i<this.questions.length; i++){
      if(question==this.questions[i]){
        this.questions.splice(i,1);
      }
    }
  }

}
