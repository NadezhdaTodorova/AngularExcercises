import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './item.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  providers: [ItemService]
})
export class ItemsComponent implements OnInit {

  selectedItem: Item;
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.itemSelected.subscribe(
      (item: Item) => {
        this.selectedItem = item;
      }
    );
  }
}
