import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Aged Brie');
  });
  it('should decrease quality of regular items by 1', () => {
    const gildedRose = new GildedRose([new Item('Potatoes', 1, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
  it('should never decrease the quality below 0', () => {
    const gildedRose = new GildedRose([new Item('Potatoes', 1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
  it('should never lower the quality of Sulfuras, Hand of Ragnaros', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
  });
});
