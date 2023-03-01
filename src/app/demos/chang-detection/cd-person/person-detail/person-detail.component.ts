import {Component, Input, OnInit, AfterViewChecked} from '@angular/core';
import {ImPerson} from "../../../shared/modules/ImPerson";


@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

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
