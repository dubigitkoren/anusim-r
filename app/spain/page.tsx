import { createSpainRecord } from "@/lib/actions/spain.actions"

export default async function Page() {


  const dt = new Date("2001-04-19");
  const appointment = {

    name: 'dubi',
    age: 50,
    birth: dt,
  };

  const newAppointment = await createSpainRecord(appointment);

  console.log(newAppointment);

  return (<div>Hi</div>)
  // let data = await fetch('https://localhost:44340/api/spain')
  // let posts = await data.json()
  // return (
  //   <ul>
  //     {posts.map((post:any) => (
  //       <li key={post.id}>{post.title}</li>
  //     ))}
  //   </ul>
  // )
}//https://dummyjson.com/docs/products