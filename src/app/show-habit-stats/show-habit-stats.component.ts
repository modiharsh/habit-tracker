import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-habit-stats',
  templateUrl: './show-habit-stats.component.html',
  styleUrls: ['./show-habit-stats.component.scss']
})
export class ShowHabitStatsComponent implements OnInit {

  habits = [
    
  ];

  constructor() { }

  ngOnInit(): void {
    this.loadHabits();
  }

  public loadHabits(){
   
    var habitList =  JSON.parse(localStorage.getItem('habitList'));
    habitList.forEach(habit => {
      var hid = "habit" + habit.id;
      var count = JSON.parse(localStorage.getItem(hid));
      if(!count){
        count = 0;
      }
      
      this.habits.push({'id': habit.id, 'title': habit.title , 'count': count});
      this.habits.sort( function compare( a, b ) {
          if ( a.count < b.count ){
            return 1;
          }
          if ( a.count > b.count ){
            return -1;
          }
          return 0;
        }
        
      );
      
    });
    
    
  }


}
