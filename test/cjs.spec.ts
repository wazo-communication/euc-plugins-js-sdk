// @ts-ignore
import { app } from '../lib/cjs';

window.parent.postMessage = jest.fn();

test('expected message returned from a Common JS import', () => {
  app._initializeCompleted = true;
  app.startCall({ targets: ['*10'], requestedModalities: ['video'] });

  const message = { type: 'wazo/START_CALL', targets: ['*10'], requestedModalities:  ['video'], _pluginId: null, _entityId: null };
  expect(window.parent.postMessage).toHaveBeenCalledWith(message, '*');
})
