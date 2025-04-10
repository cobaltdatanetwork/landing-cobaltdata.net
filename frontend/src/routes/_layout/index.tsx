import React from 'react';
import { Box, Flex, Grid, Heading, Image, Text, VStack, Button, Link } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Common/Footer';

export const Route = createFileRoute("/_layout/")({
  component: LandingPage,
});

function LandingPage() {
  const allSites = [
    // Proxy Solutions
    { name: "thedataproxy.com", description: "Global proxy network with over 10M IPs.", link: "https://thedataproxy.com" },
    { name: "roamingproxy.com", description: "Rotating proxies for uninterrupted access.", link: "https://roamingproxy.com" },
    // Crawling Tools
    { name: "automatedcrawler.com", description: "Automate complex web crawling tasks.", link: "https://automatedcrawler.com" },
    { name: "cleancrawler.com", description: "Reliable and clean crawling tools.", link: "https://cleancrawler.com" },
    { name: "integritycrawler.com", description: "Crawling with a focus on integrity.", link: "https://integritycrawler.com" },
    { name: "trustcrawler.com", description: "Trusted crawling for consistent results.", link: "https://trustcrawler.com" },
    { name: "trustedcrawler.com", description: "Dependable crawling technology.", link: "https://trustedcrawler.com" },
    // Scraping Solutions
    { name: "automatedscraper.com", description: "Efficient automation for web scraping.", link: "https://automatedscraper.com" },
    { name: "cleanscraper.com", description: "Precise and clean data extraction.", link: "https://cleanscraper.com" },
    { name: "ethicalscraper.com", description: "Compliant and ethical scraping tools.", link: "https://ethicalscraper.com" },
    { name: "legalscraping.com", description: "Legally sound scraping solutions.", link: "https://legalscraping.com" },
    { name: "scrapecompass.com", description: "Navigate scraping challenges easily.", link: "https://scrapecompass.com" },
    { name: "scrapingcompass.com", description: "Guided tools for scraping success.", link: "https://scrapingcompass.com" },
    { name: "scrapersafe.com", description: "Secure scraping with safety in mind.", link: "https://scrapersafe.com" },
    { name: "smartscraping.com", description: "Intelligent scraping technology.", link: "https://smartscraping.com" },
    { name: "trustedscraper.com", description: "Reliable scraping services.", link: "https://trustedscraper.com" },
    { name: "trustscraper.com", description: "Trustworthy scraping tools.", link: "https://trustscraper.com" },
  ];

  const renderCard = (site, index) => (
    <Link
      key={index}
      href={site.link}
      isExternal
      _hover={{ textDecoration: "none" }}
    >
      <VStack
        p={8}
        bg="white"
        borderRadius="lg"
        spacing={6}
        align="stretch"
        color="gray.800"
        maxW="400px"
        w="100%"
        boxShadow="sm"
        _hover={{ shadow: "lg", transform: "translateY(-4px)", transition: "all 0.3s" }}
      >
        <Heading as="h4" size="md" fontWeight="medium"> 
          {site.name}
        </Heading>
        <Text fontSize="sm" color="gray.500"> 
          {site.description}
        </Text>
        <Link
          href={site.link}
          isExternal
          color="blue.600"
          fontWeight="medium"
          alignSelf="flex-start"
          fontSize="sm" 
          _hover={{ textDecoration: "underline" }}
        >
          Visit {site.name} →
        </Link>
      </VStack>
    </Link>
  );

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection
        title="Cobalt Data Network: Web Data Solutions"
        subtitle="Explore our advanced suite of proxy and scraping tools designed for scalable, compliant data extraction."
        ctaText="Discover Our Network"
        ctaLink="/demo-request"
        bgImage="https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <Box py={16} bg="blue.50" color="white">
        <Heading as="h2" size="2xl" textAlign="center" mb={12} fontWeight="medium">
          Network Portfolio
        </Heading>
        <Box maxW="1200px" mx="auto" px={{ base: 4, md: 6 }}>
          {/* Proxy Solutions */}
          <Box mb={12}>
            <Heading
              as="h3"
              size="lg"
              mb={8}
              fontWeight="medium"
              textAlign="center"
              color="gray.800"
            >
              Proxy Solutions
            </Heading>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
              justifyContent="center"
              maxW="840px"
              mx="auto"
            >
              {allSites.slice(0, 2).map(renderCard)}
            </Grid>
          </Box>

          {/* Crawling Tools */}
          <Box mb={12}>
            <Heading
              as="h3"
              size="lg"
              mb={8}
              fontWeight="medium"
              textAlign="center"
              color="gray.800"
            >
              Crawling Tools
            </Heading>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
              gap={6}
              justifyContent="center"
              maxW="1200px"
              mx="auto"
            >
              {allSites.slice(2, 7).map(renderCard)}
            </Grid>
          </Box>

          {/* Scraping Solutions */}
          <Box>
            <Heading
              as="h3"
              size="lg"
              mb={8}
              fontWeight="medium"
              textAlign="center"
              color="gray.800"
            >
              Scraping Solutions
            </Heading>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
              gap={6}
              justifyContent="center"
              maxW="1200px"
              mx="auto"
            >
              {allSites.slice(7).map(renderCard)}
            </Grid>
          </Box>
        </Box>
      </Box>

      {/* Section 3: Why Choose Cobalt Data Network */}
      <Box py={16} bg="white" maxW="1200px" mx="auto" px={4}>
        <Heading as="h2" size="xl" textAlign="center" mb={10} color="gray.800" fontWeight="medium">
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

      <Box py={16} bg="blue.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading
            as="h2"
            size={{ base: "lg", md: "xl" }}
            mb={6}
            fontWeight="medium"
            lineHeight="1.3"
            color="white"
          >
            Unlock the Power of Web Data Today
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            mb={8}
            maxW="700px"
            mx="auto"
            lineHeight="1.6"
            color="white"
          >
            Harness the Cobalt Data Network to transform web data into actionable business insights with ease and confidence.
          </Text>
          <Flex
            justify="center"
            gap={{ base: 4, md: 6 }}
            flexWrap="wrap"
          >
            <Button
              size="lg"
              bg="white"
              color="blue.600"
              _hover={{ bg: "gray.200" }}
              as="a"
              href="/demo-request"
              px={6}
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
              px={6}
            >
              Contact Us
            </Button>
          </Flex>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default LandingPage;