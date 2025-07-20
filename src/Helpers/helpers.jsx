export const apiURL = 'http://localhost:8080/api/';
export const autocompleteURL = 'autocomplete';
export const suggestionsURL = 'spellcheck';
export const searchPlanByTextUrl = 'search';


export const makePlansFromRawData = (data = []) => {

    return data.map(() => {
        return { key: 'rogers', title: 'Rogers', text: 'This is the first card.' }
    })

}