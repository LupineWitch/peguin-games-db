import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core'
import { Distribution } from '../Models/distribution';

@Component({
  selector: 'app-edit-distribution',
  templateUrl: './edit-distribution.component.html',
  styleUrls: ['./edit-distribution.component.scss']
})
export class EditDistributionComponent implements OnInit {
  errorMessage:String;

  @Input() distributionList: Distribution[];
  @Input() selected: Distribution;

  @Output() selectDistribution: EventEmitter<Distribution> = new EventEmitter();
  @Output() editDistribution: EventEmitter<Distribution> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  verifyData(formValues: Distribution): void {
    this.errorMessage = "";
    let idx = this.distributionList.findIndex(x => x.id == this.selected.id);
    formValues.id = this.selected.id;
    this.distributionList[idx] = formValues;
    console.log(formValues);
    this.selectDistribution.emit(undefined);
    this.editDistribution.emit(formValues);
    console.log("edit event emitted");
    console.log("error message");
  }

}
