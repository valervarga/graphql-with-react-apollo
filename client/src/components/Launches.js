import React from 'react'
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
	query LaunchesQuery {
		launches {
			flight_number,
			mission_name,
			launch_success,
			launch_date_local
		}
	}
`;

const Launches = () => {
	const { loading, error, data } = useQuery(LAUNCHES_QUERY);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: </p>;

	return (
		<>
			<MissionKey />
			{
				data.launches.map(launch => (
					<LaunchItem key={launch.flight_number} launch={launch} />
				))
			}
		</>
	);
}

export default Launches;
