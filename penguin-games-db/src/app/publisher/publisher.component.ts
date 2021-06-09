import {  Component,  OnInit,  ViewChild,  ɵCompiler_compileModuleSync__POST_R3__,} from '@angular/core';
import {Publisher} from "../Models/publisher"
import {DataServiceService} from '../data-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { animate, sequence, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [  
        style({opacity:0}),
        animate(500, style({opacity:1})) 
      ]),
      transition(':leave', [ 
        animate(500, style({opacity:0})) 
      ])
    ]), 
    trigger('rowsAnimation', [
      transition('void => *', [
        style({ height: '*', opacity: '0', transform: 'translateX(-550px)', 'box-shadow': 'none' }),
        sequence([
          animate(".25s ease", style({ height: '*', opacity: '.2', transform: 'translateX(0)', 'box-shadow': 'none'  })),
          animate(".25s ease", style({ height: '*', opacity: 1, transform: 'translateX(0)' }))
        ])
      ])
    ])
  ]
})

export class PublisherComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'isIndie', 'actions'];
  value:String;
  dataSource: MatTableDataSource<Publisher>;
  publisherList: Publisher[];
  selectedPublisher: Publisher;
  selected = false;
  newPublisher: Publisher;
  show = false;
  addButtonShow = true;
  addFormShow = false;
  prevPublisherId = 0;
  displayEditForm = false;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('searchInput') searchInput: any;

  constructor(private dataService : DataServiceService) 
  {  
    this.dataService.getPublishers().subscribe((publishers: Publisher[]) => {
      this.publisherList = publishers;
      console.log(publishers);
      this.dataSource = new MatTableDataSource(this.publisherList);
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit(): void { }

  onSelect(publisher: Publisher): void 
  {
    if (publisher == null) this.show = false;
    if (!this.selected) {
      this.selectedPublisher = publisher;
    }
  }

  search(value: string)
  {
      this.value = value;
    this.dataSource.filter = value.trim().toLowerCase();
  }

  clear()
  {
    this.search('');
    this.searchInput.nativeElement.value = '';
  }

  add(publisher: Publisher): void 
  {
    let id;
    if (this.publisherList.length == 0) id = 1;
    else id = this.publisherList[this.publisherList.length - 1].id + 1;
    publisher.id = id;
    this.publisherList.push(publisher);
    this.dataService.addPublisher(publisher).subscribe((x) => console.log(x));
    this.dataSource._updateChangeSubscription();
  }

  delete(which: number): void 
  {
    let idx = this.publisherList.findIndex((x) => x.id == which);
    this.publisherList.splice(idx, 1);
    this.dataService.deletePublisher(which).subscribe((x) => console.log(x));
    this.dataSource._updateChangeSubscription();
  }

  edit(publisher: Publisher): void 
  {
    console.log('edited publisher:' + publisher);
    this.dataService.editPublisher(publisher.id, publisher).subscribe((x) => console.log(x));
    this.dataSource._updateChangeSubscription();
    this.displayEditForm = false;
  }

  showAddForm(): void 
  {
    this.addButtonShow = false;
    this.addFormShow = true;
  }

  hideAddForm(): void 
  {
    this.addButtonShow = true;
    this.addFormShow = false;
  }

  updateEditVisibility(publisher: Publisher): void
  {
    this.selectedPublisher != undefined ? this.prevPublisherId = this.selectedPublisher.id : -1;
    this.onSelect(publisher);

    if (this.displayEditForm)
    {
      if (this.prevPublisherId == this.selectedPublisher.id) 
        this.displayEditForm = false;
    }
    else
    {
      this.displayEditForm = true;
    }
  }
}
