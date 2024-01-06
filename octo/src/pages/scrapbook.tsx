import Music from '@/components/Music/Music';
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
        </Stack>
    </>)
}
export default scrapbook;