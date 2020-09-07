// Modal that shows the details of each brewery
import React from "react";
import { EmojioneV4 } from "react-emoji-render";

// Function that formats phone number string from
// 1234567890 => (123) 456-7890
const formatNumber = (phoneStr) => {
    let cleaned = ("", phoneStr).replace(/\D/g, "");

    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
        return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }

    return null;
};

/**
 *
 * @param {object} brewery - The brewery that is selected by the user to view more details.
 */
const Details = ({ brewery }) => {
    const breweryAddress =
        brewery.street +
        ", " +
        brewery.city +
        ", " +
        brewery.state +
        " " +
        brewery.postal_code;

    // console.log(breweryAddress);

    return (
        <div>
            <div
                className='modal fade'
                id={"detailsModal_" + brewery.id}
                tabIndex='-1'
                role='dialog'
                aria-labelledby='detailsModal'
                aria-hidden='true'
                key={brewery.id}
            >
                <div
                    className='modal-dialog modal-dialog-centered'
                    role='document'
                >
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5
                                className='modal-title'
                                id='exampleModalLongTitle'
                            >
                                {brewery.name}
                            </h5>
                            <button
                                type='button'
                                className='close'
                                data-dismiss='modal'
                                aria-label='Close'
                            >
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div className='modal-body'>
                            <p>
                                <EmojioneV4
                                    className='mr-2'
                                    text=':beer:'
                                    style={{ fontSize: "1.5em" }}
                                />
                                {brewery.brewery_type[0].toUpperCase() +
                                    brewery.brewery_type.slice(1)}
                            </p>
                            <p>
                                <EmojioneV4
                                    className='mr-2'
                                    text=':house:'
                                    style={{ fontSize: "1.5em" }}
                                />
                                <a
                                    href={
                                        "http://maps.google.com/?q=" +
                                        breweryAddress
                                    }
                                    rel='noopener noreferrer'
                                    target='_blank'
                                    aria-label='Brewery address'
                                >
                                    {breweryAddress}
                                </a>
                            </p>
                            <p>
                                <EmojioneV4
                                    className='mr-2'
                                    text=':phone:'
                                    style={{ fontSize: "1.5em" }}
                                />
                                {brewery.phone ? (
                                    <a
                                        aria-label='Brewery phone number'
                                        href={
                                            "tel:" + formatNumber(brewery.phone)
                                        }
                                    >
                                        {formatNumber(brewery.phone)}
                                    </a>
                                ) : (
                                    <span>None</span>
                                )}
                            </p>
                            <p>
                                <EmojioneV4
                                    className='mr-2'
                                    text=':link:'
                                    style={{ fontSize: "1.5em" }}
                                />
                                {brewery.website_url ? (
                                    <a
                                        aria-label='Brewery website'
                                        href={brewery.website_url}
                                        target='_blank'
                                        rel='noreferrer noopener'
                                    >
                                        {brewery.website_url}
                                    </a>
                                ) : (
                                    <span>None</span>
                                )}
                            </p>
                        </div>
                        <div className='modal-footer'>
                            <button
                                type='button'
                                className='btn btn-danger'
                                data-dismiss='modal'
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
