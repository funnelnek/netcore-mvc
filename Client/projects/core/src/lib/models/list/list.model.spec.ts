import { describe, expect, it, beforeEach, afterEach } from '@jest/globals';
import { GreaterThan } from '../../specifications/GreaterThan';
import { List } from './list.model';


describe("List Class", () => {
    let nums: number[];
    let list: List<number>;
    let completed = { value: undefined, done: true };

    beforeEach(() => {
        nums = [1, 2, 3, 4, 5, 6];
        list = new List<number>(nums);
    });

    afterEach(() => {
        list.clear();
    });

    describe("constructor()", () => {
        it("should take no parameter with a default length of zero", () => {
            let list: List<number> = new List<number>();
            expect(list.length).toBe(0);
        });
    
        it("should take an indexable object and iterate over it setting index and value", () => {
            expect(list.length).toBe(6);
            expect(list[0]).toBe(1);
            expect(list[1]).toBe(2);
            expect(list[2]).toBe(3);
            expect(list[3]).toBe(4);
            expect(list[4]).toBe(5);
            expect(list[5]).toBe(6);
        });
    
        it("should be an iterable", () => {
            let i: number = 0;
    
            for(let n of list) {
                expect(n).toBe(nums[i]);
                i++;
            }
        });
        
    
        it("should return the same values given in the constructor", () => {        
            let strings = ['Hello', 'World', 'How', 'Are', 'You'];
            let words = new List<string>(strings);
    
            expect(list.values()).toEqual(nums);
            expect(words.values()).toEqual(strings);
        });
    });

    describe("keys()", () => {
        it("should return all defined indexes. Unassigned slots aren't included", () => {
            let numsKeys = Object.keys(nums);

            expect(list.keys().map(n => n.toString())).toEqual(numsKeys);
        });
    });

    describe("values()", () => {
        it("should return values from the collection", () => {
            expect(list.values()).toEqual(nums);
        });
    });

    describe("toArray()", () => {
        it("should convert the collection to an array. Includes unassigned slots between assigned slots", () => {
            let collection = new List<number>();

            expect(list.toArray()).toEqual(nums);

            collection[0] = 1;
            collection[2] = 2;
            collection[4] = 3;
            collection[6] = 4;
            collection[8] = 5;

            expect(collection.toArray()).toEqual([1, undefined, 2, undefined, 3, undefined, 4, undefined, 5]);

        });
    });

    describe("reverse()", () => {
        it("should reverse the elements in the collection", () => {      
            expect(list.reverse().toArray()).toEqual(nums.reverse());
        })
    });

    describe("push()", () => {
        it("should add item to the end of the collection", () => {
            list.push(7);
            expect(list.at(-1)).toBe(7);
            expect(list.toArray()).toEqual([1, 2, 3, 4, 5, 6, 7]);            
        });
    });

    describe("filter()", () => {
        it("should return element which satisfies a predicate", () => {
            let collection: List<number> = list.filter(n => n > 4);
            expect(collection.toArray()).toEqual([5, 6]);
        });

        it("should return element which satisfies a specification", () => {
            let criteria = new GreaterThan(4);

            let collection: List<number> = list.filter(criteria);
            expect(collection.toArray()).toEqual([5, 6]);
        });
    });

    describe("includes()", () => {
        it("should return a boolean if the given item is in the collection", () => {
            expect(list.includes(6)).toBe(true);
        });
    });

    describe("map()", () => {
        it("should map each item in the collection to a desired type", () => {
            expect(list.map(n => n * 2).toArray()).toEqual([2, 4, 6, 8, 10, 12]);
        });
    });

    describe("insert()", () => {
        it("should insert an element at the given the index", () => {
            list.insert(8, 3);

            expect(list.length).toBe(7);
            expect(list.toArray()).toEqual([1, 2, 3, 8, 4, 5, 6]);

            list.insert(9);

            expect(list.length).toBe(8);
            expect(list.toArray()).toEqual([1, 2, 3, 8, 4, 5, 6, 9]);
        });
    });

    describe("pop()", () => {
        it("should remove and return the last element in the collection", () => {
            expect(list.pop()).toBe(6);
            expect(list.toArray()).toEqual([1, 2, 3, 4, 5]);
        });
    });

    describe("shift()", () => {
        it("should remove and return the first element in the collection", () => {
            expect(list.shift()).toBe(1);       
            expect(list.first()).toBe(2);
            expect(list.toArray()).toEqual([2, 3, 4, 5, 6]);
        });
    });

    describe("each()", () => {
        it("should take an array callback that is called for each element in the collection", () => {
            let collection: number[] = [];
            list.each(n => collection.push(n * 2));
            expect(collection).toEqual([2, 4, 6, 8, 10, 12]);
        })
    });

    describe("concat()", () => {
        it("should take an iterable array and iterate through pushing each element into this collection", () => {            
            list.concat([1, 4, 5], [6,3,6]);
            expect(list.toArray()).toEqual(nums.concat([1, 4, 5], [6,3,6]));
        });
    });

    describe("slice()", () => {
        it("should return a slice of the collection given a start and end range", () => {
            expect(list.slice(2, 5).toArray()).toEqual([3, 4, 5, 6]);
        });
    });

    describe("unshift()", () => {
        it("should prepend an element to the first index of the collection", () => {
            list.unshift(0);
            expect(list.length).toBe(7);
            expect(list.toArray()).toEqual([0, 1, 2, 3, 4, 5, 6]);
        });
    })

    describe("clear()", () => {        
        it("should clear all elements in the collection", () => {
            expect(list.length).toBe(6);
            
            list.clear();

            expect(list.length).toBe(0);
        });
    });

    describe("length", () => {
        it("should reflet the total number of elements in the collection", () => {
            let list: List<number> = new List<number>(nums);
    
            expect(list.length).toBe(6);

            list[99] = 989;
            
            expect(list.length).toBe(100);

            list = new List<number>([9]);

            expect(list.length).toBe(1);

        });
    });

    describe("at()", () => {
        it("should get the element at the given index", () => {
            expect(list.at(0)).toBe(1);
            expect(list.at(1)).toBe(2);
            expect(list.at(2)).toBe(3);
            expect(list.at(3)).toBe(4);
            expect(list.at(4)).toBe(5);
            expect(list.at(5)).toBe(6);
            expect(list.at(-1)).toBe(6);
            expect(list.at(-2)).toBe(5);
            expect(list.at(-3)).toBe(4);
            expect(list.at(-4)).toBe(3);
            expect(list.at(-5)).toBe(2);
            expect(list.at(-6)).toBe(1);
        });
    });

    describe("next()", () => {
        it("should take no parameter and default at index -1 giving the first item in the list", () => {
            let i: number = 0;

            for(let n of list.next()) {
                expect(n).toBe(nums[i]);
                i++;
            }
        });

        it("should take an integer representing the starting index and gets the next index from the starting index", () => {
            let generator = list.next(-3);

            expect(generator.next().value).toBe(5);
            expect(generator.next().value).toBe(6);
            expect(generator.next().value).toBe(1);
            expect(generator.next().value).toBe(2);
            expect(generator.next().value).toBe(3);
            expect(generator.next().value).toBe(4);
            expect(generator.next().value).toBe(5);
            expect(generator.next().value).toBe(6);
            expect(generator.next()).toEqual(completed);
        });
    });

    describe("prev()", () => {
        it("should take no parameter and default at index 0 giving the first item in the list", () => {
            let i: number = 1;

            for(let n of list.prev()) {
                expect(n).toBe(nums[nums.length - i]);
                i++;
            }
        });   

        it("should take an integer representing the starting index and gets the previous index from the starting index", () => {
            let generator = list.prev(2);

            expect(generator.next().value).toBe(2);
            expect(generator.next().value).toBe(1);
            expect(generator.next().value).toBe(6);
            expect(generator.next().value).toBe(5);
            expect(generator.next().value).toBe(4);
            expect(generator.next().value).toBe(3);
            expect(generator.next().value).toBe(2);
            expect(generator.next().value).toBe(1);
            expect(generator.next()).toEqual(completed);
        });
    });

    describe("first()", () => {
        it("should return the first element in the collection", () => {
            let list2 = new List<number>();

            expect(list.first()).toBe(1);

            list2[9] = 8;
            list2[98] = 43;
            list2[19] = 948;

            expect(list2.first()).toBe(8);
        });
    });

    describe("last()", () => {
        it("should return the first element in the collection", () => {
            expect(list.last()).toBe(6);
        });
    });

    describe("indexOf()", () => {
        it("should return the index of the given element if found in the collection or -1 if not found", () => {
            expect(list.indexOf(1)).toBe(0);
            expect(list.indexOf(2)).toBe(1);
            expect(list.indexOf(3)).toBe(2);
            expect(list.indexOf(4)).toBe(3);
            expect(list.indexOf(5)).toBe(4);
            expect(list.indexOf(6)).toBe(5);
        });
    });

    describe("entries()", () => {
        it("should return an array of assigned entries. Each entry is an array of index/value pair", () => {
            expect(list.entries()).toEqual([
                [0,1],
                [1,2],
                [2,3],
                [3,4],
                [4,5],
                [5,6]
            ]);
        });
    });

    describe("remove()", () => {
        it("should remove element via index", () => {
            expect(list.remove(3)).toBe(4);
            expect(list.toArray()).toEqual([1, 2, 3, 5, 6]);
        });
    });

    describe("removeAll()", () => {
        it("should remove all element via predicate", () => {
            let results = list.removeAll(n => n === 1 || n > 3).toArray();
            let collection = list.toArray();
            
            expect(list.length).toBe(2);
            expect(results).toEqual([1, 4, 5, 6]);
            expect(collection).toEqual([2, 3]);
        });
    });

    describe("sort()", () => {
        it("should sort elements based on comparator", () => {
            list.sort((a, b) => b - a);

            expect(list[0]).toBe(6);
            expect(list[1]).toBe(5);
            expect(list[2]).toBe(4);
            expect(list[3]).toBe(3);
            expect(list[4]).toBe(2);
            expect(list[5]).toBe(1);

            list.sort((a, b) => a - b);

            expect(list[0]).toBe(1);
            expect(list[1]).toBe(2);
            expect(list[2]).toBe(3);
            expect(list[3]).toBe(4);
            expect(list[4]).toBe(5);
            expect(list[5]).toBe(6);

            let collection = new List<number>();

            collection[8] = 10;
            collection[3] = 49;
            collection[21] = 84;

            collection.sort((a, b) => a - b);

            expect(collection[3]).toBe(10);
            expect(collection[8]).toBe(49);
            expect(collection[21]).toBe(84);

            collection.sort((a, b) => b - a);

            expect(collection[3]).toBe(84);
            expect(collection[8]).toBe(49);
            expect(collection[21]).toBe(10);

            let words = new List<string>();

            words[9] = 'Hello';
            words[3] = 'World';

            words.sort((a, b) => {
                if (a > b) {
                    return 1;
                }

                if (a < b) {
                    return -1
                }

                return 0;
            });

            expect(words[3]).toBe('Hello');
            expect(words[9]).toBe('World');
        });
    });
});