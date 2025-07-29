//api endpoints
export const apiURL = import.meta.env.VITE_API_URL;
export const autocompleteURL = 'autocomplete';
export const suggestionsURL = 'spellcheck';
export const searchPlanByTextUrl = 'search';
export const topTrendingWordsURL = 'freq/top';
export const crawlSiteUrl = 'crawl';
export const submitFormUrl = 'contact/send';


//images
import rogersLogo from '../assets/Rogers.svg';
import iprimusLogo from '../assets/iprimus_logo.svg';
import vmediaLogo from '../assets/vmedia.svg';
import teksavvyLogo from '../assets/teksavvy.svg';
import dodoLogo from '../assets/dodo.svg';



// Regex constants

/**
 * [A-Za-z0-9._%+-]+ local part before the @ one ore more 
 * @ seperating the local part to the domain
 * [A-Za-z0-9.-]+ domain one or more( dot and hyphen)
 * \. literal before the top level domain
 * [A-Za-z]{2,4} excatly 2to 4 letters 
 */
export const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

/**
 * \+1 country code allowed 
 * [ -] eaither the space or the hyphen 
 * (\(\d{3}\)|\d{3}) three digit with the pranthesis and without it allowed
 * 
 */
export const PHONE_REGEX = /^\+1[ -]?(\(\d{3}\)|\d{3})[ -]?\d{3}[ -]?\d{4}$/;

/**
 * if i keep only . then it is must to be in the same line but
 * after putting s in the end it is allowing me to use the new line 
 */
export const MESSAGE_REGEX = /^.{50,}$/s;

/**
 * [A-Za-z\d]                # 1st char: letter or digit
(?:                        # ── start non‑capturing group
   [A-Za-z\d-]*            #   zero or more letters/digits/hyphens
   [A-Za-z\d]              #   one letter or digit
)?                         # ── the entire group is “optional”
can not start and the end with the - must be the digit or the number 
 */
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
