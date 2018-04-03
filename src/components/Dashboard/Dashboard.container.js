import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap } from 'react-google-maps';
import config from '../../config';
import adventures from '../../data/adventures.json';
import Dashboard from './Dashboard.presentation';

export default compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${config.GOOGLE_MAPS_API_KEY}&` +
      'v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div />,
    containerElement: <div className="MapContainer" />,
    mapElement: <div className="MapElement" />
  }),
  withScriptjs,
  withGoogleMap,
  withProps({
    adventures
  })
)(Dashboard);
