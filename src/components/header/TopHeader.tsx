import React, { useState } from "react";
import Google from "../account/Google";
import { User } from "../types";

function TopHeader() {
  const [user, setUser] = useState<User | undefined>();

  function handleSignOut() {
    setUser(undefined);
    document.getElementById("signInDiv")!.hidden = false;
  }
  return (
    <>
      <Google user={user} setUser={setUser} />
      <div className="dark:bg-gray-900 m-auto">
        <div className="bg-graydark">
          <div className="container text-white py-1 px-6 flex justify-between items-center">
            <p>Trustpilot: ★★★★★</p>
            {!user && (
              <div className="flex flex-row">
                <a href="/login" className="hover:underline">
                  <p>Login </p>
                </a>
                /
                <a className="hover:underline" href="/sign-in">
                  <p> Sign-in</p>
                </a>
              </div>
            )}
            {user && (
              <>
                <div className="flex flex-row items-center relative group">
                  <img
                    width="20px"
                    height="20px"
                    className="rounded-sm mr-2"
                    src={user.picture}
                    alt={user.name}
                  />
                  <p>{user.name}</p>
                  <div className="hidden group-hover:block group-hover:absolute group-hover:left-0 group-hover:bottom-[-2.75em] group-hover:bg-graydark group-hover:p-2 group-hover:w-full group-hover:z-10 dropdown-account">
                    <button onClick={() => handleSignOut()}>Sign Out</button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default TopHeader;
