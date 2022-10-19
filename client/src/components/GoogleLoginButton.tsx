import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GoogleIcon, StyledGoogleLogin } from './styles/GoogleLogin.styled';
import ErrorMessage from './styles/ErrorMessage.styled';
import googleAuth from '../static/googleAuth';

const GoogleLoginButton: React.FC = () => {
  const { t } = useTranslation();

  const [showErr, setShowErr] = useState(0);

  useEffect(() => {
    const initClient = () => {
      gapi.auth2.init({
        clientId: googleAuth.clientId,
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
      clientId={googleAuth.clientId}
      render={(renderProps) => (
        <>
          <StyledGoogleLogin
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            {t('buttons.continueWithGoogle')}
            <GoogleIcon />
          </StyledGoogleLogin>
          <ErrorMessage showErr={showErr}>{t('errors.somthingNotWork')}</ErrorMessage>
        </>
      )}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy="single_host_origin"
    />
  );
};

export default GoogleLoginButton;
