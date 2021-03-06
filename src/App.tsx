import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import GithubCorner from 'react-github-corner';
import { useDispatch, useSelector } from 'react-redux';
import ExperienceCalculator from './components/ExperienceCalculator';
import Settings from './components/Settings';
import SparkCalculator from './components/SparkCalculator';
import { Japanese } from './helpers/constants';
import strings from './helpers/localization';
import { SET_LANGUAGE } from './store/actions';
import { RootState } from './store/types';
import './styles/App.scss';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const languageCode = useSelector((state: RootState) => state.languageCode);

  if (languageCode === Japanese) {
    dispatch({ type: SET_LANGUAGE, payload: Japanese });
  }

  return (
    <div className="container mt-md-3">
      <Tabs id="menu-tabs" defaultActiveKey="spark">
        <Tab eventKey="spark" title={strings.SparkCalc}>
          <SparkCalculator />
        </Tab>
        <Tab eventKey="exp" title={strings.ExpRpCalc}>
          <ExperienceCalculator />
        </Tab>
        <Tab eventKey="settings" title="Settings/設定">
          <Settings />
        </Tab>
      </Tabs>
      <GithubCorner
        href="https://github.com/eurea/eurea.github.io"
        bannerColor="#0288D1"
        target="_blank"
        rel="noreferrer"
      />
    </div>
  );
};

export default App;
