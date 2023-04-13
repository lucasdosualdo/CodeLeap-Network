import { WrapperButton } from "./style";

export default function Button({ children, ...otherProps }) {
  return <WrapperButton {...otherProps}>{children}</WrapperButton>;
}
