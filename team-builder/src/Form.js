import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
//UUID (Universal Unique Identifier) is used to uniquely identify some object

// set team members value
const teamMembers = [
	{ id: uuid(), name: 'Anthony', streetName: '"The Weirdo"', lastName: 'Navarro' },
	{ id: uuid(), name: 'Matias', streetName: '"The Hammer"', lastName: 'Iturbide' },
	{ id: uuid(), name: 'Adrian', streetName: '"The Brain"', lastName: 'Hartley' },
	{ id: uuid(), name: 'Kyle', streetName: '"The Clopper"', lastName: 'Clopton' }
];
//setting state
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
		//  The spread operator can be used to take an
		// existing array and add another element to it while still preserving the original array
		setMembers([ ...members, newMember ]);
	};

	/*this maps through the team member data and outputs it to the screen */
	return (
		<div className="container">
			<div className="list">
				<h2>Cage Fight Sign Up.</h2>
				<ul>
					{members.map((value) => (
						<ul key={value.id}>
							{value.name} {value.streetName} {value.lastName}
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
