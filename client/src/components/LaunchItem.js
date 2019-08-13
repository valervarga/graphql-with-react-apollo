import React from 'react';
import Moment from 'react-moment';
import { NavLink } from 'react-router-dom';

const LaunchItem = ({ launch: { flight_number, mission_name, launch_success, launch_date_local } }) => {
	return (
		<div className="card card-body mb-3">
			<div className="row">
				<div className="col-md-9">
					<h4>Mission: <span className={ launch_success ? 'text-success': 'text-danger' }>{ mission_name }</span></h4>
					<p>Date: <Moment format="YYYY-MM-DD HH:mm">{ launch_date_local }</Moment></p>
				</div>
				<div className="col-md-3">
					<NavLink className="btn btn-secondary" to={`/launch/${flight_number}`}>Launch Details</NavLink>
				</div>
			</div>
		</div>
	)
};

export default LaunchItem;
