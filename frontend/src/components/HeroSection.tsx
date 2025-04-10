import { Box, Flex, Heading, Text, Button, VStack, Image } from "@chakra-ui/react";

function HeroSection() {
  return (
    <Box bgGradient="linear(to-bl, blue.900, blue.400)" py={{ base: 10, md: 15 }}>
      <Flex
        maxW="1200px"
        mx="auto"
        px={4}
        direction={{ base: "column", md: "row" }}
        align="center" // Center alignment for both directions
        justify="space-between"
        gap={{ base: 6, md: 8 }}
      >
        {/* Left Column: Text Content */}
        <VStack
          align="flex-start"
          spacing={6}
          w={{ base: "100%", md: "50%" }} // Adjusted width for better balance
          px={{ base: 0, md: 8 }}
        >
          <Heading
            as="h1"
            size={{ base: "xl", md: "2xl" }}
            color="white"
            fontWeight="medium"
            lineHeight="1.2"
          >
            Your Systems Gateway to the Public Web
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="white"
            fontWeight="normal"
            maxW="600px"
          >
            SaaS proxy solutions built for large-scale data processing, extraction, LLM training, and more.
          </Text>
        </VStack>

        {/* Right Column: Image */}
        <Box
          w={{ base: "100%", md: "50%" }}
          display="flex"
          justifyContent={{ base: "center", md: "flex-end" }}
          alignItems="center"
        >
          <Image
            src="/assets/images/hero.png"
            alt="Hero Image"
            maxW={{ base: "300px", md: "400px" }}
            w="100%"
            objectFit="contain"
          />
        </Box>
      </Flex>

      <Flex
        justify="center"
        gap={4}
        pt={{ base: 6, md: 8 }}
        pb={{ base: 10, md: 20 }}
      >
        <Button
          as="a"
          href="https://cloud.cobaltdata.net/signup"
          color="white"
          bg="orange.400"
          size="lg"
          _hover={{ bg: "white", color: "orange.400" }}
          px={6}
        >
          Start Your Free Trial
        </Button>
        <Button
          as="a"
          href="https://cloud.cobaltdata.net/login"
          color="white"
          bg="orange.400"
          size="lg"
          _hover={{ bg: "white", color: "orange.400" }}
          px={6}
        >
          Login
        </Button>
      </Flex>
    </Box>
  );
}

export default HeroSection;