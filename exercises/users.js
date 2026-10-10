export default async function getUser(id){
	const url = new URL( "https://jsonplaceholder.typicode.com/users");
	url.searchParams.set("id", String(id));
	const response = await fetch(url.toString());
	if(!response.ok)throw new Error("nawt okay");
	const user= await response.json();
	if(user[0]==undefined)throw new Error("User not found");
	return user[0];

}
