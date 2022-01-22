import React, { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import AppFooter from 'src/pages/layout/appFooter/appFooter';

function AppFooterContainer(): JSX.Element {
  const rootStore = useContext(MobXProviderContext);
  const currentLocation = rootStore.layoutStore.getCurrentLocation;
  const navigate = useNavigate();

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/${(event.target as HTMLButtonElement).id}`);
  };
  return <AppFooter currentLocation={currentLocation} onClick={onClick} />;
}

export default AppFooterContainer;
