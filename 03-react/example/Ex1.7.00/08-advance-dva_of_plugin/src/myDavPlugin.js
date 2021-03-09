///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//-------------------------------------------------------------------------------------------------------------------//


const logger = store => next => action => {

    console.log('[oldState]: ', store.getState());
    next(action);
    console.log('[updateState]: ', store.getState());
    console.log('');
};


export default {

    onAction: logger
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////