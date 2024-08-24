import Alarms from './AlarmsModule'

export function getTheme(): string {
  return Alarms.getTheme();
}

export function setTheme(theme: string): void {
  return Alarms.setTheme(theme);
}

export function setAlarm(hour: number, minutes: number, message: string, requestCode:number): void {
  return Alarms.setAlarm(hour, minutes, message, requestCode);
}