
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import Form from "./Components/Form"

const errorLink = onError(({ graphqlErrors, networkError }) => {
  // graphql settings 
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  //connect to graphql server on your 3001
  errorLink,
  new HttpLink({ uri: "http://localhost:3001/graphql" }),
]);

const client = new ApolloClient({
  //more graphql settings
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client = {client}>
      <Form />
    </ApolloProvider>
  );
}

export default App;
