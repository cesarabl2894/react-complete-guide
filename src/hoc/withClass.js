import React from 'react';

const withClass = (WrappedCompoment, className) => {
    return props => (
        <div className={className}>
            <WrappedCompoment {...props}/>
        </div>
    )
}

export default withClass;