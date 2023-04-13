function Login() {
  return (
    <div>
      <div className="m-auto w-3/6 p-20 shadow-[0_1px_10px_rgb(0,0,0,0.1)] flex flex-col items-center">
        <h2 className="text-3xl mb-6">
          Register to <span className="text-blue">GlamGarb</span>
        </h2>
        <p>
          Already member?{" "}
          <a href="/login" className="text-blue hover:underline">
            Log in now
          </a>
        </p>
        <div id="signInDiv" className="mt-6"></div>
        <div className="mb-6 mt-6 w-2/4 m-auto">
          <hr className="divider"></hr>
        </div>
        <p>Currently only Google register possible.</p>
      </div>
    </div>
  );
}

export default Login;
