try{
	const response = await fetch( "https://jsonplaceholder.typicode.com/users?id=1&id=2");
	if(!response.ok){
		throw new Error("Not good bruv");
	}
	const users = await response.json();
//	const user = users[0];
//	console.log("Name: "+user.name+"\nEmail: "+user.email);
//	users.forEach((user)=>{console.log(`Name: ${user.name}\nEmail: ${user.email}`);});
	const usernames  = users.map((user)=>{return user.name});
	console.log(usernames);

}
catch(error){
	console.error("nahh "+error.message);
}
