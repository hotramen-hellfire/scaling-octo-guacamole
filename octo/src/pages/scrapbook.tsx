import Music from '@/components/Music/Music';
import ScrapbookWrapper from '@/components/Scrapbook/ScrapbookWrapper';
import { Stack } from '@chakra-ui/react';
import React from 'react';

type scrapbookProps = {

};

const scrapbook: React.FC<scrapbookProps> = () => {
    return (<>
        <Stack
            justify={'center'}
            align={'center'}
            m={9}
            flexDirection={'column'}
        >
            <Music />
            <ScrapbookWrapper />
        </Stack>
    </>)
}
export default scrapbook;