import { ReactElement } from 'react'

interface ITitleProps {
  title: string
}

export default function Title({ title }: ITitleProps) {
  return <div className="text-2xl mb-8 bg-slate-100 rounded-lg px-4 py-4">{title}</div>
}
