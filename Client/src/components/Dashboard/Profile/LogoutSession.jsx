import React from 'react'

import { Redirect } from 'react-router-dom'

const LogoutSession = props => {

    /**
     * TODO: Fix With https://fb.me/setstate-in-render
     */

    const { setUser } = props
    setUser({})

    return <Redirect to="/" />
}

export default LogoutSession