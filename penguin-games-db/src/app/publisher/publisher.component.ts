import {  Component,  OnInit,  ɵCompiler_compileModuleSync__POST_R3__,} from '@angular/core';
import {Publisher} from "../Models/publisher"
import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.scss']
})
export class PublisherComponent implements OnInit {
  publisherList: Publisher[];
  selectedPublisher: Publisher;
  selected = false;
  newPublisher: Publisher;
  show = false;
  constructor(private dataService : DataServiceService) {  }

  ngOnInit(): void 
  {
    this.dataService.getPublishers().subscribe((publishers: Publisher[]) => {
      this.publisherList = publishers;
      console.log(publishers);
  });
}

onSelect(publisher: Publisher): void {
  if (publisher == null) this.show = false;
  if (!this.selected) {
    this.selectedPublisher = publisher;
  }
}

// add(publisher: Publisher): void {
//   let id;
//   if (this.publisherList.length == 0) id = 1;
//   else id = this.publisherList[this.publisherList.length - 1].id + 1;
//   publisher.id = id;
//   this.publisherList.push(publisher);
//   this.dataService.addPublisher(publisher).subscribe((x) => console.log(x));
// }

// delete(which: number): void {
//   let idx = this.publisherList.findIndex((x) => x.id == which);
//   this.publisherList.splice(idx, 1);
//   this.dataService.deletePublisher(which).subscribe((x) => console.log(x));
// }

// edit(publisher: Publisher): void {
//   console.log('edited publisher:' + publisher);
//   this.dataService.editPublisher(publisher.id, publisher).subscribe((x) => console.log(x));
// }


showEditForm(): void {
  this.show = true;
}

hideEditForm(): void {
  this.show = false;
}

}
