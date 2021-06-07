import { animate, sequence, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataServiceService } from '../data-service.service';
import { Distribution } from '../Models/distribution';

@Component({
  selector: 'app-distributions',
  templateUrl: './distributions.component.html',
  styleUrls: ['./distributions.component.scss'],
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
export class DistributionsComponent implements OnInit {

  displayedColumns: string[] = 
    ['id', 'name', 'version', 'kernelVersion', 'actions'];
  distributionList: Distribution[] = [];
  dataSource: MatTableDataSource<Distribution>;
  addButtonShow = true;
  selected = false;
  selectedDistribution: Distribution;
  addFormShow = false;
  displayEditForm = false;
  prevDistributionId = 0;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('searchInput') searchInput: any;

  constructor(private dataService: DataServiceService) 
  {
    this.dataService.getDistributions().subscribe(distributions => {
      this.distributionList = distributions;
      this.dataSource = new MatTableDataSource(this.distributionList);
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit(): void { }

  clear()
  {
    this.search('');
    this.searchInput.nativeElement.value = '';
  }

  search(value: string)
  {
    // this.value = value;
    this.dataSource.filter = value.trim().toLowerCase();
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

  onSelect(distribution: Distribution): void 
  {
    if (distribution == null) this.displayEditForm = false;
    if (!this.selected) {
      this.selectedDistribution = distribution;
    }
  }

  updateEditVisibility(distribution: Distribution): void // Edit
  {
    this.selectedDistribution != undefined ? this.prevDistributionId = this.selectedDistribution.id : -1;
    this.onSelect(distribution);

    if (this.displayEditForm)
    {
      if (this.prevDistributionId == this.selectedDistribution.id) 
        this.displayEditForm = false;
    }
    else
    {
      this.displayEditForm = true;
    }
  }
}
