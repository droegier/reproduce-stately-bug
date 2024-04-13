import { createActor } from "xstate";
import { machine } from "./machine";

async function bootstrap() {
  const snapshot = {
    status: "active",
    output: null,
    error: null,
    value: "Start",
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
