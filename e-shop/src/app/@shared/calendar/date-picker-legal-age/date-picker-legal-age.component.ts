import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-date-picker-legal-age',
  templateUrl: './date-picker-legal-age.component.html',
  styleUrls: ['./date-picker-legal-age.component.scss']
})
export class DatePickerLegalAgeComponent implements OnInit { 
  model: NgbDateStruct;
  TODAY = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  };  
  minDate: NgbDateStruct = {
    year: this.TODAY.year - 100,
    month: this.TODAY.month,
    day: this.TODAY.day,
  };
  maxDate: NgbDateStruct = {
    year: this.TODAY.year - 18,
    month: this.TODAY.month,
    day: this.TODAY.day,
  };
  // model: NgbDateStruct = this.maxDate;
  @Output() newDate = new EventEmitter<NgbDateStruct>();
  constructor() { }

  ngOnInit(): void {
    console.log('%c constructor datePicker', 'color: red; font-weight: bold; font-size: 22px')
  }

  selectDateChange() {
    console.log('%c data a emitir:', 'color:red ; font-weight: bold;',this.model);
    this.newDate.emit(this.model);
  }
}
