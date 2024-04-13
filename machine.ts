/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { setup } from 'xstate';

export const machine = setup({
  types: {
    context: {} as {},
    events: {} as
      | { type: 'Payment' }
      | { type: 'Operator Cancels' }
      | { type: 'ZKB Approves Client' }
      | { type: 'Operator Raises Issue' }
      | { type: 'Client Submits LawLift' }
      | { type: 'Operator Handles Issue' }
      | { type: 'ZKB Disapproves Client' }
      | { type: 'Notary Submits Feedback' }
      | { type: 'Operator Processes Data' }
      | { type: 'Client Submits Documents' }
      | { type: 'Client Submits Passports' }
      | { type: 'ZKB Escalates Compliance' }
      | { type: 'SOGC Confirms Registration' }
      | { type: 'ZKB Initiates Compliance Check' }
      | { type: 'Operator Checks Final Documents' }
      | { type: 'Operator Handles Issue via Notary' }
      | { type: 'Client Pays Capital Deposit to ZKB' }
      | { type: 'Operator Fulfills AHV Registration' }
      | { type: 'Operator Fulfills VAT Registration' }
      | { type: 'Operator Processes Notary Submission' }
      | { type: 'Operator Submits Shareholders Register' }
      | { type: 'Client Submits Correct/Missing Information' }
      | { type: 'Commercial Registry Raises Issue via Notary' }
      | { type: 'ZKB Submits Capital Deposit Feedback to Jurata' }
      | { type: 'Operator Handles Issue with Commercial Registry' }
      | { type: 'Operator Submits Request for Capital Deposit to ZKB' }
      | { type: 'ZKB Sends Capital Deposit Payment Instruction to Jurata' }
      | { type: 'ZKB Sends Capital Deposit Payment Instructions to Client' },
  },
  guards: {
    'Order Contains Contribution in Kind': function ({ context, event }) {
      // Add your guard condition here
      return true;
    },
    'No consent ZKB': function ({ context, event }) {
      // Add your guard condition here
      return true;
    },
    'IF Contains Capital Payment Confirmation': function ({ context, event }) {
      // Add your guard condition here
      return true;
    },
    'Paid In Capital Contribution Documents are Correct': function ({
      context,
      event,
    }) {
      // Add your guard condition here
      return true;
    },
    'Signed Properly': function ({ context, event }) {
      // Add your guard condition here
      return true;
    },
    'Ordered VAT': function ({ context, event }) {
      // Add your guard condition here
      return true;
    },
    'Ordered AHV': function ({ context, event }) {
      // Add your guard condition here
      return true;
    },
    'Information is Correct, no Issue': function ({ context, event }) {
      // Add your guard condition here
      return true;
    },
    'Information is Incorrect/Missing': function ({ context, event }) {
      // Add your guard condition here
      return true;
    },
    'Express Incorporation OR Payment Full': function ({ context, event }) {
      console.log('Express Incorporation OR Payment Full');
      // Add your guard condition here
      return true;
    },
    'Documents Correct': function ({ context, event }) {
      // Add your guard condition here
      return true;
    },
    Full: function ({ context, event }) {
      // Add your guard condition here
      return true;
    },
    'Full Payment': function ({ context, event }) {
      // Add your guard condition here
      return true;
    },
    '(MIxed) Contiribution in Kind Documents are Correct': function ({
      context,
      event,
    }) {
      // Add your guard condition here
      return true;
    },
  },
  schemas: {
    events: {
      '': {
        type: 'object',
        properties: {},
      },
      Payment: {
        type: 'object',
        properties: {},
        description: '.',
      },
      'Operator Cancels': {
        type: 'object',
        properties: {},
      },
      'ZKB Approves Client': {
        type: 'object',
        properties: {},
      },
      'Operator Raises Issue': {
        type: 'object',
        properties: {},
      },
      'Client Submits LawLift': {
        type: 'object',
        properties: {},
      },
      'Operator Handles Issue': {
        type: 'object',
        properties: {},
      },
      'ZKB Disapproves Client': {
        type: 'object',
        properties: {},
      },
      'Notary Submits Feedback': {
        type: 'object',
        properties: {},
      },
      'Operator Processes Data': {
        type: 'object',
        properties: {},
        description: '',
      },
      'Client Submits Documents': {
        type: 'object',
        properties: {},
      },
      'Client Submits Passports': {
        type: 'object',
        properties: {},
        description:
          'Verify whether a valid copy of the passport was received and stored to the database.',
      },
      'ZKB Escalates Compliance': {
        type: 'object',
        properties: {},
      },
      'SOGC Confirms Registration': {
        type: 'object',
        properties: {},
      },
      'ZKB Initiates Compliance Check': {
        type: 'object',
        properties: {},
      },
      'Operator Checks Final Documents': {
        type: 'object',
        properties: {},
      },
      'Operator Handles Issue via Notary': {
        type: 'object',
        properties: {},
      },
      'Client Pays Capital Deposit to ZKB': {
        type: 'object',
        properties: {},
      },
      'Operator Fulfills AHV Registration': {
        type: 'object',
        properties: {},
      },
      'Operator Fulfills VAT Registration': {
        type: 'object',
        properties: {},
      },
      'Operator Processes Notary Submission': {
        type: 'object',
        properties: {},
      },
      'Operator Submits Shareholders Register': {
        type: 'object',
        properties: {},
      },
      'Client Submits Correct/Missing Information': {
        type: 'object',
        properties: {},
      },
      'Commercial Registry Raises Issue via Notary': {
        type: 'object',
        properties: {},
      },
      'ZKB Submits Capital Deposit Feedback to Jurata': {
        type: 'object',
        properties: {},
      },
      'Operator Handles Issue with Commercial Registry': {
        type: 'object',
        properties: {},
      },
      'Operator Submits Request for Capital Deposit to ZKB': {
        type: 'object',
        properties: {},
      },
      'ZKB Sends Capital Deposit Payment Instruction to Jurata': {
        type: 'object',
        properties: {},
      },
      'ZKB Sends Capital Deposit Payment Instructions to Client': {
        type: 'object',
        properties: {},
      },
    },
  },
}).createMachine({
  context: {},
  id: 'Incorporation KG (Version 4)',
  initial: 'Data Preparation',
  on: {
    'Operator Cancels': {
      target: '#Incorporation KG (Version 4).Cancelled',
    },
  },
  states: {
    'Data Preparation': {
      initial: 'Intake',
      onDone: {
        target: 'Completed',
      },
      states: {
        Intake: {
          type: 'parallel',
          onDone: {
            target: 'Pending Data Processing by Operator',
          },
          states: {
            LawLift: {
              initial: 'Waiting',
              states: {
                Waiting: {
                  on: {
                    'Client Submits LawLift': {
                      target: 'Received',
                    },
                  },
                },
                Received: {
                  type: 'final',
                },
              },
            },
            Passports: {
              initial: 'Waiting',
              states: {
                Waiting: {
                  on: {
                    'Client Submits Passports': {
                      target: 'Received',
                    },
                  },
                },
                Received: {
                  type: 'final',
                },
              },
            },
            'Payment Requirement': {
              initial: 'Start',
              states: {
                Start: {
                  always: {
                    guard: ({ context }) => {
                      console.log('pup');
                      return true;
                    },
                    target: 'Fulfilled',
                  },
                },
                Fulfilled: {
                  type: 'final',
                },
              },
            },
          },
        },
        'Pending Data Processing by Operator': {
          on: {
            'Operator Processes Data': [
              {
                target: 'Approved',
                guard: {
                  type: 'Information is Correct, no Issue',
                },
              },
              {
                target: 'Waiting for Correct/Missing Information from Client',
                guard: {
                  type: 'Information is Incorrect/Missing',
                },
              },
            ],
          },
        },
        Approved: {
          type: 'final',
        },
        'Waiting for Correct/Missing Information from Client': {
          on: {
            'Client Submits Correct/Missing Information': {
              target: 'Pending Data Processing by Operator',
            },
          },
        },
      },
    },
    Completed: {
      type: 'final',
    },
    Cancelled: {
      type: 'final',
    },
  },
});
