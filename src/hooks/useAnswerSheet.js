import {useState} from 'react'

function isBlank(s) {
    if (s === " ") {
        return true
    } else {
        return false
    }
}

function isInitial(s) {
    if (/^[ㄱ-ㅎ]+$/.test(s)) {
        return true
    } else{
        return false
    }
}

function setInitialAnswerSheet(q) {
    const answerSheet = []
    let numOfQuestion = 0
    for (let i=0; i<q.length; i++) {
        const s = q[i]
        if (isBlank(s)) {
            answerSheet.push({
                number: i,
                type: "blank"
            })
        } else if (isInitial(s)) {
            answerSheet.push({
                number: i,
                type: "initial",
                character: "",
                placeholder: s,
                state: "basic"
            })
            numOfQuestion += 1
        } else {
            answerSheet.push({
                number: i,
                type: "full",
                character: s,
                state: "unactivated"
            })
        }
    }
    return [answerSheet, numOfQuestion]
}

function useAnswerSheet(q, a) {
    
    const [initialAnswerSheet, numOfQuestion] = setInitialAnswerSheet(q)
    const [answerSheet, setAnswerSheet] = useState(initialAnswerSheet)

    const setAnswer = (number, text) => {
        if (!(answerSheet[number].type === "initial")) {
            return
        }
        if (text.length > 1) {
            text = text[1]
        }
        let ch = text
        if (ch === " ") {
            ch = ""
        }
        setAnswerSheet(answerSheet.map(sheet => 
            sheet.number === number? {...sheet, character: ch} : sheet
        ))
    }

    const checkAnswer = () => {
        const temp = [...answerSheet]
        for (let i=0; i<temp.length; i++) {
            const as = temp[i]
            const type = as.type
            if (type === "initial") {
                const ch = as.character
                const answer = a[i]
                let st = ""
                if (ch === "") {
                    st = "basic"
                } else if (ch === answer) {
                    st = "right"
                } else {
                    st = "wrong"
                }
                temp[i] = {...as, state:st}
            }
        }
        setAnswerSheet(temp)
    }

    return [answerSheet, setAnswer, checkAnswer]
}

export default useAnswerSheet;