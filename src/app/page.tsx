'use client';

import { useGetPetByIdQuery } from '@/store/queries';
import { Box, Typography } from '@mui/material';

export default function Home() {
  useGetPetByIdQuery({ petId: 1 });
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
