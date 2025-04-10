import React from 'react';
import { Box, Flex, Grid, Heading, Image, Text, VStack, Button, Link } from "@chakra-ui/react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Common/Footer';

// Inside return:

export const Route = createFileRoute("/_layout/")({
  component: LandingPage,
});

function LandingPage() {
  const navigate = useNavigate();

  const allSites = [
    // Proxy Solutions
    { name: "TheDataProxy.com", description: "Global proxy network with over 10M IPs.", link: "https://thedataproxy.com" },
    { name: "RoamingProxy.com", description: "Rotating proxies for uninterrupted access.", link: "https://roamingproxy.com" },
    { name: "CobaltData.net", description: "The core of the Cobalt Data Network.", link: "https://cobaltdata.net" },
    // Crawling Tools
    { name: "AutomatedCrawler.com", description: "Automate complex web crawling tasks.", link: "https://automatedcrawler.com" },
    { name: "CleanCrawler.com", description: "Reliable and clean crawling tools.", link: "https://cleancrawler.com" },
    { name: "IntegrityCrawler.com", description: "Crawling with a focus on integrity.", link: "https://integritycrawler.com" },
    { name: "TrustCrawler.com", description: "Trusted crawling for consistent results.", link: "https://trustcrawler.com" },
    { name: "TrustedCrawler.com", description: "Dependable crawling technology.", link: "https://trustedcrawler.com" },
    // Scraping Solutions
    { name: "AutomatedScraper.com", description: "Efficient automation for web scraping.", link: "https://automatedscraper.com" },
    { name: "CleanScraper.com", description: "Precise and clean data extraction.", link: "https://cleanscraper.com" },
    { name: "EthicalScraper.com", description: "Compliant and ethical scraping tools.", link: "https://ethicalscraper.com" },
    { name: "LegalScraping.com", description: "Legally sound scraping solutions.", link: "https://legalscraping.com" },
    { name: "ScrapeCompass.com", description: "Navigate scraping challenges easily.", link: "https://scrapecompass.com" },
    { name: "ScrapingCompass.com", description: "Guided tools for scraping success.", link: "https://scrapingcompass.com" },
    { name: "ScraperSafe.com", description: "Secure scraping with safety in mind.", link: "https://scrapersafe.com" },
    { name: "SmartScraping.com", description: "Intelligent scraping technology.", link: "https://smartscraping.com" },
    { name: "TrustedScraper.com", description: "Reliable scraping services.", link: "https://trustedscraper.com" },
    { name: "TrustScraper.com", description: "Trustworthy scraping tools.", link: "https://trustscraper.com" },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection
        title="Cobalt Data Network: Ethical Web Data Solutions"
        subtitle="Explore our advanced suite of proxy and scraping tools designed for scalable, compliant data extraction."
        ctaText="Discover Our Network"
        ctaLink="/products"
        bgImage="https://images.unsplash.com/photo-1551288049-b1f3c0f3a90c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      {/* Section 1: Introduction */}
      <Box py={16} bg="white" maxW="1200px" mx="auto" px={4}>
        <VStack spacing={6} textAlign="center">
          <Heading as="h2" size="2xl" color="gray.800" fontWeight="medium">
            Your Gateway to Web Data Excellence
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="800px">
            The Cobalt Data Network powers innovative solutions like TheDataProxy.com and EthicalScraper.com, enabling businesses to extract web insights with efficiency and integrity.
          </Text>
          <Button
            size="lg"
            bg="blue.600"
            color="white"
            _hover={{ bg: "blue.700" }}
            onClick={() => navigate({ to: "/about" })}
          >
            About the Network
          </Button>
        </VStack>
      </Box>

      {/* Section 2: All Products */}
      <Box py={16} bg="blue.50" color="white">
        <Heading as="h2" size="2xl" textAlign="center" mb={10} fontWeight="medium">
          The Cobalt Data Network Portfolio
        </Heading>
        <Box maxW="1200px" mx="auto" px={4}>
          {/* Proxy Solutions */}
          <Box mb={12}>
            <Heading as="h3" size="lg" mb={6} fontWeight="medium">
              Proxy Solutions
            </Heading>
            <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
              {allSites.slice(0, 3).map((site, index) => (
                <VStack
                  key={index}
                  p={6}
                  bg="white"
                  borderRadius="md"
                  spacing={4}
                  align="start"
                  color="gray.800"
                  _hover={{ shadow: "lg", transform: "translateY(-4px)", transition: "all 0.3s" }}
                >
                  <Heading as="h4" size="md" fontWeight="medium">
                    {site.name}
                  </Heading>
                  <Text>{site.description}</Text>
                  <Link href={site.link} isExternal color="blue.600" fontWeight="medium">
                    Visit {site.name} →
                  </Link>
                </VStack>
              ))}
            </Grid>
          </Box>

          {/* Crawling Tools */}
          <Box mb={12}>
            <Heading as="h3" size="lg" mb={6} fontWeight="medium">
              Crawling Tools
            </Heading>
            <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
              {allSites.slice(3, 8).map((site, index) => (
                <VStack
                  key={index}
                  p={6}
                  bg="white"
                  borderRadius="md"
                  spacing={4}
                  align="start"
                  color="gray.800"
                  _hover={{ shadow: "lg", transform: "translateY(-4px)", transition: "all 0.3s" }}
                >
                  <Heading as="h4" size="md" fontWeight="medium">
                    {site.name}
                  </Heading>
                  <Text>{site.description}</Text>
                  <Link href={site.link} isExternal color="blue.600" fontWeight="medium">
                    Visit {site.name} →
                  </Link>
                </VStack>
              ))}
            </Grid>
          </Box>

          {/* Scraping Solutions */}
          <Box>
            <Heading as="h3" size="lg" mb={6} fontWeight="medium">
              Scraping Solutions
            </Heading>
            <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
              {allSites.slice(8).map((site, index) => (
                <VStack
                  key={index}
                  p={6}
                  bg="white"
                  borderRadius="md"
                  spacing={4}
                  align="start"
                  color="gray.800"
                  _hover={{ shadow: "lg", transform: "translateY(-4px)", transition: "all 0.3s" }}
                >
                  <Heading as="h4" size="md" fontWeight="medium">
                    {site.name}
                  </Heading>
                  <Text>{site.description}</Text>
                  <Link href={site.link} isExternal color="blue.600" fontWeight="medium">
                    Visit {site.name} →
                  </Link>
                </VStack>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>

      {/* Section 3: Why Choose Cobalt Data Network */}
      <Box py={16} bg="white" maxW="1200px" mx="auto" px={4}>
        <Heading as="h2" size="2xl" textAlign="center" mb={10} color="gray.800" fontWeight="medium">
          Why Cobalt Data Network?
        </Heading>
        <Flex justify="space-around" flexWrap="wrap" gap={6}>
          {[
            { value: "190+", label: "Countries Covered" },
            { value: "99.9%", label: "Uptime Guarantee" },
            { value: "10M+", label: "IP Pool" },
            { value: "24/7", label: "Expert Support" },
            { value: "100%", label: "Compliance Focus" },
          ].map((item, index) => (
            <VStack key={index} textAlign="center" p={4} minW="150px" spacing={2}>
              <Text fontSize="4xl" fontWeight="bold" color="blue.600">{item.value}</Text>
              <Text fontSize="lg" color="gray.600">{item.label}</Text>
            </VStack>
          ))}
        </Flex>
      </Box>

      {/* Section 4: Cloud Integrations */}
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
            Unlock the Power of Web Data
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto">
            Leverage the Cobalt Data Network to turn web data into actionable insights for your business.
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