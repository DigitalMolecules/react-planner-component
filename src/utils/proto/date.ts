/*eslint no-extend-native: ["error", { "exceptions": ["Date"] }]*/

/** Retrieve a random element from the list */
Object.defineProperty(Date.prototype, 'addDays', {
    value: function (days: number) {
        var date = new Date(this.valueOf())
        date.setDate(date.getDate() + days)
        return date
    }
})

Object.defineProperty(Date.prototype, 'getWeek', {
    value: function () {
        // Create a copy of this date object
        var target = new Date(this.valueOf())

        // ISO week date weeks start on Monday, so correct the day number
        var dayNr = (this.getDay() + 6) % 7

        // ISO 8601 states that week 1 is the week with the first Thursday of that year
        // Set the target date to the Thursday in the target week
        target.setDate(target.getDate() - dayNr + 3)

        // Store the millisecond value of the target date
        var firstThursday = target.valueOf()

        // Set the target to the first Thursday of the year
        // First, set the target to January 1st
        target.setMonth(0, 1)

        // Not a Thursday? Correct the date to the next Thursday
        if (target.getDay() !== 4) {
            target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7)
        }

        // The week number is the number of weeks between the first Thursday of the year
        // and the Thursday in the target week (604800000 = 7 * 24 * 3600 * 1000)
        return 1 + Math.ceil((firstThursday - target.getDay()) / 604800000)
    }
})

Object.defineProperty(Date.prototype, 'getWeekUnique', {
    value: function () {
        return `YW${this.getFullYear()}${this.getWeek()}`
    }
})

export function getMonday(d: Date) {
    d = new Date(d)
    var day = d.getDay(),
        diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
}

Object.defineProperty(Date.prototype, 'getMonday', {
    value: function () {
        return getMonday(this)
    }
})