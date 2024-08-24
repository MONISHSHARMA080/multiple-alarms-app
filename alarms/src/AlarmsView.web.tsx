import * as React from 'react';

import { AlarmsViewProps } from './Alarms.types';

export default function AlarmsView(props: AlarmsViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
