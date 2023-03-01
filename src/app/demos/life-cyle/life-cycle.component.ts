import { Component, OnInit } from '@angular/core';
import {Person} from "../shared/modules/person";


@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {
  person: Person = {
    name: 'Bob',
    age: 20
  };

  constructor() { }

  ngOnInit(): void {
  }

  changePerson(){
    this.person = new Person('Alice',22);
  }
  changePersonName(){
    this.person.name = 'Alex';
  }

}
