import { Box, Typography, Button, Link } from '@mui/material';

export default function Page404() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: 'background.default',
        gap: 2,
      }}
    >
      <Typography variant="h3" textAlign="center">
        Uh oh, we can’t find that page...
      </Typography>
      <Typography variant="body1" textAlign="center">
        Sorry, the page you are looking for doesn’t exist or has been moved.Here
        a some helpful links:
      </Typography>
      <Button
        sx={{
          backgroundColor: 'blue.300',
          '&:hover': {
            backgroundColor: 'blue.400',
          },
        }}
        size="large"
      >
        <Link
          href="/"
          sx={{
            color: 'text.primary',
            fontWeight: 'bold',
            '&:hover': {
              textDecoration: 'none',
            },
          }}
        >
          TAKE ME HOME
        </Link>
      </Button>
    </Box>
  );
}
