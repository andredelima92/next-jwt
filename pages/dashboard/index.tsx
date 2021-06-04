import { GetServerSideProps } from "next";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/api";
import { parseCookies } from "nookies";
import { getApiClient } from "../../services/axios";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get("/users");
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{user?.name}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getApiClient(ctx);

  const { "nextauth.token": token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  await apiClient.get("/user");

  return {
    props: {},
  };
};
