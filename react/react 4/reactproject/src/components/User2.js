function User2({ user , friends }) {

	return (
		<div>
			<p> name: {user.name}</p>
			<p> age: {user.age}</p>
			<p> city: {user.city}</p>

			{friends.map((friend) => (
				<div key={friend.id}> {friend.name} </div>
			))}
		</div>
	);
}

export default User2;