import { ChangeEvent, useEffect, useState } from 'react'
import { Result } from '../Result'
import { DAY, IResult, MONTH } from '@models/interface'
import { lifePathIndex, soulIndex, personalityIndex, talentIndex, passionIndex } from '@utils/calculation'
import { isValidDate } from '@utils/helper'
import { Select } from './Select'
import { Input } from '@components/common/Authentication/Input'
import { Button } from '@components/common/Button'

interface IInformation {
  name: string
  day: string
  month: string
  year: number
}

interface IInformationError {
  name: string
  day: string
  month: string
  year: string
  dateOfBirth: string
}

export function Main() {
  const [information, setInformation] = useState<IInformation>({
    name: '-1',
    day: '01',
    month: '01',
    year: -1,
  })
  const [error, setError] = useState<IInformationError>({
    name: '',
    day: '',
    month: '',
    year: '',
    dateOfBirth: '',
  })
  const [result, setResult] = useState<IResult>()

  const { name, day, month, year } = information
  const dateOfBirth = `${day}/${month}/${year}`

  useEffect(() => {
    if (!name) {
      setError((prev) => ({ ...prev, name: 'Thiếu họ và tên' }))
    } else if (!day) {
      setError((prev) => ({ ...prev, day: 'Thiếu ngày sinh' }))
    } else if (!month) {
      setError((prev) => ({ ...prev, month: 'Thiếu tháng sinh' }))
    } else if (!year) {
      setError((prev) => ({ ...prev, year: 'Thiếu năm sinh' }))
    } else if (year > 0 && !isValidDate(dateOfBirth)) {
      setError((prev) => ({ ...prev, dateOfBirth: 'Ngày tháng năm sinh không hợp lệ' }))
    } else {
      setError({ name: '', day: '', month: '', year: '', dateOfBirth: '' })
    }
  }, [information])

  const onUpdateInformation = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setInformation((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const onCalculateResult = () => {
    const lifePath = lifePathIndex(dateOfBirth)
    const finalName = name.toLowerCase().trim()
    const soul = soulIndex(finalName)
    const personality = personalityIndex(finalName)

    const newResult: IResult = {
      lifePath,
      soul,
      personality,
      talent: talentIndex(dateOfBirth),
      passion: passionIndex(finalName),
    }

    setResult(newResult)
  }

  return (
    <div className="w-full py-[120px] min-h-screen overflow-auto max-xs:pt-[100px]">
      <div className="max-w-[800px] mx-auto max-xs:px-8">
        <h1 className="text-3xl max-md:text-2xl font-semibold text-center mb-2 uppercase">META SALE SYSTEM </h1>
        <p className="mb-3 text-center">Hệ thống bán hàng từ tâm</p>
        <Input
          label="Họ và tên"
          name="name"
          value={name === '-1' ? '' : name}
          errorMessage={error.name}
          onChange={onUpdateInformation}
        />

        <div className="grid grid-cols-3 gap-x-6 max-xs:gap-x-4 relative mt-4 pb-12">
          <Select
            label="Ngày sinh"
            name="day"
            value={day}
            options={DAY}
            errorMessage={error.day}
            onChange={onUpdateInformation}
          />

          <Select
            label="Tháng sinh"
            name="month"
            value={month}
            options={MONTH}
            errorMessage={error.month}
            onChange={onUpdateInformation}
          />

          <div>
            <label htmlFor="year" className="block mb-2 text-sm font-medium">
              Năm sinh:
            </label>
            <input
              type="number"
              name="year"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              min={1000}
              max={3000}
              step={1}
              placeholder="Năm sinh"
              value={year <= 0 ? '' : year}
              onChange={onUpdateInformation}
            />
          </div>
          {error.dateOfBirth ? (
            <p className="absolute bottom-[14px] left-0 text-red-500 text-sm">{error.dateOfBirth}</p>
          ) : null}
        </div>

        <div className="flex justify-center">
          <div className="max-w-[160px]">
            <Button
              label="Xem kết quả"
              disabled={!!error.name || !!error.day || !!error.month || !!error.year || !!error.dateOfBirth}
              loading={false}
              loadingLabel=""
              onClick={onCalculateResult}
            />
          </div>
        </div>

        {result ? (
          <Result
            lifePath={result.lifePath}
            soul={result.soul}
            personality={result.personality}
            talent={result.talent}
            passion={result.passion}
          />
        ) : null}
      </div>
    </div>
  )
}
