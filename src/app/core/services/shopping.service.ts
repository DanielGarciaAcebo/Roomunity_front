import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import type {
  ShoppingUiState,
  ShoppingDoc,
  ShoppingChecklist,
  ShoppingChecklistItem,
} from '../../features/shopping-page/models/shopping.model';

@Injectable({ providedIn: 'root' })
export class ShoppingService {
  private readonly stateSubject = new BehaviorSubject<ShoppingUiState>({
    docs: [],
    selectedId: null,
    isLoading: false,
    error: null,
  });

  readonly state$ = this.stateSubject.asObservable();

  // Snapshot getter for internal updates.
  private get snapshot(): ShoppingUiState {
    return this.stateSubject.value;
  }

  // ---------- Selection ----------

  select(id: string): void {
    if (!this.snapshot.docs.some((d) => d.id === id)) return;
    this.setState({ ...this.snapshot, selectedId: id });
  }

  // ---------- Create / Update / Delete (Docs) ----------

  createChecklist(title: string): void {
    const now = new Date().toISOString();
    const doc: ShoppingChecklist = {
      id: this.id(),
      title: title.trim() || 'Nueva lista',
      kind: 'checklist',
      items: [],
      createdAt: now,
      updatedAt: now,
    };

    const docs = [doc, ...this.snapshot.docs];
    this.setState({ ...this.snapshot, docs, selectedId: doc.id });
  }

  // Optional: create note (if you want "text" docs later)
  createNote(title: string, text = ''): void {
    const now = new Date().toISOString();
    const doc: ShoppingDoc = {
      id: this.id(),
      title: title.trim() || 'Nueva nota',
      kind: 'note',
      text,
      createdAt: now,
      updatedAt: now,
    };

    const docs = [doc, ...this.snapshot.docs];
    this.setState({ ...this.snapshot, docs, selectedId: doc.id });
  }

  renameDoc(docId: string, title: string): void {
    const docs = this.snapshot.docs.map((d) => {
      if (d.id !== docId) return d;
      return { ...d, title: title.trim() || d.title, updatedAt: new Date().toISOString() };
    });

    this.setState({ ...this.snapshot, docs });
  }

  deleteDoc(docId: string): void {
    const docs = this.snapshot.docs.filter((d) => d.id !== docId);

    const selectedId =
      this.snapshot.selectedId === docId ? (docs[0]?.id ?? null) : this.snapshot.selectedId;

    this.setState({ ...this.snapshot, docs, selectedId });
  }

  // ---------- Checklist Items ----------

  addItem(listId: string, text: string, qty: number): void {
    const cleanText = text.trim();
    if (!cleanText) return;

    const safeQty = Number.isFinite(qty) && qty > 0 ? qty : 1;

    const docs = this.snapshot.docs.map((d) => {
      if (d.id !== listId) return d;
      if (d.kind !== 'checklist') return d;

      const item: ShoppingChecklistItem = {
        id: this.id(),
        text: cleanText,
        qty: safeQty,
        done: false,
      };

      return {
        ...d,
        items: [item, ...d.items],
        updatedAt: new Date().toISOString(),
      };
    });

    this.setState({ ...this.snapshot, docs });
  }

  toggleItem(listId: string, itemId: string): void {
    const docs = this.snapshot.docs.map((d) => {
      if (d.id !== listId) return d;
      if (d.kind !== 'checklist') return d;

      return {
        ...d,
        items: d.items.map((it) => (it.id === itemId ? { ...it, done: !it.done } : it)),
        updatedAt: new Date().toISOString(),
      };
    });

    this.setState({ ...this.snapshot, docs });
  }

  updateQty(listId: string, itemId: string, qty: number): void {
    const safeQty = Number.isFinite(qty) && qty > 0 ? qty : 1;

    const docs = this.snapshot.docs.map((d) => {
      if (d.id !== listId) return d;
      if (d.kind !== 'checklist') return d;

      return {
        ...d,
        items: d.items.map((it) => (it.id === itemId ? { ...it, qty: safeQty } : it)),
        updatedAt: new Date().toISOString(),
      };
    });

    this.setState({ ...this.snapshot, docs });
  }

  removeItem(listId: string, itemId: string): void {
    const docs = this.snapshot.docs.map((d) => {
      if (d.id !== listId) return d;
      if (d.kind !== 'checklist') return d;

      return {
        ...d,
        items: d.items.filter((it) => it.id !== itemId),
        updatedAt: new Date().toISOString(),
      };
    });

    this.setState({ ...this.snapshot, docs });
  }

  // ---------- Helpers ----------

  private setState(next: ShoppingUiState): void {
    this.stateSubject.next(next);
  }

  private id(): string {
    const c: any = globalThis as any;
    return typeof c.crypto?.randomUUID === 'function'
      ? c.crypto.randomUUID()
      : `${Date.now()}_${Math.random().toString(16).slice(2)}`;
  }
}
