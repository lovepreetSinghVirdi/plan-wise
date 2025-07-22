export const apiURL = 'http://localhost:8080/api/';
export const autocompleteURL = 'autocomplete';
export const suggestionsURL = 'spellcheck';
export const searchPlanByTextUrl = 'search';


import rogersLogo from '../assets/Rogers.svg';
import iprimusLogo from '../assets/iprimus_logo.svg';
import vmediaLogo from '../assets/vmedia.svg';
import teksavvyLogo from '../assets/teksavvy.svg';
//import dodoLogo from '../assets/Rogers.svg';
export const capitalize = (str = '') => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}


export const brandLogo = (site = '') => {
    switch (site.toLowerCase()) {
        case 'rogers':
            return rogersLogo;
        case 'iprimus':
            return iprimusLogo;
        case 'vmedia':
            return vmediaLogo;
        case 'teksavvy':
            return teksavvyLogo;
       
        default:
            return '';


    }
};



export const makePlansFromRawData = (plans = []) => {

    return plans.map((plan) => {
        return { ...plan, planName: plan?.site?.toUpperCase() === 'DODO' ? (plan.features || '') : plan.planName }
    })

}