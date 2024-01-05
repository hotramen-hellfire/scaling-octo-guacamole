import { Flex, Icon, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
type ProjectItemProps = {
    title: string,
    location: string,
    time: string,
    content: string[]
};

const ProjectItem: React.FC<ProjectItemProps> = (props) => {

    return (<>
        <Flex
            width={'90%'}
            flexDirection={'column'}
            // border={'1px solid black'}
            borderRadius={'10px'}
            m={2}
            // boxShadow={'2xl'}
            _hover={{
                boxShadow: 'dark-lg'
            }}
            p={2}
            justify={'center'}
            align={'center'}
        >
            <Text
                fontFamily='CabinSketch'
                textAlign={'center'}
                width={'100%'}
                fontSize={40}
            >
                {props.title}
            </Text>
            <Flex
                direction={'row'}
                justify={'center'}
                align={'center'}
            >
                <Icon
                    as={CiLocationOn}
                    m={2}
                />
                <Text
                    fontFamily='CabinSketch'
                    textAlign={'center'}
                    width={'100%'}
                    fontSize={20}
                >
                    {props.location}
                </Text>
            </Flex>

            <Flex
                direction={'row'}
                justify={'center'}
                align={'center'}
            >
                <Icon
                    as={MdOutlineAccessTime}
                    m={2}
                />
                <Text
                    fontFamily='CabinSketch'
                    textAlign={'center'}
                    width={'100%'}
                    fontSize={14}
                >
                    {props.time}
                </Text>
            </Flex>
            <Flex
                width={'90%'}
            // border={'1px solid red'}
            >
                <UnorderedList>
                    {props.content.map(citem => (
                        <ListItem>
                            <Text
                                fontFamily='CabinSketch'
                                // textAlign={'center'}
                                width={'100%'}
                                fontSize={16}
                            >
                                {citem}
                            </Text>
                        </ListItem>))}
                </UnorderedList>
            </Flex>
        </Flex >
    </>)
}
export default ProjectItem;