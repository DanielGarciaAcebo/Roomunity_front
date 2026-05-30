// English comments: Shopping domain models shared by UI + API layer.

export type ShoppingDocKind = 'checklist' | 'note';

export interface ShoppingBase {
  id: string;
  title: string;
  kind: ShoppingDocKind;
  createdAt: string; // ISO
  updatedAt: string; // ISO
}

export interface ShoppingChecklistItem {
  id: string;
  text: string;
  qty: number;
  done: boolean;
}

export interface ShoppingChecklist extends ShoppingBase {
  kind: 'checklist';
  items: ShoppingChecklistItem[];
}

export interface ShoppingNote extends ShoppingBase {
  kind: 'note';
  text: string;
}

export type ShoppingDoc = ShoppingChecklist | ShoppingNote;

export interface ShoppingUiState {
  docs: ShoppingDoc[];
  selectedId: string | null;
  isLoading: boolean;
  error: string | null;
}
