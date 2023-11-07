'use client';

import { Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <main>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '100vh',
        }}
      >
        <Typography variant="h1" textAlign="center">
          Hello World
        </Typography>
      </Box>
    </main>
  );
}
