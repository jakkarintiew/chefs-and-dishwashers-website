import { Component, OnInit } from '@angular/core';
import { ShoppingListItem } from '../../model/ShoppingListItem';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  shoppingList: ShoppingListItem[];

  // Mainly used to import services
  constructor(private shoppingListService: ShoppingListService) {} // Firebase service and functions

  // Use this function like a "constructor"
  ngOnInit(): void {
    // Load shopping list from Firebase
    this.shoppingListService.getShoppingList().subscribe((shoppingList) => {
      this.shoppingList = shoppingList;
    });
  }
}
