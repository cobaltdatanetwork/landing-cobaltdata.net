import { Box, Flex, Grid, Heading, Image, Text, VStack, Button, Link } from "@chakra-ui/react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Common/Footer';
import { Helmet } from "react-helmet";
export const Route = createFileRoute("/_layout/")({
  component: LandingPage,
});

function LandingPage() {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection
        title="CobaltData: Powering Ethical Web Data Solutions"
        subtitle="Discover our suite of advanced web scraping and proxy tools designed for businesses seeking reliable, compliant, and scalable data extraction."
        ctaText="Explore Our Products"
        ctaLink="/products"
        bgImage="https://images.unsplash.com/photo-1551288049-b1f3c0f3a90c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      {/* Section 1: Introducing CobaltData */}
      <Box py={16} bg="white" maxW="1200px" mx="auto" px={4}>
        <VStack spacing={8} textAlign="center">
          <Heading as="h2" size="2xl" color="gray.800" fontWeight="medium">
            Your Trusted Partner in Web Data Extraction
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="800px">
            CobaltData.net is the home of innovative web scraping and proxy solutions, uniting a portfolio of specialized products like TheDataProxy.com, AutomatedCrawler.com, and EthicalScraper.com. Our tools empower businesses to gather insights ethically, efficiently, and at scale.
          </Text>
          <Button
            size="lg"
            bg="blue.600"
            color="white"
            _hover={{ bg: "blue.700" }}
            onClick={() => navigate({ to: "/about" })}
          >
            Learn More About Us
          </Button>
        </VStack>
      </Box>

      {/* Section 2: Our Products */}
      <Box py={16} bg="blue.50" color="gray.800">
        <Heading as="h2" size="2xl" textAlign="center" mb={10} fontWeight="medium">
          Our Suite of Data Solutions
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8} maxW="1200px" mx="auto" px={4}>
          {[
            {
              name: "TheDataProxy.com",
              description: "Access a global proxy network with over 10M IPs for seamless and secure web scraping.",
              link: "https://thedataproxy.com",
            },
            {
              name: "AutomatedCrawler.com",
              description: "Automate complex web scraping tasks with intelligent crawling and data extraction tools.",
              link: "https://automatedcrawler.com",
            },
            {
              name: "EthicalScraper.com",
              description: "Ensure compliant data collection with tools designed for ethical and legal web scraping.",
              link: "https://ethicalscraper.com",
            },
            {
              name: "RoamingProxy.com",
              description: "Leverage rotating proxies for uninterrupted access to web data across the globe.",
              link: "https://roamingproxy.com",
            },
            {
              name: "ScrapingCompass.com",
              description: "Navigate web scraping challenges with smart routing and reliable infrastructure.",
              link: "https://scrapingcompass.com",
            },
            {
              name: "TrustedScraper.com",
              description: "Build trust with scalable, secure, and compliant scraping solutions for your business.",
              link: "https://trustedscraper.com",
            },
          ].map((product, index) => (
            <VStack
              key={index}
              p={6}
              bg="gray.50"
              borderRadius="md"
              spacing={4}
              align="start"
              transition="all 0.3s"
              _hover={{ shadow: "lg", transform: "translateY(-4px)" }}
            >
              <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
                {product.name}
              </Heading>
              <Text color="gray.600">{product.description}</Text>
              <Link href={product.link} isExternal color="blue.600" fontWeight="medium">
                Visit {product.name} →
              </Link>
            </VStack>
          ))}
        </Grid>
        <Flex justify="center" mt={10}>
          <Button
            size="lg"
            variant="outline"
            borderColor="blue.600"
            color="blue.600"
            _hover={{ bg: "blue.600", color: "white" }}
            as="a"
            href="/products"
          >
            View All Products
          </Button>
        </Flex>
      </Box>

      {/* Section 3: Why Choose CobaltData */}
      <Box py={16} bg="white" maxW="1200px" mx="auto" px={4}>
        <Heading as="h2" size="2xl" textAlign="center" mb={10} fontWeight="medium">
          Why CobaltData?
        </Heading>
        <Flex justify="space-around" flexWrap="wrap" maxW="1200px" mx="auto" px={4}>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="blue.600">190+</Text>
            <Text fontSize="lg">Countries Covered</Text>
          </VStack>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="blue.600">99.9%</Text>
            <Text fontSize="lg">Uptime Guarantee</Text>
          </VStack>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="blue.600">10M+</Text>
            <Text fontSize="lg">IP Pool</Text>
          </VStack>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="blue.600">24/7</Text>
            <Text fontSize="lg">Expert Support</Text>
          </VStack>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="blue.600">100%</Text>
            <Text fontSize="lg">Compliance Focus</Text>
          </VStack>
        </Flex>
      </Box>

      {/* Section 4: Business Applications */}
      <Box py={16} bg="blue.50" maxW="1200px" mx="auto" px={4}>
        <Heading as="h2" size="2xl" textAlign="center" mb={10} color="gray.800" fontWeight="medium">
          Transform Your Business with Data
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Market Intelligence
            </Heading>
            <Text color="gray.600">
              Monitor trends, competitors, and consumer sentiment with real-time web data.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              AI & Machine Learning
            </Heading>
            <Text color="gray.600">
              Fuel your models with diverse, high-quality datasets from global sources.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Price Optimization
            </Heading>
            <Text color="gray.600">
              Track competitor pricing and promotions to stay ahead in the market.
            </Text>
          </VStack>
        </Grid>
      </Box>

      {/* Section 5: Cloud Integrations */}
      <Box py={10} bg="white">
        <Flex justify="center" gap={8} flexWrap="wrap">
          {[
            { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/aws.png", alt: "AWS", href: "https://aws.amazon.com" },
            { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/gcp.png", alt: "GCP", href: "https://cloud.google.com" },
            { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/microsoft_azure.png", alt: "Azure", href: "https://azure.microsoft.com" },
            { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/ibm_cloud.png", alt: "IBM Cloud", href: "https://www.ibm.com/cloud" },
            { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/icons/digital_ocean.png", alt: "Digital Ocean", href: "https://www.digitalocean.com" },
          ].map((cloud, index) => (
            <Link key={index} href={cloud.href} isExternal>
              <Image src={cloud.src} alt={cloud.alt} boxSize="50px" />
            </Link>
          ))}
        </Flex>
      </Box>

      {/* Call to Action */}
      <Box py={16} bg="blue.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium">
            Ready to Unlock the Power of Web Data?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto">
            Explore CobaltData’s suite of tools and start transforming raw web data into actionable insights today.
          </Text>
          <Flex justify="center" gap={6} flexWrap="wrap">
            <Button
              size="lg"
              bg="white"
              color="blue.600"
              _hover={{ bg: "gray.200" }}
              as="a"
              href="/demo-request"
            >
              Request a Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "white", color: "blue.600" }}
              as="a"
              href="/contact"
            >
              Contact Us
            </Button>
          </Flex>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default LandingPage;