import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'habit-tracker';

  date = new FormControl(new Date());
  today = new Date();
  todaydate = '' + ( this.today.getMonth() +1 )+ '.' + this.today.getDate() + '.' + this.today.getFullYear();
  selectedDate = this.todaydate;

  habits = [
    {'id':1 ,'title':'Read Books','status':1}, 
    {'id':2 ,'title':'Workout','status':0},
  ];

  public toggleHabitButton(id){
      
      this.habits[id-1].status = this.habits[id-1].status ==  0 ? 1 : 0;
      localStorage.setItem(this.selectedDate, JSON.stringify(this.habits));
  }

  public addHabit(event){
    var newHabit = event.target.value;
    if ( this.habits) {
      this.habits.push({'id': this.habits.length + 1, 'title': newHabit, 'status':0 });
    }
    else{
      this.habits = [ {'id': 1, 'title': newHabit, 'status':0 }]
    }
    localStorage.setItem(this.selectedDate, JSON.stringify(this.habits));
    console.log(this.habits);
  }

  public dateChanged(event){
    this.selectedDate = '' + ( event.value.getMonth() +1 )+ '.' + event.value.getDate() + '.' + event.value.getFullYear();
    console.log(this.selectedDate);
    var habitStatus = JSON.parse(localStorage.getItem(this.selectedDate));
    console.log(habitStatus);
    console.log(this.habits);
    if (habitStatus == null){
      this.habits.forEach(habit => {
        habit.status = 0
      });
    }
    else{
      this.habits = habitStatus;
    }
    console.log(this.habits);
  }

  public readStorage(){
    console.log(localStorage.getItem('a'));
  }

  public getTodayDate(){
    var d = new Date();
    
  }
}

