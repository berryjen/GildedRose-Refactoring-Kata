import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Aged Brie');
  });
});
