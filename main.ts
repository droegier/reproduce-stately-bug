import { createActor } from 'xstate';
import { machine } from './machine';

async function bootstrap() {
  console.log('buwstwap');

  const snapshot = {
    status: 'active',
    output: null,
    error: null,
    value: {
      'Data Preparation': {
        Intake: {
          LawLift: 'Received',
          Passports: 'Received',
          'Payment Requirement': 'Start',
        },
      },
    },
    historyValue: {},
    context: {},
    children: {},
  } as any;
  const actor = createActor(machine, {
    snapshot, // && Object.assign({ children: {} }, snapshot),
  });
  actor.start();
  console.log(snapshot.value);
}

bootstrap();
