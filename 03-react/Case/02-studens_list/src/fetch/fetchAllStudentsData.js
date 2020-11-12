///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export {

    fetchAllStudentsData
}


//-------------------------------------------------------------------------------------------------------------------//


async function fetchAllStudentsData(url) {

    return await fetch(url)

        .then(resp => resp.json())
        .then(resp => resp.data);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
