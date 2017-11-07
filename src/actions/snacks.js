import { v4 } from 'node-uuid';

export const clearSnacks = () => ({
  type: 'SNACK_CLEAR_ALL',
});

export const sendSnack = snack => ({
  type: 'SNACK_QUEUE',
  snack: {
    ...snack,
    id: v4(),
  },
});

export const sendImportantSnack = snack => ({
  type: 'SNACK_POP_IMPORTANT',
  snack: {
    ...snack,
    id: v4(),
  },
});

export const dismissSnack = snackId => ({
  type: 'SNACK_DISMISS',
  id: snackId,
});
