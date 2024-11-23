const checkCondition = (Weather)=>{
    let h = Weather["humidity"]
    let t = Weather["temperature"]
    let s = Weather["winSpeed"]

    if(t>= 20 && t<=30){
        if(h > 50){
            if(s<15){
                return 'Ideal Condition'
            }
        }
    }
    return 'Not Ideal Condition'
}
module.exports = {checkCondition}