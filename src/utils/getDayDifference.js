function getDayDifference(referenceDate, targetDate) {
    const {year:rYear, month:rMonth, date:rDate} = referenceDate
    const {year:tYear, month:tMonth, date:tDate} = targetDate
    
    const refDate = new Date(rYear, rMonth-1, rDate)
    const tagDate = new Date(tYear, tMonth-1, tDate)

    const daysAfter = (tagDate.getTime() - refDate.getTime()) / (1000*60*60*24)
    return daysAfter
}

export default getDayDifference;