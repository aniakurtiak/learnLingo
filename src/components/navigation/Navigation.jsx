import { AuthNavOut } from './AuthNavOut/AuthNavOut';
import { AuthNavIn } from './AuthNavIn/AuthNavIn';

export const Navigation = ({ onClickLogin, onClickRegister, authUser }) => {

  return  authUser ? (
        <AuthNavOut/>
      ) : (
        <AuthNavIn
          onClickLogin={onClickLogin}
          onClickRegister={onClickRegister}
        />
      )
};
