import { useParams } from "react-router-dom";

export function Documents() {
  const params = useParams<{
    type: string;
  }>();

  const handleParams = () => {
    switch (params.type) {
      case "terms":
        return <h1>terms</h1>;
      case "privacy":
        return <h1>privacy</h1>;
      default:
        return <h1>Documents</h1>;
    }
  };

  return <div>{handleParams()}</div>;
}
