import getDayDifference from "./getDayDifference";
import getTodayDate from "./getTodayDate";

function getDday(date) {
    const today = getTodayDate()
    let message = today.simpleDate
    if (date) {
        if (date.end) {
            const diff = getDayDifference(today, date.end)
            message = `D-${diff}`
        } else if (date.start) {
            const diff = getDayDifference(date.start, today)
            message = `D+${diff}`
        }
    }
    return message
}

export default getDday