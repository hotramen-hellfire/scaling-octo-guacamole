import React from 'react';
import { Text } from '@chakra-ui/react';
import { dataName } from '../../../data';
type SnowProps = {

};

const Snow: React.FC<SnowProps> = () => {

    return (<>
        <div className="snowflakes" aria-hidden="true">
            {dataName.split('').map((char, index) => (<div className="snowflake" key={index}><Text fontFamily={'PWPers'}>{char}</Text></div>))}
            <div className="snowflake">*</div>
            <div className="snowflake">*</div>
            <div className="snowflake">*</div>
            <div className="snowflake">*</div>
            <div className="snowflake">*</div>
            <div className="snowflake">*</div>
            <div className="snowflake">*</div>
            <div className="snowflake">*</div>
            <div className="snowflake">*</div>
            <div className="snowflake">*</div>
            <div className="snowflake">*</div>
            <div className="snowflake">*</div>
            <div className="snowflake">*</div>
        </div>
    </>)
}
export default Snow;