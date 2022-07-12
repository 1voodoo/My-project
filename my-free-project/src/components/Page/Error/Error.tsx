import { FC } from "react"
import { useNavigate } from "react-router-dom";
import './Error.scss';

const Error: FC = () => {
  const navigate = useNavigate();
  const backHome = () => {
    navigate('/');
  };
  return (
    <div onClick={backHome} className={'back'}>Error</div>
  );
};

export default Error;
