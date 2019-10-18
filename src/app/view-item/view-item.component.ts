import { Component } from '@angular/core';

interface itemTodo{
  list:string;
  id:number;
  title:string;
  description?: string;
  completed: boolean;
}

@Component({
  selector: 'view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})

export class ViewItemComponent {

  items: itemTodo = {
    list: 'example',
    id: 1,
    title: 'Example title',
    description: 'a item in example list for the view model',
    completed: false,
  }

  constructor(
  ){

  }

}
