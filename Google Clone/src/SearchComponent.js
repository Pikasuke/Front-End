import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import './SearchComponent.css'
import { Button } from '@material-ui/core'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function SearchComponent({ hideButtons = false }) {
    const [state, dispatch] = useStateValue()
    const [input, setInput] = useState("")
    const history = useHistory()

    const search = (e) => {
        e.preventDefault();
        history.push('/search')
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
    }

    return (

        // Pour avoir un input field connecté à la touche entré du clavier
        //metre la div entiere en form et le boutton onClick en type ='submit'
        <form className="search">
            <div className="search_input">
                <SearchIcon className="input_icon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon className="input_icon" />
            </div>

            {hideButtons ? (
                <div className="search_buttons">
                    <Button type='submit' onClick={search} variant="outlined">Google Search</Button>
                    <Button>I'm Feeling Lucky</Button>
                </div>
            ) : (
                    <div className="search_buttonsHidden ">
                        <Button className="search_buttonsHidden " type='submit' onClick={search} variant="outlined">Google Search</Button>
                        <Button className="search_buttonsHidden " >I'm Feeling Lucky</Button>
                    </div>

                )}

        </form>
    )
}

export default SearchComponent
