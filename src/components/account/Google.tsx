import { useEffect, useState } from "react";
import { GoogleCallbackResponse, User } from "../types";
import jwt_decode from "jwt-decode";

function Google({
  user,
  setUser,
}: {
  user: User | undefined;
  setUser: Function;
}) {
  function handleCallbackResponse(response: GoogleCallbackResponse) {
    let userObject = jwt_decode<User>(response.credential);
    setUser(userObject);

    document.getElementById("signInDiv")!.hidden = true;
  }

  useEffect(() => {
    /* Global Google */
    window.google?.accounts.id.initialize({
      client_id:
        "723430193377-e4gt7h1qi35qvnk7936dmi6mhnvvjqmm.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    window.google?.accounts.id.renderButton(
      document.getElementById("signInDiv")!,
      {
        theme: "outline",
        size: "large",
        type: "standard",
      }
    );

    window.google?.accounts.id.prompt();
  }, []);
  return <></>;
}

export default Google;
