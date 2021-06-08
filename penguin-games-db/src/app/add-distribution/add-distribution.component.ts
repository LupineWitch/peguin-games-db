import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Distribution } from '../Models/distribution';
import { DataServiceService } from '../data-service.service';
import { NgForm } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-add-distribution',
  templateUrl: './add-distribution.component.html',
  styleUrls: ['./add-distribution.component.scss']
})
export class AddDistributionComponent implements OnInit {

  errorMessage: string = "";
  newDistribution: Distribution;
  @Input()
  distributionList: Distribution[] = [];
  @Output() addNewDistribution: EventEmitter<Distribution> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  verifyData(formValues: NgForm): void {
    if(this.distributionList.find(x => x.name === formValues.name)){
      this.errorMessage = "distribution exists in the database"
      return;
    }
    
    this.errorMessage = "";
    this.newDistribution = formValues.value;
    this.addNewDistribution.emit(this.newDistribution);
    console.log(this.newDistribution);
    console.log(formValues);
    console.log(this.errorMessage);

    console.log("add newDistribution event emitted");
  }

}
