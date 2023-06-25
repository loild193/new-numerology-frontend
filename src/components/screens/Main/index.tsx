import { ChangeEvent, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useMutation } from '@tanstack/react-query'
import { Spinner } from 'flowbite-react'
import { Select } from './Select'
import { Input } from '@components/common/Authentication/Input'
import { Button } from '@components/common/Button'
import { InputWithIcon } from '@components/common/InputWithIcon'
import { DAY, IResult, MONTH } from '@models/interface'
import { ServerResponse } from '@models/api/user/search-numerology'
import { useBoundStore } from '@src/zustand'
import { lifePathIndex, soulIndex, personalityIndex, talentIndex, passionIndex } from '@utils/calculation'
import { isValidDate } from '@utils/helper'
import logger from '@utils/logger'
import { NOTIFICATION_TYPE, notify } from '@utils/notify'

const Result = dynamic(() => import('@components/screens/Result').then((mod) => mod.Result))

interface IInformation {
  name: string
  day: string
  month: string
  year: number
  phone?: string
  company?: string
}

interface IInformationError {
  name: string
  day: string
  month: string
  year: string
  dateOfBirth: string
}

export function Main() {
  const { searchAmountLeft, updateSearchAmountLeft } = useBoundStore((store) => ({
    searchAmountLeft: store.accountInfo.searchAmountLeft,
    updateSearchAmountLeft: store.updateSearchAmountLeft,
  }))
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

  const { name, day, month, year, phone, company } = information
  const dateOfBirth = `${day}/${month}/${year}`

  const searchNumerology = async (input: { name: string; birthday: string; phone?: string; company?: string }) => {
    try {
      const response = await fetch('/api/user/search-numerology', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...input }),
        credentials: 'same-origin',
      })
      const rawResponse = (await response.json()) as ServerResponse

      return rawResponse
    } catch (error) {
      logger.error('[searchNumerology]', error)
    }
  }

  const { mutate, isLoading } = useMutation({
    mutationFn: searchNumerology,
    onSuccess: (data) => {
      if (data?.success && data?.response?.userId) {
        notify(NOTIFICATION_TYPE.SUCCESS, 'Kiểm tra thành công')
        onCalculateResult()
        updateSearchAmountLeft({ searchAmountLeft: searchAmountLeft - 1 })
      } else {
        // FIXME: Correct type of data
        if ((data as any)?.error?.message === 'Search amount is not enough') {
          notify(NOTIFICATION_TYPE.ERROR, 'Bạn đã hết lượt tra cứu. Vui lòng liên hệ với admin')
        } else {
          logger.error('[searchNumerology]', error)
          notify(NOTIFICATION_TYPE.ERROR, 'Có lỗi xảy ra!')
        }
      }
    },
    onError: (error: any) => {
      logger.error('[searchNumerology]', error)
      notify(NOTIFICATION_TYPE.ERROR, 'Có lỗi xảy ra!')
    },
  })

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

  const onResetValueInformation = (name: string) => {
    setInformation((prev) => ({
      ...prev,
      [name]: undefined,
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

  const onSearchNumerology = () => {
    if (!name || name === '-1') {
      notify(NOTIFICATION_TYPE.ERROR, 'Nhập thiếu tên!')
      return
    } else if (!day) {
      notify(NOTIFICATION_TYPE.ERROR, 'Nhập thiếu ngày sinh!')
      return
    } else if (!month) {
      notify(NOTIFICATION_TYPE.ERROR, 'Nhập thiếu tháng sinh!')
      return
    } else if (!year || year === -1) {
      notify(NOTIFICATION_TYPE.ERROR, 'Nhập thiếu năm sinh!')
      return
    } else if (year > 0 && !isValidDate(dateOfBirth)) {
      notify(NOTIFICATION_TYPE.ERROR, 'Ngày tháng năm sinh không hợp lệ')
      return
    }

    mutate({
      name: name.toLowerCase().trim(),
      birthday: dateOfBirth,
      phone: phone,
      company: company,
    })
  }

  const onGoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="w-full py-[100px] min-h-screen overflow-auto max-xs:pt-[100px]">
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

        <div className="grid grid-cols-2 gap-x-6 max-xs:gap-x-4 relative mt-4">
          <InputWithIcon
            label="Số điện thoại"
            name="phone"
            value={phone ?? ''}
            onChange={onUpdateInformation}
            onClickButton={onResetValueInformation}
          />
          <InputWithIcon
            label="Email"
            name="company"
            value={company ?? ''}
            onChange={onUpdateInformation}
            onClickButton={onResetValueInformation}
          />
        </div>

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
              Năm sinh
            </label>
            <input
              type="number"
              name="year"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring-primary-900 focus:border-primary-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-900 dark:focus:border-primary-900"
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

        {searchAmountLeft >= 0 ? (
          <p className="text-center mb-4">
            Số lần tra cứu còn lại: <span className="text-xl font-sem\">{searchAmountLeft}</span>
          </p>
        ) : null}

        <div className="flex justify-center">
          <div className="max-w-[160px]">
            <Button
              label="Xem kết quả"
              disabled={!!error.name || !!error.day || !!error.month || !!error.year || !!error.dateOfBirth}
              loading={isLoading}
              loadingLabel="Đang xử lý"
              onClick={onSearchNumerology}
            />
          </div>
        </div>

        {isLoading ? (
          <div className="w-full flex justify-center">
            <Spinner />
          </div>
        ) : null}

        {result ? (
          <>
            <Result
              lifePath={result.lifePath}
              soul={result.soul}
              personality={result.personality}
              talent={result.talent}
              passion={result.passion}
            />
            <div className="flex justify-center mt-6">
              <div className="max-w-[160px]">
                <Button label="Tra cứu lại" loading={false} loadingLabel="" variant="no-background" onClick={onGoTop} />
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
}
