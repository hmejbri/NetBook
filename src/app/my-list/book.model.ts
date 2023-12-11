export interface IBookDetails {
  title: string;
  isbn_10?: string;
  subjects?: string[];
  description?: { value: string };
}

export interface ISearchBook {
  docs: [];
}

export interface IBookKey {
  key: string;
}
