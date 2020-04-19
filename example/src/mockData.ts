import { ICapacity, IItem } from 'react-planner-component'

function getMonday(d: Date) {
    d = new Date(d)
    var day = d.getDay(),
        diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
}

export const mockItems = (): IItem[] => {
    const items: IItem[] = []

    const startDate = getMonday(new Date())
    const days = 60

    for (var i = 0; i < (days); i++) {
        const retDate = new Date(startDate)
        const colDate = new Date(retDate.setDate(startDate.getDate() + i))

        items.push({
            date: colDate,
            capacity: 1,
            sequenceNumber: 2,
            hexColor: '#CD5B33'
        })

        items.push({
            date: colDate,
            capacity: 2,
            displayAsGradient: true,
            hexColor: '#CD5B33',
            sequenceNumber: 1
        })

        items.push({
            date: colDate,
            capacity: 3,
            hexColor: '#CD5B33',
            sequenceNumber: 0
        })
    }    

    return items
}

export const mockCapacity = (): ICapacity[] => {
    const capacity: ICapacity[] = []
    const startDate = getMonday(new Date())
    const days = 60
    
    for (var i = 0; i < (days); i++) {
        const retDate = new Date(startDate)
        const colDate = new Date(retDate.setDate(startDate.getDate() + i))

        capacity.push({
            date: colDate,
            capacity: 6
        })
    }

    return capacity
}