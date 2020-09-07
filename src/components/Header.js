import React from "react";
import { EmojioneV4 } from "react-emoji-render";

// Header component for the web site.
const Header = () => {
    return (
        <div className='d-flex flex-row justify-content-center align-items-center pt-4'>
            <h1 id='siteTitle' className='mt-1'>
                Open Brewery React
            </h1>
            <EmojioneV4 style={{ fontSize: "3em" }} text=':beer:' />
        </div>
    );
};

export default Header;
