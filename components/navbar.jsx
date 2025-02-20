import { FaPhoneAlt } from "react-icons/fa";

export default function Page() {
  return (
    <>
      <div>
        <h1 className="logo">Brighter</h1>
        <ul>
          <li>About</li>
          <li>Calculate</li>
          <li>Start</li>
        </ul>
      </div>
      <div>
        <FaPhoneAlt />
        <button>Sign in</button>
        <button>Continue</button>
      </div>
    </>
  );
}
