import React, { createContext } from "react";
import { DisplayLanguage } from './DisplayLanguage'

export const LanguageContext = createContext('en')


export class LanguageComponent extends React.Component {


    state = {
        language: 'en'
    }

    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value
        })
    }

    render() {
        return (
            <div>
                <select style={{fontSize:25, color:'gray'}} value={this.state.language} onChange={this.handleLanguageChange}>
                    <option style={{fontSize:25, color:'gray'}} value='en'>ENGLISH</option>
                    <option  style={{fontSize:25, color:'gray'}} value='it'>ITALIANO</option>
                </select>
                <LanguageContext.Provider value={this.state.language}>
                    <DisplayLanguage />
                </LanguageContext.Provider>
            </div>
        )
    }
}