import React from 'react';
import Head from 'next/head';
import { Typography } from '@mui/material';

const Index = ({ siteName }) => {
    return (
        <>
            <Head>
                <title>{`Auth | ${siteName}`}</title>
            </Head>
            <Typography variant="h4" component="h4" align="left" mt={5} pt={5}>
                Welcome
            </Typography>
            <Typography variant="h6" component="h6" align="left" mt={2}>
                enter your registered no.
            </Typography>
        </>
    )
}

export default Index