import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Publisher } from '../Models/publisher';
@Component({
  selector: 'app-delete-publisher',
  templateUrl: './delete-publisher.component.html',
  styleUrls: ['./delete-publisher.component.scss']
})
export class DeletePublisherComponent implements OnInit {
  errorMessage: string = "";
  @Input() selected: Publisher;
  @Output() deletePublisher: EventEmitter<number> = new EventEmitter();
  


  constructor() { }

  ngOnInit(): void {
  }

  delete(): void {
    console.log(this.selected);
    this.deletePublisher.emit(this.selected.id);
  }

}
