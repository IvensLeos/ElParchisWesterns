import React from 'react'
import { render } from 'react-dom'

import * as serviceWorker from './serviceWorker'

import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'

import { ContextProvider } from './context/Context'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/App'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_mV6etXc4I0aogrW8MaStXgHe006EdkmpJE')
const Client = new ApolloClient({ uri: `/graphql` })

render(
  <ApolloProvider client={Client}>
    <ContextProvider>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </ContextProvider>
  </ApolloProvider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()