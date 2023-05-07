export const fancyTimeFormat = (duration: number) => {
  // Hours, minutes and seconds
  const hrs = ~~(duration / 3600)
  const mins = ~~((duration % 3600) / 60)
  const secs = ~~duration % 60

  // Output like "1:01" or "4:03:59" or "123:03:59"
  let ret = ''

  if (hrs > 0) {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    ret += '' + hrs + ':' + (mins < 10 ? '0' : '')
  }

  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  ret += '' + mins + ':' + (secs < 10 ? '0' : '')
  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  ret += '' + secs
  return ret
}

export const formatDate = (strDate: string) => {
  const d = new Date(strDate)

  const formattedDate =
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    ('0' + d.getHours()).slice(-2) +
    ':' +
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    ('0' + d.getMinutes()).slice(-2) +
    ' ' +
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    ('0' + d.getDate()).slice(-2) +
    '/' +
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    ('0' + (d.getMonth() + 1)).slice(-2) +
    '/' +
    d.getFullYear()

  return formattedDate
}
