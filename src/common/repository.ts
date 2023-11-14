import * as fixtures from '@/common/fixtures';
import type { Repository } from '@/types/repository';

type FixtureKey = keyof typeof fixtures;

// Fixture
export class FixtureRepository<T> implements Repository<T> {
  private readonly _data: T[];

  constructor(key: FixtureKey) {
    this._data = fixtures[key] as T[];
  }

  getMany(): T[] {
    return this._data;
  }

  static get<T>(key: FixtureKey): T[] {
    return new FixtureRepository<T>(key).getMany();
  }
}