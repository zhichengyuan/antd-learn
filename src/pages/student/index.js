import React from 'react'
import StudentPager from '@/components/containers/StudentPager'
import StudentTableContainer from '@/components/containers/StudentTableContainer'
import StudentSearchBarContainer from '@/components/containers/StudentSearchBarContainer'


 function index() {
    return (
        <div>
            <StudentSearchBarContainer/>
            <StudentTableContainer/>
            <StudentPager/>
        </div>
    )
}

index.wrappers = ['@/routes/PrivateRouter'];

export default index;
