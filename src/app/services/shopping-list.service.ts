import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShoppingListItem } from '../model/ShoppingListItem';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  itemsRef: AngularFireList<any>;
  items: Observable<ShoppingListItem[]>;

  constructor(private db: AngularFireDatabase) {
    // this.items = this.db.list<ShoppingListItem>('shopping_list').valueChanges();
    // Use snapshotChanges().map() to store the key
    this.itemsRef = db.list<ShoppingListItem>('shopping_list');
    this.items = this.itemsRef
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }

  getShoppingList(): Observable<ShoppingListItem[]> {
    return this.items;
  }

  updateShoppingListItem(itemKey: string, bought: boolean) {
    this.itemsRef.update(itemKey, { bought: bought });
  }

  deleteShoppingListItem(key: string) {
    this.itemsRef.remove(key);
  }

  addShoppingListItem(item) {
    this.itemsRef.update(item.key, item);
  }
}
