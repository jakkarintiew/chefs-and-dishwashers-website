import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListItem } from 'src/app/model/ShoppingListItem';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css'],
})
export class ShoppingListItemComponent implements OnInit {
  @Input() shoppingListItem: ShoppingListItem;

  // Mainly used to import services
  constructor(private shoppingListService: ShoppingListService) {} // Firebase service and functions

  ngOnInit(): void {}

  // Set dynamic classes
  setClasses() {
    let classes = {
      item: true,
      'is-bought': this.shoppingListItem.bought,
    };

    return classes;
  }

  onToggle(shoppingListItem) {
    // Update UI
    // shoppingListItem.bought = !shoppingListItem.bought;
    // Update Firebase
    this.shoppingListService.updateShoppingListItem(
      shoppingListItem.key,
      !shoppingListItem.bought
    );
  }

  onDelete(shoppingListItem) {
    this.shoppingListService.deleteShoppingListItem(shoppingListItem.key);
  }
}
