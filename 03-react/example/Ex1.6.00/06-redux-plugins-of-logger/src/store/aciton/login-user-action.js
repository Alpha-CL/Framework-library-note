///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//-------------------------------------------------------------------------------------------------------------------//


const SETLOGINUSERTYPE = Symbol('set-login-user');

function createSetLoginUserAction(user) {

    return {

        type: SETLOGINUSERTYPE,
        payload: user
    }
}


//-------------------------------------------------------------------------------------------------------------------//


export {
    SETLOGINUSERTYPE,
    createSetLoginUserAction
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////