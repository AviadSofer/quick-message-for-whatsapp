import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useEffect, useState } from 'react';
import { GoogleIcon, StyledGoogleLogin } from './styles/GoogleLogin.styled';
import ErrorMessage from './styles/ErrorMessage.styled';

const GoogleLoginButton: React.FC = () => {
  const [showErr, setShowErr] = useState(0);

  const clientId = '27378581193-0oui5pt2qm345p1u41gpim0gbnvsm5jm.apps.googleusercontent.com';

  useEffect(() => {
    const initClient = () => {
      gapi.auth2.init({
        clientId,
        scope: '',
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const responseGoogle = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ('tokenId' in res) {
      const googleToken = res.tokenId;
      document.cookie = `token=${googleToken}; max-age=3600`;
      document.cookie = 'checkToken=true; max-age=3600';
      document.cookie = 'isGoogleAuth=true; max-age=3600';
      window.location.href = '/';
    } else {
      setShowErr(+true);
    }
  };

  return (
    <GoogleLogin
      clientId={`${clientId}`}
      buttonText="Google"
      render={(renderProps) => (
        <>
          <StyledGoogleLogin
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            להמשיך עם Google
            <GoogleIcon />
          </StyledGoogleLogin>
          <ErrorMessage showErr={showErr}>משהו לא עובד!</ErrorMessage>
        </>
      )}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy="single_host_origin"
    />
  );
};

export default GoogleLoginButton;
