import React from 'react';
import PropTypes from 'prop-types'

function Statistics({title, stats}){

return (
<section className="statistics">
    {title && <h2 className="title">{title}</h2>}

    <ul className="stat-list">
    {stats.map(stat => {      
    const {id, label, percentage} = stat;

    return (
        <li key={id} className="item">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
        </li>)}
        )
        }
    </ul>
</section>
    );
}

Statistics.defaultProps = {
    title: '',
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    )
}

export default Statistics;
