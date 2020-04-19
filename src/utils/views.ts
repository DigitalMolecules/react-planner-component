export enum ViewMode {
    'Day',
    'Week'
}

export interface ICapacity {
    date: Date
    capacity: number
}

export interface IItem {
    date: Date
    sequenceNumber: number
    capacity: number
    hexColor?: string
    displayAsGradient?: boolean
}