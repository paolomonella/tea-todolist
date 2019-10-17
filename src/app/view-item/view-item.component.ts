import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent implements OnInit {
  items: object[]
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        list: 'example',
        id: 1,
        title: 'Example title',
        description: 'a item in example list for the view model',
        completed: false
      }
    ]
  }

}
