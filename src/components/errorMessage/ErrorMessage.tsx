type ErrorMessageProps = {
  message: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <p className="error-msg">{message}</p>;
};

export default ErrorMessage;