const { v4: uuidv4 } = require('uuid');

const generateId = () => {
    const now = Date.now()
    const randomNum = Math.round(Math.random() * 1E9)
    const standarUUID = uuidv4()

    const combineId = `${now}-${standarUUID}-${randomNum}`

    return combineId
}

module.exports = generateId