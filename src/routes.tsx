import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Landing from './pages/Landing'
import TeacherList from './pages/TeacherList'
import TeacherFrom from './pages/TeacherForm'

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" component={Landing} exact/>
            <Route path="/study" component={TeacherList} />
            <Route path="/giv-classes" component={TeacherFrom} />
        </BrowserRouter>
    )
}

export default Routes;