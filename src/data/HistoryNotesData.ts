

export interface IHistoryNotes {
    id: number,
    userName: string,
    noteDetails: string,
    date: string
}

const HistoryNotesData: IHistoryNotes[] = [
    {
        id: 1,
        userName: 'Jennifer Smith',
        noteDetails: 'This Item need to be checked',
        date: '03.02.2021-15:00PM'
    },
    {
        id: 2,
        userName: 'Jennifer Smith',
        noteDetails: 'This Item need to be checked',
        date: '03.02.2021-15:00PM'
    },
]

export default HistoryNotesData