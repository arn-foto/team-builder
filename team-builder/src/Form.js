import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const teamMembers = [
	{ id: uuid(), name: 'Anthony', email: 'Anthony@lambda.com', role: 'clown' },
	{ id: uuid(), name: 'Matias', email: 'Matias@lambda.com', role: 'nerd' },
	{ id: uuid(), name: 'Adrian', email: 'Adrian@lambda.com', role: 'nerd' },
	{ id: uuid(), name: 'Kyle', email: 'Kyle@lambda.com', role: 'nerd' }
];

function OurTeam() {
	const [ members, setMembers ] = useState(teamMembers);
	const [ value, setValue ] = useState({
		name: '',
		email: '',
		role: ''
	});

	const inputChange = (event) => {
		const changeName = event.target.name;
		const changeValue = event.target.value;

		setValue({ ...value, [changeName]: changeValue });
	};

	const formSubmit = (event) => {
		event.preventDefault();

		const newMember = {
			id: uuid(),
			name: value.name,
			email: value.email,
			role: value.role
		};

		setMembers([ ...members, newMember ]);
	};

	return (
		<div className="container">
			<div className="list">
				<h2>List of brave fools.</h2>
				<ul>
					{members.map((fr) => (
						<ul key={fr.id}>
							{fr.name} {fr.email} {fr.role}
						</ul>
					))}
				</ul>
			</div>
			<form onSubmit={formSubmit}>
				<label>
					Name
					<input name="name" placeholder="Name" value={value.name} onChange={inputChange} />
				</label>

				<label>
					Email
					<input name="email" placeholder="Email" value={value.email} onChange={inputChange} type="email" />
				</label>

				<label>
					Role
					<input name="role" placeholder="Role" value={value.role} onChange={inputChange} />
				</label>

				<input className="button" type="submit" />
			</form>
		</div>
	);
}

export default OurTeam;
