import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const teamMembers = [
	{ id: uuid(), name: 'Anthony', streetName: '"The Weirdo"', lastName: 'Navarro' },
	{ id: uuid(), name: 'Matias', streetName: '"The Hammer"', lastName: 'Iturbide' },
	{ id: uuid(), name: 'Adrian', streetName: '"The Brain"', lastName: 'Hartley' },
	{ id: uuid(), name: 'Kyle', streetName: '"The Clobber"', lastName: 'Clopton' }
];

function OurTeam() {
	const [ members, setMembers ] = useState(teamMembers);
	const [ value, setValue ] = useState({
		name: '',
		streetName: '" "',
		lastName: ''
	});

	const inputChange = (event) => {
		const changeName = event.target.name;
		const changeValue = event.target.value;

		setValue({ ...value, [changeName]: changeValue });
	};

	const formSubmit = (event) => {
		event.preventDefault(); //prevents pages from autorefreshing

		let newMember = {
			id: uuid(),
			name: value.name,
			streetName: value.streetName,
			lastName: value.lastName
		};

		setMembers([ ...members, newMember ]);
	};

	return (
		<div className="container">
			<div className="list">
				<h2>Cage Fight Sign Up.</h2>
				<ul>
					{members.map((fr) => (
						<ul key={fr.id}>
							{fr.name} {fr.streetName} {fr.lastName}
						</ul>
					))}
				</ul>
			</div>
			<form onSubmit={formSubmit}>
				<label>
					First Name
					<input name="name" placeholder="" value={value.name} onChange={inputChange} required />
				</label>

				<label>
					Street Name
					<input name="streetName" placeholder="" value={value.streetName} onChange={inputChange} />
				</label>

				<label>
					Last Name
					<input name="lastName" placeholder="" value={value.lastName} onChange={inputChange} />
				</label>

				<input className="button" type="submit" />
			</form>
		</div>
	);
}

export default OurTeam;
