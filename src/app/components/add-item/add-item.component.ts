import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ShoppingListService } from '../../services/shopping-list.service';
import { ShoppingListItem } from 'src/app/model/ShoppingListItem';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  @Output() addItem: EventEmitter<any> = new EventEmitter();
  item_name: string;

  constructor(private shoppingListService: ShoppingListService) {} // Firebase service and functions

  ngOnInit(): void {}

  onSubmit(): void {
    const item = {
      item_name: this.item_name,
      bought: false,
      key: this.item_name.replace(' ', '_').toLowerCase(),
    };

    this.shoppingListService.addShoppingListItem(item);
  }
}
