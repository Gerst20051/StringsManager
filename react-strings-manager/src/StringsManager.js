import { Box, Button, Paper } from '@material-ui/core';
import { Fragment } from 'react';

import Header from './Header';
import OrganizationsList from './OrganizationsList';

export default function StringsManager(props) {
  return (
    <Fragment>
      <Header text="Strings Manager" />
      <Paper variant="outlined" square>
        <Box align="center">
          <OrganizationsList />
        </Box>
      </Paper>
      <Box align="center" py={2}>
        <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
      </Box>
      <Box align="center" pb={2}>
        <Button variant="contained" disableElevation onClick={() => { document.location.search = 'swagger'; }}>Swagger API Documentation</Button>
      </Box>
    </Fragment>
  );
}
