import { Component, Injectable, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';

@Injectable({ providedIn: 'root' })

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  peoplelist:any=[];

  constructor(private _peopleService: PeopleService) { }

  ngOnInit(): void {
    this._peopleService.peoplelist().subscribe(result=>{
      this.peoplelist=result;
    });
    // .subscribe(result=>{
    //   this.peoplelist=result;
    // })
  }

}
