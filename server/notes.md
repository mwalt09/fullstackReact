React Redux


The Redux Store is where all or our state exists


To determine or change our current state, we call an 'action creator'
  An 'action creator':
    1. dispatches an action
    2. the action is sent to all the different reducers inside of our application
    3. those reducers are combined together with the 'combineReducers' call
    4. and that is used to update our state in the Redux Store


Flow of React - Redux
  1. React component calls an 'action creator'
  2. Action creator returns an action
  3. The action is sent to 'reducers'
  4. The reducers update state in the 'store'


'Provider' tag
  'Provider' tag is a React component that is provided by the React-Redux library
  'Provider' component is the bridge between React and Redux
  'Provider' is a component that makes the store accessible to every component in the app
  The 'store' is a redux component
  The 'store' is hooked up to the React side of the application by placing it within the 'Provider' tag
  The 'Provider' component knows how to read changes from the Redux Store
  The 'Provider' will inform / update all of its children components of state changes
  Therefore, 'Provider' must be the root level tag


Redux Thunk
  The whole purpose of Redux Thunk is to be able to create action creators and not have that action creator immediately return an action.

  Standard Redux expects an action creator to immediately return an action (a javascript object with a type property and, optionally, a payload). Thunk lets us get around that.

  Thunk allows us to dispatch an action at any point in time we wish rather than having it return an action immediately.

  Thunk allows us to directly handle the dispatch function.
