import React from 'react';

const ChildComponent = ({UserInfo,developerInfo}) => {
    return (
        <div className='bg-red-100 shadow rounded-b-md p-4'>
            <p>User Name:{UserInfo.name}</p>
            <p>User Id:{UserInfo.id}</p>
            <p>User Email:{UserInfo.email}</p>
            <div className='bg-amber-500 shadow rounded-b-md p-4'>
            <p>User Name:{developerInfo.name}</p>
            <p>User Id:{developerInfo.id}</p>
            <p>User Email:{developerInfo.email}</p>
        </div>
        </div>
    );
};

export default ChildComponent;