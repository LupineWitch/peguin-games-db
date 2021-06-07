import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Publisher } from '../Models/publisher';

@Component({
  selector: 'app-edit-publisher',
  templateUrl: './edit-publisher.component.html',
  styleUrls: ['./edit-publisher.component.scss']
})
export class EditPublisherComponent implements OnInit {

  @Input() publisherList: Publisher[];
  @Input() selected: Publisher;

  @Output() selectPublishere: EventEmitter<Publisher> = new EventEmitter();
  @Output() editPublisher: EventEmitter<Publisher> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
