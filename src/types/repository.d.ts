export interface Repository<T> {
  getMany(): T[];
}