import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnChanges,
  OnInit
} from '@angular/core';
import {ImPerson} from "../shared/modules/ImPerson";


@Component({
  selector: 'app-chang-detection',
  templateUrl: './chang-detection.component.html',
  styleUrls: ['./chang-detection.component.css']
})
export class ChangeDetectionComponent implements OnInit, OnChanges, DoCheck, AfterViewChecked {

  person: ImPerson = new ImPerson('Bob', 22);

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
  }
  ngOnChanges() {
    console.log(new Date() + '- ngOnChanges in cd');
  }

  ngDoCheck() {
    console.log(new Date() + '- ngDoCheck in cd');
  }

  ngAfterViewChecked() {
    console.log(new Date() + '- ngAfterViewChecked in cd');
  }

  addAge() {
    // this.person.age++;
    // this.cd.markForCheck();
    let newAge = this.person.age;
    this.person = this.person.merge({ 'age': ++newAge }) as ImPerson;
    console.log(this.person.age);
  }

  updateAge() {
    this.person = { ...this.person, age: ++this.person.age };
  }
}
