import React { useState } from 'react';
import { Content } from './components/layout/Content';
import { Header } from './components/layout/Header';
import {ProjectsProvider, SelectedProjectProvider} from './context';

export const App = ({ darkModeDefault = false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);

  return (
    <SelectedProjectProvider>
    <ProjectsProvider>
   <main
   data-testid="applcation"
   className={darkMode ? 'darkmode' : undefined}
   >
      <Header darkode={darkMode} setDarkMode={setDarkMode} />
      <Content></Content>
    </main>
    </ProjectsProvider>
    </SelectedProjectProvider>
  );
};