import { ALL_VALUES, MAPPING_LETTER_TO_NUMBER, SPECIAL_VALUES } from './constants'
import {
  calculateSpecialSum,
  getConsonantsOfWord,
  getMostFrequentOccurrence,
  getVowelsOfWord,
  isSpecialValue,
  splitName,
  splitNumber,
} from './helper'

interface ILinkLifePathAndMissionIndex {
  lifePath: number
  mission: number
}

interface ILinkSoulAndPersonalityIndex {
  soul: number
  personality: number
}

function lifePathIndex(birthdate: string): number[] {
  // split the birthdate into its components
  const [dayInString, monthInString, yearInString] = birthdate.split('/')

  // reduce (the month, day, and year to single digits
  let day = 0
  let month = 0
  let year = 0

  if (isSpecialValue(Number(dayInString))) {
    day = Number(dayInString)
  } else {
    day = calculateSpecialSum(dayInString.split('').map((character) => Number(character)))
  }
  if (isSpecialValue(Number(monthInString))) {
    month = Number(monthInString)
  } else {
    month = calculateSpecialSum(monthInString.split('').map((character) => Number(character)))
  }
  if (isSpecialValue(Number(yearInString))) {
    year = Number(yearInString)
  } else {
    year = calculateSpecialSum(yearInString.split('').map((character) => Number(character)))
  }

  let result = day + month + year
  let pastResult = result
  while (result > 9) {
    pastResult = result
    if (SPECIAL_VALUES.includes(result)) {
      break
    }
    result = result
      .toString()
      .split('')
      .reduce((acc, curr) => acc + parseInt(curr), 0)
  }

  result = result
    .toString()
    .split('')
    .reduce((acc, curr) => acc + parseInt(curr), 0)

  return [pastResult, result]
}

function missionIndex(name: string): number {
  const words = splitName(name)

  const wordsValue = words.map((word) => word.split('').map((character) => MAPPING_LETTER_TO_NUMBER[character]))
  const eachWordSum = wordsValue.map((value) => calculateSpecialSum(value))

  return calculateSpecialSum(eachWordSum)
}

function linkLifePathAndMissionIndex({ lifePath, mission }: ILinkLifePathAndMissionIndex): number {
  const finalLifePath = calculateSpecialSum(splitNumber(lifePath), false)
  const finalMission = calculateSpecialSum(splitNumber(mission), false)

  const difference = Math.abs(finalLifePath - finalMission)

  return calculateSpecialSum(splitNumber(difference), false)
}

function matureIndex({ lifePath, mission }: ILinkLifePathAndMissionIndex): number {
  return calculateSpecialSum([lifePath, mission])
}

function soulIndex(name: string): number {
  // get vowels
  const words = splitName(name)
  const wordVowels = words.map((word) => getVowelsOfWord(word))

  // get value of list vowels
  const vowelsValue = wordVowels.map((vowels) => vowels.map((vowel) => MAPPING_LETTER_TO_NUMBER[vowel]))
  const sumVowels = vowelsValue.map((vowel) => calculateSpecialSum(vowel))

  return calculateSpecialSum(sumVowels)
}

function personalityIndex(name: string): number {
  // get consonants
  const words = splitName(name)
  const wordConsonants = words.map((word) => getConsonantsOfWord(word))

  // get value of list consonants
  const consonantsValue = wordConsonants.map((consonants) =>
    consonants.map((consonant) => MAPPING_LETTER_TO_NUMBER[consonant]),
  )
  const sumConsonants = consonantsValue.map((consonant) => calculateSpecialSum(consonant))

  return calculateSpecialSum(sumConsonants)
}

function linkSoulAndPersonalityIndex({ soul, personality }: ILinkSoulAndPersonalityIndex): number {
  const finalSoul = calculateSpecialSum(splitNumber(soul))
  const finalPersonality = calculateSpecialSum(splitNumber(personality))

  const difference = Math.abs(finalSoul - finalPersonality)

  return calculateSpecialSum(splitNumber(difference))
}

function balanceIndex(name: string): number {
  const words = splitName(name)
  const firstCharactersValue = words.map((word) => MAPPING_LETTER_TO_NUMBER[word[0]])

  return calculateSpecialSum(firstCharactersValue)
}

function mindsetIndex(name: string, birthdate: string): number {
  const words = splitName(name)
  const lastName = words[words.length - 1]
  const wordsValue = lastName.split('').map((character) => MAPPING_LETTER_TO_NUMBER[character])
  const lastNameSum = calculateSpecialSum(wordsValue)

  const [dayInString] = birthdate.split('/')
  // reduce day to single digits
  let day = 0

  day = calculateSpecialSum(
    dayInString.split('').map((character) => Number(character)),
    false,
  )

  return calculateSpecialSum([lastNameSum, day])
}

function subconsciousIndex(name: string): number {
  return 9 - noOccurrenceNumbersIndex(name).length
}

function personalYearIndex(birthdate: string): number {
  const [dayInString, monthInString] = birthdate.split('/')

  let day = 0
  let month = 0

  if (isSpecialValue(Number(dayInString))) {
    day = Number(dayInString)
  } else {
    day = calculateSpecialSum(dayInString.split('').map((character) => Number(character)))
  }
  if (isSpecialValue(Number(monthInString))) {
    month = Number(monthInString)
  } else {
    month = calculateSpecialSum(monthInString.split('').map((character) => Number(character)))
  }

  const currentYear = new Date().getFullYear()
  const currentYearSum = currentYear
    .toString()
    .split('')
    .reduce((acc, curr) => acc + parseInt(curr), 0)

  return calculateSpecialSum([day, month, currentYearSum])
}

