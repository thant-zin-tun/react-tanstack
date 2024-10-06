import { createFileRoute, redirect, useSearch } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutScreen,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      name: search.name as string,
      age: search.age as number,
      address: search.address as string,
    };
  },
  beforeLoad: ({ context, location }) => {
    if (!context.isAuthenticate) {
      throw redirect({
        to: "/login",
      });
    }
  },
});

function AboutScreen() {
  const { name, address, age } = useSearch({ strict: false });
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>Address: {address}</h1>
    </div>
  );
}

// this params type
// http://localhost:3000/about?name=Thant%20Zin%20Tun&age=27&address=Yangon
