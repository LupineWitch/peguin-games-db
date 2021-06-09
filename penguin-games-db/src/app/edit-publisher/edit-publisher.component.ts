import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Publisher } from '../Models/publisher';

@Component({
  selector: 'app-edit-publisher',
  templateUrl: './edit-publisher.component.html',
  styleUrls: ['./edit-publisher.component.scss']
})
export class EditPublisherComponent implements OnInit {
  errorMessage: string;
  
  @Input() publisherList: Publisher[];
  @Input() selected: Publisher;

  @Output() selectPublisher: EventEmitter<Publisher> = new EventEmitter();
  @Output() editPublisher: EventEmitter<Publisher> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

    
  }

  verifyData(formValues: Publisher): void {
    this.errorMessage = "";
    let idx = this.publisherList.findIndex(x => x.id == this.selected.id);
    formValues.id = this.selected.id;
    this.publisherList[idx] = formValues;
    console.log(formValues);
    //this.selectPublisher.emit(undefined);
    this.editPublisher.emit(formValues);

  }

}
