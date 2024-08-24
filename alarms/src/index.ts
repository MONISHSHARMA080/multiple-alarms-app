import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to Alarms.web.ts
// and on native platforms to Alarms.ts
import AlarmsModule from './AlarmsModule';
import AlarmsView from './AlarmsView';
import { ChangeEventPayload, AlarmsViewProps } from './Alarms.types';

// Get the native constant value.
export const PI = AlarmsModule.PI;

export function hello(): string {
  return AlarmsModule.hello();
}

export async function setValueAsync(value: string) {
  return await AlarmsModule.setValueAsync(value);
}

const emitter = new EventEmitter(AlarmsModule ?? NativeModulesProxy.Alarms);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { AlarmsView, AlarmsViewProps, ChangeEventPayload };
