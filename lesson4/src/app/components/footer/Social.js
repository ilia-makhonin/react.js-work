import React from 'react';
import twitter from './../../styles/if_twitter_circle_color_107170.png';
import facebook from './../../styles/if_facebook_circle_color_107175.png';
import github from './../../styles/if_github_circle_black_107161.png';

export default class Social extends React.Component {
    render() {
        return (
            <div className="social_icons">
                <ul className="icons_list">
                    <li key="icon1" className="icon_item">
                        <a href="" className="social_link">
                            <img src={twitter} alt="twitter" className="icon"/>
                        </a>
                    </li>
                    <li key="icon2" className="icon_item">
                        <a href="" className="social_link">
                            <img src={facebook} alt="twitter" className="icon"/>
                        </a>
                    </li>
                    <li key="icon3" className="icon_item">
                        <a href="" className="social_link">
                            <img src={github} alt="twitter" className="icon"/>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}