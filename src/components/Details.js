// Modals that shows the details of each brewery
import React from "react";

const formatNumber = (phoneStr) => {
    let cleaned = ("", phoneStr).replace(/\D/g, "");

    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
        return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }

    return null;
};

const Details = ({ brewery }) => {
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
                                <i className='fa fa-beer mr-2'></i>
                                {brewery.brewery_type[0].toUpperCase() +
                                    brewery.brewery_type.slice(1)}
                            </p>
                            <p>
                                <i className='fas fa-building mr-2'></i>
                                {brewery.street}
                                {", " + brewery.city + " " + brewery.state}
                            </p>
                            <p>
                                <i className='fas fa-phone mr-2'></i>
                                {brewery.phone ? (
                                    <a
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
                                <i className='fas fa-link mr-2'></i>
                                {brewery.website_url ? (
                                    <a
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
                                className='btn btn-secondary'
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
