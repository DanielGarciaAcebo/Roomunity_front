import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { map } from 'rxjs';

import { ShoppingService } from '../../../../core/services/shopping.service';
import type { ShoppingDoc, ShoppingChecklist } from '../../models/shopping.model';

// ViewModel used by the template.
type ShoppingVm = {
  lists: ShoppingChecklist[];
  selected: ShoppingChecklist | null;
  isLoading: boolean;
  error: string | null;
};

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent {
  // Use inject() to avoid TS2729 (field initialization order issues).
  public readonly store = inject(ShoppingService);

  newItemName = '';
  newItemQty = 1;

  readonly vm$ = this.store.state$.pipe(
    map((state): ShoppingVm => {
      const lists = state.docs.filter((d): d is ShoppingChecklist => d.kind === 'checklist');

      const selectedDoc: ShoppingDoc | null = state.selectedId
        ? state.docs.find((d) => d.id === state.selectedId) ?? null
        : null;

      const selected = selectedDoc?.kind === 'checklist' ? selectedDoc : null;

      return {
        lists,
        selected,
        isLoading: state.isLoading,
        error: state.error,
      };
    })
  );

  createList(): void {
    const title = prompt('Nombre de la lista') ?? '';
    if (!title.trim()) return;

    this.store.createChecklist(title);
  }

  renameList(list: ShoppingChecklist): void {
    const title = prompt('Nuevo nombre', list.title) ?? '';
    if (!title.trim()) return;

    this.store.renameDoc(list.id, title);
  }

  deleteList(list: ShoppingChecklist): void {
    const ok = confirm(`Borrar "${list.title}"?`);
    if (!ok) return;

    this.store.deleteDoc(list.id);
  }

  addItem(listId: string): void {
    this.store.addItem(listId, this.newItemName, this.newItemQty);
    this.newItemName = '';
    this.newItemQty = 1;
  }
}
