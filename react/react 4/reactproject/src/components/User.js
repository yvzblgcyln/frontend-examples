function User(props) {

	return (
		<div>
			<p> name: {props.name}</p>
			<p> age: {props.age}</p>
			<p> city: {props.city}</p>

			{props.friends.map((friend,i) => (
				<div key={i}> {friend.name} </div>
			))}
		</div>
	);
}

export default User;