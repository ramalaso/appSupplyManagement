const prices = {
    "stamped_letters": {
        "1": 0.55,
        "2": 0.75,
        "3": 0.95,
        "3.5": 1.15,
    },
    "metered_letters": {
        "1": 0.51,
        "2": 0.71,
        "3": 0.91,
        "3.5": 1.11,
    },
    "large_envelopes" : {
        "1": 1.00,
        "2": 1.20,
        "3": 1.40,
        "4": 1.60,
        "5": 1.80,
        "6": 2.00,
        "7": 2.20,
        "8": 2.40,
        "9": 2.60,
        "10": 2.80,
        "11": 3.00,
        "12": 3.20,
        "13": 3.40
    },
    "first_class": {
        "1": 3.70,
        "2": 3.90,
        "3": 4.10,
        "4": 4.30,
        "5": 4.50,
        "6": 4.70,
        "7": 4.90,
        "8": 5.10,
        "9": 5.30,
        "10": 5.50,
        "11": 5.70,
        "12": 5.90,
        "13": 6.10

    }
}

function calculateRate (type, weight) {
    return prices[type][weight]
}

console.log(calculateRate("stamped_letters", 1))
module.exports = {
    calculateRate : calculateRate
} 
