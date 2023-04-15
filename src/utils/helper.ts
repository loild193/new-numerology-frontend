import { NORMAL_VOWELS, SPECIAL_VALUES, SPECIAL_VOWELS } from './constants'

interface IIsSpecialVowel {
  backwardCharacter: string | undefined
  mainCharacter: string | undefined
  forwardCharacter: string | undefined
}

// Validates that the input string is a valid date formatted as "mm/dd/yyyy"
function isValidDate(dateString: string): boolean {
  // First check for the pattern
  if (!/^\d{1,2}[\-\s\/]\d{1,2}[\-\s\/]\d{4}$/.test(dateString)) {
    return false
  }

  // Parse the date parts to integers
  const parts = dateString.split('/')
  const day = parseInt(parts[0], 10)
  const month = parseInt(parts[1], 10)
  const year = parseInt(parts[2], 10)

  // Check the ranges of month and year
  if (year < 1000 || year > 3000 || month === 0 || month > 12) {
    return false
  }

  const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  // Adjust for leap years
  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    monthLength[1] = 29
  }

  // Check the range of the day
  return day > 0 && day <= monthLength[month - 1]
}

const splitName = (name: string): string[] => {
  return name.split(' ')
}

const splitNumber = (num: number): number[] => {
  return num
    .toString()
    .split('')
    .map((character) => Number(character))
}

const isSpecialValue = (num: number): boolean => {
  return SPECIAL_VALUES.includes(num)
}

const calculateSpecialSum = (numbers: number[], isCheckSpecialValue = true): number => {
  let result = numbers.reduce((acc, curr) => acc + curr, 0)
  while (result > 9) {
    if (isCheckSpecialValue && SPECIAL_VALUES.includes(result)) {
      break
    }
    result = result
      .toString()
      .split('')
      .reduce((acc, curr) => acc + parseInt(curr), 0)
  }

  return result
}

const getMostFrequentOccurrence = (numbers: number[]): number[] => {
  const frequency: Record<number, number> = {} // array of frequency.
  let max = 0 // holds the max frequency.
  for (const v of Object.keys(numbers)) {
    frequency[numbers[Number(v)]] = (frequency[numbers[Number(v)]] || 0) + 1 // increment frequency.
    if (frequency[numbers[Number(v)]] > max) {
      // is this frequency > max so far ?
      max = frequency[numbers[Number(v)]] // update max.
    }
  }
  const result: number[] = []
  for (const key in frequency) {
    if (frequency.hasOwnProperty(key)) {
      if (frequency[Number(key)] === max) {
        result.push(Number(key))
      }
    }
  }

  return result
}

const isNormalVowel = (character: string): boolean => {
  return typeof NORMAL_VOWELS[character] !== 'undefined'
}

const hasNormalVowel = (word: string): boolean => {
  return word.split('').some((character) => isNormalVowel(character))
}

const isSpecialVowel = ({ backwardCharacter, mainCharacter, forwardCharacter }: IIsSpecialVowel): boolean => {
  if (typeof mainCharacter !== 'undefined' && typeof SPECIAL_VOWELS[mainCharacter] !== 'undefined') {
    if (
      (typeof backwardCharacter !== 'undefined' && typeof NORMAL_VOWELS[backwardCharacter] !== 'undefined') ||
      (typeof forwardCharacter !== 'undefined' && typeof NORMAL_VOWELS[forwardCharacter] !== 'undefined')
    ) {
      return false
    }
    return true
  }

  return false
}

const getVowelsOfWord = (word: string): string[] => {
  const characters = word.split('')
  const result: string[] = []

  for (let i = 0; i < characters.length; ++i) {
    if (isNormalVowel(characters[i])) {
      result.push(characters[i])
    }
    if (
      isSpecialVowel({
        backwardCharacter: characters[i - 1],
        mainCharacter: characters[i],
        forwardCharacter: characters[i + 1],
      })
    ) {
      result.push(characters[i])
    }
  }

  return result
}

const getConsonantsOfWord = (word: string): string[] => {
  const characters = word.split('')
  const result: string[] = []

  for (let i = 0; i < characters.length; ++i) {
    if (
      !isNormalVowel(characters[i]) &&
      !isSpecialVowel({
        backwardCharacter: characters[i - 1],
        mainCharacter: characters[i],
        forwardCharacter: characters[i + 1],
      })
    ) {
      result.push(characters[i])
    }
  }

  return result
}

export {
  isValidDate,
  splitName,
  splitNumber,
  isSpecialValue,
  calculateSpecialSum,
  getMostFrequentOccurrence,
  isNormalVowel,
  hasNormalVowel,
  isSpecialVowel,
  getVowelsOfWord,
  getConsonantsOfWord,
}
