import React from 'react';

export interface loginInterface {
  onClick: () => void;
  onPressEnter: (event: React.KeyboardEvent) => void;
}
