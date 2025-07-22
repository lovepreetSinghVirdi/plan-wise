export const apiURL = 'http://localhost:8080/api/';
export const autocompleteURL = 'autocomplete';
export const suggestionsURL = 'spellcheck';
export const searchPlanByTextUrl = 'search';
export const getMostSearchedWordsURL = 'freq/count';


import rogersLogo from '../assets/Rogers.svg';
import iprimusLogo from '../assets/iprimus_logo.svg';
import vmediaLogo from '../assets/vmedia.svg';
import teksavvyLogo from '../assets/teksavvy.svg';
import dodoLogo from  '../assets/dodo.svg';

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
        case 'dodo':
            return dodoLogo;
        default:
            return '';


    }
};


const parseFeatures = (features = '') => {
    return features.split('|');
}

export const makePlansFromRawData = (plans = []) => {

    return plans.map((plan) => {
        const features = parseFeatures(plan.features);

        return { ...plan, features: plan?.site?.toUpperCase() === 'DODO' ? [] : features, planName: plan?.site?.toUpperCase() === 'DODO' ? (plan.features || '') : plan.planName }
    })

}