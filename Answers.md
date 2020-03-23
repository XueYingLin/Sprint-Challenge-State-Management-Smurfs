1. What problem does the context API help solve?

Answer: solve props drilling problem

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Answer: Actions use for payload data, which  is send to the store from the app.  Actions describe what happen.

Reducers specify the app’s state changes based on the action type. Update state

Stores hold objects and states together.

Stores hold app states, allow access states and update states. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Answer: App state is global, which controls the whole app; and component state is local, which lives inside that component only.


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?


Anwer: thunk is a middleware, use it to call action creators to get a function instead of an action object. The function receives the store dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Answer: my favorite state management is react context api. For me, it's like a global static variable. When it is needed, insert it inside components. For me, it reduces the props used, and less logic behind comparing redux.

