export const newsFetching = ()=> {
    return{
        type:"NEWS_FETCHING"
    }
}
export const newsFetched = (news)=> {
    return{
        type:"NEWS_FETCHED",
        payload:news
    }
}

export const newsFetchingErro = () => {
    return {
        type:"FETCHING_ERROR"
    }
}

export const newsCreated = (news) => {
    return{
        type:"NEWS_CREATED",
        payload:news
    }
}

export const filtersFetching = () => {
    return{
        type:"FILTERs_FETCHING"
    }
}

export const filtersFetched = (filters) => {
    return{
        type: "FILTERS_FETCHED",
        payload:filters
    }
}

export const activeFilterChanged = (filter) => {
    return{
        type:"ACTIVE_FILTER_CHANGED",
        payload:filter
    }
}

export const newsDeleted = (id) => {
    return{
        type: "NEWS_DELETED",
        payload:id
    }
}

