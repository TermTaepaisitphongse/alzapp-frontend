import "antd/dist/antd.css";
import "../styles/vars.css";
import "../styles/global.css";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  let token = "";
  if (typeof localStorage !== "undefined") {
    token = localStorage.getItem("alzapp_token");
    console.log(token);
  }
  console.log(router.pathname);
  const needLogin = [
    "/services/medical-records",
    "/services/todo-list",
    "/servies/calendar",
  ];

  return (
    <>
      <Navbar />
      {token == "" && needLogin.includes(router.pathname) ? (
        <h1>please log in</h1>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
