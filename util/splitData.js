function GetRollValue(req) {
    var listResponseData = []
    req.forEach(element => {
        var responseData = {
            player: "",
            gameDice: [],
            result: 0
        }
        var some = 0
        var separeteValues = element.roll.split(">")[1].split(",")
        separeteValues.forEach(e => {
            e
                .split("{")
                .join("")
                .split("[")
                .join("")
                .split("]")
                .join("")
                .split("}")
                .forEach(elementValue => {
                    if(elementValue != "")
                        responseData.gameDice.push(elementValue)
                    some = some + Number(elementValue)
                });
        });
        responseData.player = element.user
        responseData.result = some
        listResponseData.push(responseData)
    });
    return listResponseData
}

exports.GetRollValue = GetRollValue