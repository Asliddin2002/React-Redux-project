// import { data } from "../Data"
const initialState = {
    news: [],
    newsLoadingStatus:false,
    filters: [],
    filterLoadingStatus:false,
    activeFilter:"all",
    filteredNews: []
}



export const reducer = (state = initialState, action) => {
    switch(action.type){
        case "NEWS_FETCHING":
            return{
                ...state,
                newsLoadingStatus:true
            }
        case "NEWS_FETCHED":
            return {
                ...state,
                news:action.payload,
                filteredNews:state.activeFilter === "all" ? action.payload : action.payload.filter(a => a.category === state.activeFilter),
                newsLoadingStatus: false
            }    
        case "FETCHING_ERROR":
            return{
                ...state,
                newsLoadingStatus:"error"
            }
        case "NEWS_CREATED":
            const newsCreated = [...state.news, action.payload]
            return{
                ...state,
                news:newsCreated
            }
        case "FILTERs_FETCHING":
            return{
                ...state,
                filterLoadingStatus:true
            }
        case "FILTERS_FETCHED":
            return{
                ...state,
                filters:action.payload,
                filterLoadingStatus:false

            }
        case "ACTIVE_FILTER_CHANGED":
            return{
                ...state,
                activeFilter:action.payload,
                filteredNews: action.payload === "all" ? state.news : state.news.filter(a => a.category === action.payload) 
            }
        case "NEWS_DELETED":
            const newsList = state.news.filter(a => a.id !== action.payload)
            return{
                ...state,
                news:newsList,
                filteredNews: state.activeFilter === "all" ? newsList : newsList.filter(a => state.activeFilter )
            }                    
        default:
            return state    
    }
}
// console.log(state.newdata.filter(a=> a.category === "BreackingNews")