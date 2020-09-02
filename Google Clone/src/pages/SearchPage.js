import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from './useGoogleSearch';
import { Link } from 'react-router-dom';
import SearchComponent from './SearchComponent';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';


function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    // const {data} = useGoogleSearch(term)

    console.log("response")
    return (
        <div className="searchPage">
            <div className="searchPage_header">
                <Link to="/">
                    <img className="searchPage_logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="google logo" />
                </Link>
                <div className="searchPage_headerBody">
                    <SearchComponent />
                    <div className="searchPage_options">
                        <div className="searchPage_optionLeft">
                            <div className="searchPage_option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage_option">
                                <DescriptionIcon />
                                <Link to="/all">News</Link>
                            </div>
                            <div className="searchPage_option">
                                <ImageIcon />
                                <Link to="/all">Images</Link>
                            </div>
                            <div className="searchPage_option">
                                <LocalOfferIcon />
                                <Link to="/all">Shopping</Link>
                            </div>
                            <div className="searchPage_option">
                                <RoomIcon />
                                <Link to="/all">maps</Link>
                            </div>
                            <div className="searchPage_option">
                                <MoreVertIcon />
                                <Link to="/all">more</Link>
                            </div>
                        </div>
                        <div className="searchPage_optionsRight">
                            <div className="searchPage_option">
                                <Link to ="/settings">Settings</Link>
                            </div>
                            <div className="searchPage_option"></div>
                            <Link to ="./tools">Tools</Link>

                        </div>
                    </div>
                </div>
            </div>
            <div className="searchPage_results"></div>
        </div>
    )
}

export default SearchPage
