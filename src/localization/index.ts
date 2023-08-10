import en from './en';
//TODO localisation for another languages

import { useCallback } from 'react';

const LANGS: {[key: string]: {[key:string]: string}} = {
    en,
}

const getLocalizeFunc = (CurrentLang : string) => (textId: string, ...variables: any[]) => {
    if (LANGS[CurrentLang]) {
        if (!textId) {
            throw new Error('Could not find ' + textId)
        } {
            let translatedText =  LANGS[CurrentLang][textId]
            if (!translatedText) {
                return '';
            } else {
                variables.forEach((a, i) => {
                    translatedText = translatedText.replace(new RegExp('%' + (i+1), 'gi'), a)
                })
                return translatedText
            }
        }
    }

}

export const useLocalization = () => {
    const CurrentLang = 'en'; //TODO handle active language detection
    return useCallback(
        getLocalizeFunc(CurrentLang),
        [CurrentLang]
    );
}
