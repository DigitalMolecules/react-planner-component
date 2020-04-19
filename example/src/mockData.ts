import { ICapacity } from 'react-planner-component'

export const mockCapacity = (): ICapacity[] => {
    const startDate = getMonday(new Date())
    const days = 60

    const capacity: ICapacity[] = []
    for (var i = 0; i < (days); i++) {
        const retDate = new Date(startDate)
        const colDate = new Date(retDate.setDate(startDate.getDate() + i))

        capacity.push({
            date: colDate,
            capacity: 5
        })
    }

    return capacity
}

function getMonday(d: Date) {
    d = new Date(d)
    var day = d.getDay(),
        diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
}