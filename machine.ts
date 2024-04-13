/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { setup } from "xstate";

export const machine = setup({
  types: {
    context: {} as {},
    events: {} as any,
  },
  guards: {},
  schemas: {},
}).createMachine({
  context: {},
  id: "Incorporation KG (Version 4)",
  initial: "Start",
  on: {},
  states: {
    Start: {
      always: {
        guard: ({ context }) => {
          console.log("pup");
          return true;
        },
        target: "Fulfilled",
      },
    },
    Fulfilled: {
      type: "final",
    },
  },
});
