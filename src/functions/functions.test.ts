import {describe, expect, it} from 'vitest'
import {factorial, findLongestWord, countVowels, isSubset, findCommonObjects} from './functions'

describe('factroial', () => {
    it('positive', () => {
        expect(factorial(5)).toBe(120)
        expect(factorial(3)).toBe(6)
    })
    it('zero', () => {
        expect(factorial(0)).toBe(1)
    })
    it('negative', () => {
        expect(() => factorial(-3)).toThrow('Factorial is not defined for negative numbers')
    })
})

describe('findLongestWord', () => {
    it('normal sentence', () => {
        expect(findLongestWord('The quick brown fox jumps over the lazy dog')).toBe('quick')
    })
    it('one word sentence', () => {
        expect(findLongestWord('Hello')).toBe('Hello')
    })
    it ('empty sentence', () => {
        expect(findLongestWord('')).toBe('')
    })
    it ('extra spaces', () => {
        expect(findLongestWord('  A  quick  test  ')).toBe('quick')
    })
})

describe('countVowels', () => {
    it('normal', () => {
        expect(countVowels('Hello World')).toBe(3)
    })
    it('only consonants', () => {
        expect(countVowels('bcdfg')).toBe(0)
    })
    it('mix of upper and lower', () => {
        expect(countVowels('AeiOu')).toBe(5)
    })
    it('empty', () => {
        expect(countVowels('')).toBe(0)
    })
})

describe('isSubset', () => {
    it('true', () => {
        const obj1 = { a: 1 }
        const obj2 = { a: 1, b: 2 }
        expect(isSubset(obj1, obj2)).toBe(true)
    })
    it('false', () => {
        const obj1 = { c: 3 }
        const obj2 = { a: 1, b: 2 }
        expect(isSubset(obj1, obj2)).toBe(false)
    })
})

describe('findCommonObjects', () => {
    it('same objects', () => {
        const arr1 = [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' }
        ]
        const arr2 = [
            { id: 2, name: 'Bob' },
            { id: 3, name: 'Charlie' }
        ]
        expect(findCommonObjects(arr1, arr2)).toEqual([{ id: 2, name: 'Bob' }])
    })
    it('different objects', () => {
        const arr1 = [
            { id: 1, name: 'Alice' }
        ]
        const arr2 = [
            { id: 3, name: 'Charlie' }
        ]
        expect(findCommonObjects(arr1, arr2)).toEqual([])
    })
    it('empty arrays', () => {
        const arr1: Record<string, any>[] = []
        const arr2: Record<string, any>[] = []
        expect(findCommonObjects(arr1, arr2)).toEqual([])
    })
    it('only one empty array', () => {
        const arr1 = [
            { id: 1, name: 'Alice' }
        ]
        const arr2: Record<string, any>[] = []
        expect(findCommonObjects(arr1, arr2)).toEqual([])
    })
})