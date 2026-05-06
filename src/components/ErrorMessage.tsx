interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <div className="m-6 rounded bg-orange-100 p-2 text-orange-800">
    <strong>Error</strong>
    <p className="text-sm">{message ?? "Sorry, Try Again Later"}</p>
  </div>
);

export default ErrorMessage;
