import React from "react";

const Footer = () => {
    return (
        <footer className='my-4'>
            <p className='text-center my-0'>
                Credit to{" "}
                <a
                    aria-label='Chris J Mears, creator of Open Brewery DB API'
                    href='https://chrisjmears.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Chris J Mears
                </a>{" "}
                and{" "}
                <a
                    aria-label='Wanderling Leaf Studios LLC, creator of Open Brewery DB API'
                    href='https://wanderingleafstudios.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Wandering Leaf Studios LLC
                </a>{" "}
                for the{" "}
                <a
                    aria-label='Open Brewery DB API website'
                    href='https://www.openbrewerydb.org/'
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    Open Brewery DB API
                </a>
                .
            </p>
            <div className='d-flex justify-content-center my-0'>
                <p>View the code for this project on </p>
                <a
                    href='https://github.com/ramos07/OpenBreweryReactApp'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <i
                        className='fab fa-github fa-lg mx-2'
                        style={{ color: "#032535" }}
                    ></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
