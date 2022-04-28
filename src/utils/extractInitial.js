function extractInitial(s) {
    const initials = ["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];
    let result = ""
    const code = s - 44032
    if (code > -1 && code < 11172) {
        result = initials[Math.floor(code/588)]
    }
    return result;
}  

export default extractInitial;