function personalMonthIndex(birthdate: string): number {
  const currentMonth = new Date().getMonth() + 1 // zero-index base
  const currentMonthSum = currentMonth
    .toString()
    .split('')
    .reduce((acc, curr) => acc + parseInt(curr), 0)

  return calculateSpecialSum([currentMonthSum, personalYearIndex(birthdate)])
}

function personalDayIndex(birthdate: string): number {
  const currentDay = new Date().getDate() + 1 // zero-index base
  const currentDaySum = currentDay
    .toString()
    .split('')
    .reduce((acc, curr) => acc + parseInt(curr), 0)

  return calculateSpecialSum([currentDaySum, personalMonthIndex(birthdate)])
}

function firstMilestoneIndex(birthdate: string): number {
  const [dayInString, monthInString] = birthdate.split('/')
  let day = 0
  let month = 0

  day = calculateSpecialSum(
    dayInString.split('').map((character) => Number(character)),
    false,
  )
  month = calculateSpecialSum(monthInString.split('').map((character) => Number(character), false))

  return calculateSpecialSum([day, month], false)
}

function secondMilestoneIndex(birthdate: string): number {
  const [dayInString, , yearInString] = birthdate.split('/')
  let day = 0
  let year = 0

  day = calculateSpecialSum(
    dayInString.split('').map((character) => Number(character)),
    false,
  )
  year = calculateSpecialSum(
    yearInString.split('').map((character) => Number(character)),
    false,
  )

  return calculateSpecialSum([day, year])
}

function thirdMilestoneIndex(birthdate: string): number {
  return calculateSpecialSum([firstMilestoneIndex(birthdate), secondMilestoneIndex(birthdate)], false)
}

function fourthMilestoneIndex(birthdate: string): number {
  const [, monthInString, yearInString] = birthdate.split('/')
  let month = 0
  let year = 0

  month = calculateSpecialSum(
    monthInString.split('').map((character) => Number(character)),
    false,
  )
  year = calculateSpecialSum(
    yearInString.split('').map((character) => Number(character)),
    false,
  )

  return calculateSpecialSum([month, year])
}

function firstChallengeIndex(birthdate: string): number {
  const [dayInString, monthInString] = birthdate.split('/')
  let day = 0
  let month = 0

  day = calculateSpecialSum(
    dayInString.split('').map((character) => Number(character)),
    false,
  )
  month = calculateSpecialSum(
    monthInString.split('').map((character) => Number(character)),
    false,
  )

  const difference = Math.abs(day - month)

  return calculateSpecialSum(splitNumber(difference), false)
}

function secondChallengeIndex(birthdate: string): number {
  const [dayInString, , yearInString] = birthdate.split('/')
  let day = 0
  let year = 0

  day = calculateSpecialSum(
    dayInString.split('').map((character) => Number(character)),
    false,
  )
  year = calculateSpecialSum(
    yearInString.split('').map((character) => Number(character)),
    false,
  )

  const difference = Math.abs(day - year)

  return calculateSpecialSum(splitNumber(difference), false)
}

function thirdChallengeIndex(birthdate: string): number {
  const difference = Math.abs(firstChallengeIndex(birthdate) - secondChallengeIndex(birthdate))

  return calculateSpecialSum(splitNumber(difference), false)
}

function fourthChallengeIndex(birthdate: string): number {
  const [, monthInString, yearInString] = birthdate.split('/')
  let month = 0
  let year = 0

  month = calculateSpecialSum(
    monthInString.split('').map((character) => Number(character)),
    false,
  )
  year = calculateSpecialSum(
    yearInString.split('').map((character) => Number(character)),
    false,
  )

  const difference = Math.abs(month - year)

  return calculateSpecialSum(splitNumber(difference), false)
}

function passionIndex(name: string): number[] {
  const words = splitName(name)
  const wordsValue = words.map((word) => word.split('').map((character) => MAPPING_LETTER_TO_NUMBER[character])).flat()

  return getMostFrequentOccurrence(wordsValue)
}

function noOccurrenceNumbersIndex(name: string): number[] {
  const words = splitName(name)
  const wordsValue = words.map((word) => word.split('').map((character) => MAPPING_LETTER_TO_NUMBER[character])).flat()
  const noOccurrenceNumbers: number[] = []

  for (const value of ALL_VALUES) {
    if (!wordsValue.includes(value)) {
      noOccurrenceNumbers.push(value)
    }
  }

  return noOccurrenceNumbers
}

export {
  lifePathIndex,
  missionIndex,
  linkLifePathAndMissionIndex,
  matureIndex,
  soulIndex,
  personalityIndex,
  linkSoulAndPersonalityIndex,
  balanceIndex,
  mindsetIndex,
  subconsciousIndex,
  personalYearIndex,
  personalMonthIndex,
  personalDayIndex,
  firstMilestoneIndex,
  secondMilestoneIndex,
  thirdMilestoneIndex,
  fourthMilestoneIndex,
  firstChallengeIndex,
  secondChallengeIndex,
  thirdChallengeIndex,
  fourthChallengeIndex,
  passionIndex,
  noOccurrenceNumbersIndex,
}
