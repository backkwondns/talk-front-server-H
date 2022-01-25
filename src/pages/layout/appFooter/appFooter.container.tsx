import React, { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import AppFooter from 'src/pages/layout/appFooter/appFooter';

function AppFooterContainer(): JSX.Element {
  const rootStore = useContext(MobXProviderContext);
  const currentLocation = rootStore.layoutStore.getCurrentLocation;
  const navigate = useNavigate();

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget.id;
    rootStore.layoutStore.setCurrentLocation(target);
    navigate(`/${target}`);
  };
  return <AppFooter currentLocation={currentLocation} onClick={onClick} />;
}

export default AppFooterContainer;
