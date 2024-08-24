import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { AlarmsViewProps } from './Alarms.types';

const NativeView: React.ComponentType<AlarmsViewProps> =
  requireNativeViewManager('Alarms');

export default function AlarmsView(props: AlarmsViewProps) {
  return <NativeView {...props} />;
}
