import React from 'react'

import useLocalStorage from './useLocalStorage'

function useDarkMode(value) {
    // set state
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', value)

    // if darkmode, set body class
    React.useEffect(()=>{
        if (darkMode) document.body.classList.add('dark-mode')
        else document.body.classList.remove('dark-mode')
        // cleanup
        return () => {document.body.classList.remove('dark-mode')}
    },[darkMode])

    return [darkMode, setDarkMode]
}

export default useDarkMode