RUN `npm i`
RUN `npm start`

I don't understand why the state remains with `Start`. I would expect it to automatically go to the Fulfilled state, but it seems like the `always`-guard is not being run. Am I not understanding how this works or is there an issue?
