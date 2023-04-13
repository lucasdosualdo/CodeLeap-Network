import { SignUpBox } from "./style";
import Button from "../../components/Button";

export default function SignUp() {
  return (
    <SignUpBox>
      <h1>Welcome to CodeLeap network!</h1>
      <h5>Please enter your username</h5>
      <form>
        <input type="text" name="username" placeholder="Your username here" />
      </form>
      <Button>
        <h3>ENTER</h3>
      </Button>
    </SignUpBox>
  );
}
