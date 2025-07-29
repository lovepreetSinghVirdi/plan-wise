//api endpoints
export const apiURL = 'http://localhost:8080/api/';
export const autocompleteURL = 'autocomplete';
export const suggestionsURL = 'spellcheck';
export const searchPlanByTextUrl = 'search';
export const topTrendingWordsURL = 'freq/top';
export const crawlSiteUrl = 'crawl';


//images
import rogersLogo from '../assets/Rogers.svg';
import iprimusLogo from '../assets/iprimus_logo.svg';
import vmediaLogo from '../assets/vmedia.svg';
import teksavvyLogo from '../assets/teksavvy.svg';
import dodoLogo from '../assets/dodo.svg';



// Regex constants
export const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
export const PHONE_REGEX = /^\+[1-9][0-9]{0,2}[ -]?(\(\d{3}\)|\d{3})[ -]?\d{3}[ -]?\d{4}$/;
export const ADDRESS_NUMBER_REGEX = /^\d+[\s,]+/;
export const CANADA_POSTAL_REGEX = /[A-Za-z]\d[A-Za-z]\s?\d[A-Za-z]\d$/;
export const MESSAGE_REGEX = /^.{50,}$/;
export const URL_REGEX = /^(https?:\/\/)?(?:([A-Za-z\d](?:[A-Za-z\d-]*[A-Za-z\d])?\.)+[A-Za-z]{2,}|localhost)(?::\d{2,5})?(?:\/[^\s?#]*)?(?:\?[^\s#]*)?(?:\#[^\s]*)?$/;



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

// ISP urls 
const ispUrls = {
  rogers: 'https://www.rogers.com/internet/packages',
  iprimus: 'https://www.iprimus.com.au/nbn-plans',
  teksavvy: 'https://www.teksavvy.com/services/internet/',
  dodo: 'https://www.dodo.com/nbn',
  vmedia: 'https://www.vmedia.ca/en/internet/ontario',
};

const parseFeatures = (features = '') => {
  return features
    .split('|')                // split on pipe
    .map(f =>
      f
        .trim()                // trim whitespace
        .replace(/\.$/, '')    // remove trailing dot
    )
    .filter(f => f.length > 0); // drop empty entries
};

export const makePlansFromRawData = (plans = []) =>
  plans.map(plan => {
    const siteKey = plan.site?.toLowerCase() ?? '';
    return {
      ...plan,
      url: ispUrls[siteKey] || '',
      features: parseFeatures(plan.features),
      planName: plan.planName,
    };
  });
