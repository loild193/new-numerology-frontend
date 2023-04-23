import { MAPPING_LETTER_TO_NUMBER } from './constants'
import {
  calculateSpecialSum,
  getConsonantsOfWord,
  getMostFrequentOccurrence,
  getVowelsOfWord,
  splitName,
} from './helper'

function lifePathIndex(birthdate: string): number {
  // split the birthdate into its components
  const [dayInString, monthInString, yearInString] = birthdate.split('/')

  // reduce (the month, day, and year to single digits
  let day = 0
  let month = 0
  let year = 0

  day = calculateSpecialSum(
    dayInString.split('').map((character) => Number(character)),
    false,
  )
  month = calculateSpecialSum(
    monthInString.split('').map((character) => Number(character)),
    false,
  )
  year = calculateSpecialSum(
    yearInString.split('').map((character) => Number(character)),
    false,
  )

  return calculateSpecialSum([day, month, year], false)
}

function soulIndex(name: string): number {
  // get vowels
  const words = splitName(name)
  const wordVowels = words.map((word) => getVowelsOfWord(word))

  // get value of list vowels
  const vowelsValue = wordVowels.map((vowels) => vowels.map((vowel) => MAPPING_LETTER_TO_NUMBER[vowel]))
  const sumVowels = vowelsValue.map((vowel) => calculateSpecialSum(vowel, false))

  return calculateSpecialSum(sumVowels, false)
}

function personalityIndex(name: string): number {
  // get consonants
  const words = splitName(name)
  const wordConsonants = words.map((word) => getConsonantsOfWord(word))

  // get value of list consonants
  const consonantsValue = wordConsonants.map((consonants) =>
    consonants.map((consonant) => MAPPING_LETTER_TO_NUMBER[consonant]),
  )
  const sumConsonants = consonantsValue.map((consonant) => calculateSpecialSum(consonant, false))

  return calculateSpecialSum(sumConsonants, false)
}

function talentIndex(birthdate: string): number {
  const [dayInString] = birthdate.split('/')

  const day = calculateSpecialSum(
    dayInString.split('').map((character) => Number(character)),
    false,
  )

  return day
}

function passionIndex(name: string): number[] {
  const words = splitName(name)
  const wordsValue = words.map((word) => word.split('').map((character) => MAPPING_LETTER_TO_NUMBER[character])).flat()

  return getMostFrequentOccurrence(wordsValue)
}

export { lifePathIndex, soulIndex, personalityIndex, talentIndex, passionIndex }
