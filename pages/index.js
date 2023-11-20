import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hello, I&apos;m a computing student from Australia!
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Mitch Moore
                    </Heading>
                    <p>
                        I'm a CS/Psyc student based in Australia doing my best to figure out what to do with my degree :)
                    </p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page