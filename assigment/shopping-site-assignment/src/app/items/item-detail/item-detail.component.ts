import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
   item: Item;
   id: number;
   itemAdded = false;

  constructor(private route: ActivatedRoute, private itemService: ItemService,
    private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.item = this.itemService.getItem(this.id);
        }
      );
  }

  onSelect(){
    this.shoppingCartService.shoppingCart.push(this.item);
    this.itemAdded = true;
  }
}
