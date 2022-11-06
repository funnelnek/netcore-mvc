export interface ICriteria<T> {
  limit?: number;
  skip?: number;
  page?: number;
  sort?: string[];
  entity: T;
}