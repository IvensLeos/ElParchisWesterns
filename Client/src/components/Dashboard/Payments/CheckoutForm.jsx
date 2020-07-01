import React from 'react'

import { CardElement } from '@stripe/react-stripe-js'

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#ffffff',
      color: '#ffffff',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': { color: '#ffffff' },
      '::placeholder': { color: '#ffffff' },
    },
    invalid: {
      iconColor: '#ffffff',
      color: '#ffffff',
    },
  },
}

const CardField = ({ onChange }) => (
  <fieldset className="FormGroup">
    <div className="FormRow">
      <CardElement options={CARD_OPTIONS} onChange={onChange} />
    </div>
  </fieldset>
)

export default CardField