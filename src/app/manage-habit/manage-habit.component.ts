import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-manage-habit',
  templateUrl: './manage-habit.component.html',
  styleUrls: ['./manage-habit.component.scss']
})
export class ManageHabitComponent implements OnInit {

  title = 'habit-tracker';

  date = new FormControl(new Date());
  today = new Date();
  todaydate = '' + ( this.today.getMonth() +1 )+ '.' + this.today.getDate() + '.' + this.today.getFullYear();
  selectedDate = this.todaydate;
  habitText = '';
  habits = [
    
  ];

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadHabits();
  }

  

  public toggleHabitButton(id){
      for( let i=0;i< this.habits.length;i++){
        if(this.habits[i]['id'] == id){
         
          if(this.habits[i]['status'] == 0) {
           this.habits[i]['status'] = 1;
           var habitStreak = JSON.parse(localStorage.getItem("habit"+id)); 
           if(habitStreak)
           {
             habitStreak = habitStreak + 1;
             localStorage.setItem("habit"+id, JSON.stringify(habitStreak));
           }
           else{
            localStorage.setItem("habit"+id, JSON.stringify(1));
           }
          }
          else{
            this.habits[i]['status'] = 0;
            var habitStreak = JSON.parse(localStorage.getItem("habit"+id)); 
            if(habitStreak)
            {
              habitStreak = habitStreak - 1;
              localStorage.setItem("habit"+id, JSON.stringify(habitStreak));

            }
          }
          console.log(this.habits[i]['status']);
        }

      }
    
      //this.habits.forEach( function(habit) { if ( habit.id == id ){ habit.status == 0 ? 1 : 0; }} );
      //his.habits[id-1].status = this.habits[id-1].status ==  0 ? 1 : 0;
      localStorage.setItem(this.selectedDate, JSON.stringify(this.habits));
  }

  public dateChanged(event){
    this.selectedDate = '' + ( event.value.getMonth() +1 )+ '.' + event.value.getDate() + '.' + event.value.getFullYear();
    this.loadHabits();
    
  }

  public loadHabits(){
    console.log(this.selectedDate);
    var habitStatus = JSON.parse(localStorage.getItem(this.selectedDate));
    console.log(habitStatus);
    var habitList = [];
    habitList =  JSON.parse(localStorage.getItem('habitList'));
    if (habitStatus == null){
      
      this.habits = habitList;
      if(habitList){
        localStorage.setItem(this.selectedDate, JSON.stringify(habitList));
      }
    }
    else{
      this.habits = habitStatus;
    }
    console.log(this.habits);
  }



  public getTodayDate(){
    var d = new Date();
    
  }

}
