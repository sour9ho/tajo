function convertDateIntoSixDigits(year, month, date) {
    const y = (year%100).toString()
    const m = (month > 10) ? month.toString() : '0' + month.toString()
    const d = date.toString()
    return y + m + d
}

function getTodayDate() {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const date = today.getDate()
    const simpleDate = convertDateIntoSixDigits(year, month, date)
    
    return {
        year:year,
        month:month,
        date:date,
        simpleDate: simpleDate
    }
}

export default getTodayDate;