/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { useJwt } from 'react-jwt';
import { useSelector } from 'react-redux'

const Subscription = () => {
    const [user, setUser] = useState<any>({})
    const { token } = useSelector((state: any) => state.signin);
    const {decodedToken, isExpired} = useJwt(token)

    // useEffect(() => {
    //     setUser(decodedToken.email)
    // })
    console.log(decodedToken)

    return (
    <div>
      {/* hi {decodedToken.email} */}
    </div>
  )
}

export default Subscription
