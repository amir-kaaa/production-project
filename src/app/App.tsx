import { Suspense } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { MainPage } from 'pages/MainPage/index'
import { AboutPage } from 'pages/Aboutpage/index'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'

const App = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>

            <button onClick={toggleTheme}>toggle</button>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes >
                    <Route path={'/'} element={<MainPage />} />
                    <Route path={'/about'} element={<AboutPage />} />
                </Routes>
            </Suspense>

        </div>
    )
}

export default App