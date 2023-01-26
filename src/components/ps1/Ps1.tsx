import React, { useEffect, useState } from 'react';
import { useTheme } from '../../utils/themeProvider';

export const Ps1 = () => {
  const [hostname, setHostname] = useState('');
  const { theme } = useTheme();

  useEffect(() => {
    if (typeof window !== undefined) {
      setHostname(window.location.hostname);
    }
  }, []);

  return (
    <div>
      <span
        style={{
          color: theme.yellow,
        }}
      >
        miguelgargallo
      </span>
      <span
        style={{
          color: theme.yellow,
        }}
      >
        {' en'}
      </span>
      <span
        style={{
          color: theme.blue,
        }}
      >
        {' @twitter'}
      </span>
      <span
        style={{
          color: theme.white,
        }}
      >
        {` >`}
      </span>
    </div>
  );
};

export default Ps1;
