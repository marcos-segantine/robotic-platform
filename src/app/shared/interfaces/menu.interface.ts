export interface IMenu {
    name: string,
    path: string,
    method: () => void,
    isSelected?: boolean
}