import { LanguageContext }from './LanguageContext';


const Selected = {
    en: {
        CHANGE: 'You are now on the english website version'
    },
    it: {
        CHANGE: 'Sei ora nella versione italiana del sito'
    }
}

export function DisplayLanguage(){
        return(
            <div>
                <LanguageContext.Consumer>
                    {(language) => {
                        return (
                            <div>
                                <h1>{Selected[language].CHANGE}</h1>
                            </div>
                        )
                    }}
                </LanguageContext.Consumer>
            </div>
        )
}