import * as React from 'react'
import {render} from 'react-dom'
import { Headder } from './utils/Headder'

import { MainProvider} from './context/MainContext'
import {Comment} from './components/Comment';

function Main() {
    return (
        <MainProvider>
            <Headder title="main app" />
            <Comment />
        </MainProvider>
    )
}

render(<Main />,document.getElementById("app"))
