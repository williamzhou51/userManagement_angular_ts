import {Component, Input, OnInit} from '@angular/core';
import {ImPerson} from "../../shared/modules/ImPerson";


@Component({
  selector: 'app-cd-person',
  templateUrl: './cd-person.component.html',
  styleUrls: ['./cd-person.component.css']
})
export class CdPersonComponent implements OnInit {
  @Input()
  person: ImPerson | any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(new Date() + '- ngOnChanges in person-detail');
  }

  ngDoCheck() {
    console.log(new Date() + '- ngDoCheck in person-detail');
  }

  ngAfterViewChecked() {
    console.log(new Date() + '- ngAfterViewChecked in person-detail');
  }

}
