export interface DropdownMenuActions {
  label: string,
  action: (...params: any) => void,
  icon: string,
  type: 'trigger' | 'action'
  color?: string
}
