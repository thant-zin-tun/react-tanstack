import {
  createFileRoute,
  useLoaderData,
  useParams,
} from "@tanstack/react-router";

export const Route = createFileRoute("/employee/$id")({
  component: EmployeeDetail,
  // loader: async ({ params }) => params.id,
});

function EmployeeDetail() {
  const { id } = useParams({ strict: false }); //Direct get params
  // const id = useLoaderData({ from: "/employee/$id" }); //FromLoader function from loader to use auto fetch by Id form server
  return <h1>Employee Detail ID is {id}</h1>;
}
