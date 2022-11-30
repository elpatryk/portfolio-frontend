import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { selectMessage } from "../store/appState/selectors";
import { clearMessage } from "../store/appState/slice";

export const MessageBox = () => {
  const dispatch = useDispatch();

  const message = useSelector(selectMessage);

  const displayMessage = message !== null;

  if (!displayMessage) return null;

  return (
    <MessageContainer message={message}>
      <Text message={message}>{message.text}</Text>
      <Text onClick={() => dispatch(clearMessage())} message={message}>
        x
      </Text>
    </MessageContainer>
  );
};

const MessageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) =>
    props.message.variant === "success" ? "purple" : "white"};
  height: 50px;
`;

const Text = styled.p`
  color: ${(props) => (props.message.variant === "success" ? "black" : "red")};
  font-weight: bold;
  margin-top: 0px;
  padding: 15px;
`;
