//const url = new URL("https://jsonplaceholder.typicode.com/users");
//
//url.searchParams.set("id", "1");
//console.log(url.toString());
//try{
//	const response = await fetch(url.toString());
//	if(!response.ok){
//		throw new Error("nawt ok");
//	}
//	const user = await response.json();
//	console.log(`Name: ${user[0].name}`);
//}
//catch(error){
//	console.error("din werk: "+error.message);
//}
//

import getUser from "./users.js";
try{

	const u1 = await getUser(1);
	console.log(u1.name);
	const u2 = await getUser(999);
	console.log(u2.name);
}
catch(error){
	console.error("Error: "+error.message);
}
