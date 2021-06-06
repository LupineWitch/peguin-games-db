import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Publisher } from '../Models/publisher';
import { Distribution } from '../Models/distribution';
import { DataServiceService } from '../data-service.service';
import { NgForm } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-add-publisher',
  templateUrl: './add-publisher.component.html',
  styleUrls: ['./add-publisher.component.scss']
})
export class AddPublisherComponent implements OnInit {
  errorMessage: string = "";
  newPublisher: Publisher;
  @Input()
  publisherList: Publisher[] = [];
  @Output() addNewPublisher: EventEmitter<Publisher> = new EventEmitter()

  constructor(private dataService: DataServiceService) 
  {
    this.dataService.getPublishers().subscribe(publisher => {
      this.publisherList = publisher;
    });
  }

  ngOnInit(): void {
  }

  verifyData(formValues: NgForm): void {
    if(this.publisherList.find(x => x.name === formValues.name)){
      this.errorMessage = "publisher exists in the database"
      return;
    }
    
    this.errorMessage = "";
    this.newPublisher = formValues.value;
    this.addNewPublisher.emit(this.newPublisher);
    console.log(this.publisherList);
    console.log(this.newPublisher);
    console.log(formValues);
    console.log(this.errorMessage);

    console.log("add publisher event emitted");
  }

}
