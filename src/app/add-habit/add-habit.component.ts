import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-habit',
  templateUrl: './add-habit.component.html',
  styleUrls: ['./add-habit.component.scss']
})
export class AddHabitComponent implements OnInit {

  habitText = '';
  habits = [
    
  ];

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.displayHabitList();
  }

  openSnackBar(msg) {
    this._snackBar.open(msg);
  }

  public writeHabit(event){
    var habit = event.target.value;
    var habitList = [];
    habitList =  JSON.parse(localStorage.getItem('habitList'));
    if ( habitList && habitList.length > 0)
    {
      habitList.push({'id': habitList[habitList.length-1]['id'] + 1 , 'title': habit , 'status' : 0});
    }
    else{
      habitList = [ { 'id': 0 , 'title': habit, 'status': 0}];

    }
    localStorage.setItem('habitList', JSON.stringify(habitList));
    this.habitText = '';
    this.openSnackBar("New habit has been added");
    this.displayHabitList();
  }

  public displayHabitList()
  {
    console.log("Fetching habit list");
    this.habits =  JSON.parse(localStorage.getItem('habitList'));
    console.log(this.habits);

  }

  public removeHabit(habitId){
    console.log(habitId);
    console.log("will be removed");
    var habitList = [];
    habitList =  JSON.parse(localStorage.getItem('habitList'));
    this.habits = habitList.filter((habit) => habit.id !== habitId);
    localStorage.setItem('habitList', JSON.stringify(this.habits));

    
  }

}
