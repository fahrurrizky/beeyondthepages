import React from 'react'
import AfterSignin  from './components_landingpage/AfterSignin'
import BeforeSignin  from './components_landingpage/BeforeSignin'
import {Box} from "@chakra-ui/react";
import {useSelector} from 'react-redux'


const Navbar = () => {
    const login = localStorage.getItem ('token')
    const isLogin = useSelector((state) => state.authreducer.login)
    // const isLogin = localStorage.setItem
    // console.log(login)
    // console.log(isLogin)
  return (
    <Box>
        {isLogin?(
            <AfterSignin/>
        ):(
            <BeforeSignin/>
        )}
    </Box>
  )
}

export default Navbar