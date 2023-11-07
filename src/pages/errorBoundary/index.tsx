import { Box, Button, Link, Typography } from '@mui/material';
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
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
            Sorry.. there was an error
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

    return this.props.children;
  }
}

export default ErrorBoundary;
