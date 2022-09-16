import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import CircularProgress from "@mui/material/CircularProgress";
import { getCookie, hasCookie } from "cookies-next";

const PrivateRouteHoc = ({ children }: any) => {
  const router = useRouter();
  const [authState, setAuthState] = useState<"AUTH" | "UNAUTH" | "LOADING">("LOADING");

  useEffect(() => {

    const authPassed = getCookie("token");

    if (authPassed) {
      if (router.pathname === "/forgotpassword" || router.pathname === "/") {
        router.replace("/AdminUser");
      }
      else {
        setAuthState("AUTH");
      }
    }
    else {
      if (router.pathname != "/forgotpassword" && router.pathname != "/") {
        router.replace("/");
      }
      else {
        setAuthState("UNAUTH");
      }
    }
  }, [authState]);

  return (
    <>
      {authState === "LOADING" ? (
        <CircularProgress
          size="30px"
          sx={{
            color: "#1996fc",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ) : (
        children
      )}
    </>
  );
};

export default PrivateRouteHoc;