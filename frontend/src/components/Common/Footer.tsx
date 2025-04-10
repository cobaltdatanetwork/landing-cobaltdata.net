import React from 'react';
import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="blue.800" color="white" py={12}>
      <Box maxW="1200px" mx="auto" px={4}>
        <Grid templateColumns={{ base: "1fr", md: "2fr 1fr 1fr 1fr" }} gap={8} mb={8}>
          {/* Company Information */}
          <Box>
            <Heading as="h4" size="md" mb={4} color="white">
              <Link href="https://cobaltdata.net" _hover={{ textDecoration: "none", color: "orange.400" }}>
                Cobalt Data Network
              </Link>
            </Heading>
            <Text color="gray.300" mb={4}>
              Scalable proxy and scraping tools delivering global reach across 190+ countries.
            </Text>
            <Text color="gray.100" mb={4}>
              <strong>Phone:</strong> <a href="tel:+18554402242">+1 (855) 440-2242</a>
            </Text>
            <Text color="gray.100" mb={4}>
              <strong>Email:</strong>{' '}
              <Link href="mailto:info@cobaltdata.net" color="gray.100" _hover={{ color: "orange.400" }}>
                info@cobaltdata.net
              </Link>
            </Text>
            <Flex gap={4}>
              <Link href="https://twitter.com/cobaltdata" isExternal aria-label="Twitter">
                <Box as="span" color="gray.100" _hover={{ color: "orange.400" }}>Twitter</Box>
              </Link>
              <Link href="https://linkedin.com/company/cobaltdata" isExternal aria-label="LinkedIn">
                <Box as="span" color="gray.100" _hover={{ color: "orange.400" }}>LinkedIn</Box>
              </Link>
              <Link href="https://github.com/cobaltdatanet" isExternal aria-label="GitHub">
                <Box as="span" color="gray.100" _hover={{ color: "orange.400" }}>GitHub</Box>
              </Link>
            </Flex>
            <Text color="gray.200" mt={4}>
              <strong>Address:</strong> 99 Wall St Suite 5660, New York, NY 10005, USA
            </Text>
          </Box>

          {/* Proxy Solutions */}
          <Box>
            <Heading as="h4" size="md" mb={2} color="white">Proxy Solutions</Heading>
            <Text color="gray.300" fontSize="sm" mb={4} minH="40px">
              Powerful proxy networks infrastructure for seamless web data collection.
            </Text>
            <VStack align="flex-start" mb={2} spacing={2}>
              <Link href="https://thedataproxy.com" isExternal color="gray.100" _hover={{ color: "orange.400" }}>
                thedatproxy.com
              </Link>
              <Link href="https://roamingproxy.com" isExternal color="gray.100" _hover={{ color: "orange.400" }}>
                roamingproxy.com
              </Link>
            </VStack>
            <Heading as="h4" size="md" mb={2} color="white">Resources</Heading>
            <VStack align="flex-start" spacing={2}>
              <Link href="/resources/blog" color="gray.100" _hover={{ color: "orange.400" }}>Articles & Guides</Link>
              <Link href="/resources/faq" color="gray.100" _hover={{ color: "orange.400" }}>FAQ</Link>
              <Link href="/resources/support-center" color="gray.100" _hover={{ color: "orange.400" }}>Help & Support</Link>
            </VStack>
          </Box>

          {/* Crawling Tools */}
          <Box>
            <Heading as="h4" size="md" mb={2} color="white">Crawling Tools</Heading>
            <Text color="gray.300" fontSize="sm" mb={4} minH="40px">
              Advanced crawling tools for efficient and reliable web exploration.
            </Text>
            <VStack align="flex-start" spacing={2}>
              <Link href="https://automatedcrawler.com" isExternal color="gray.100" _hover={{ color: "orange.400" }}>
                automatedcrawler.com
              </Link>
              <Link href="https://cleancrawler.com" isExternal color="gray.100" _hover={{ color: "orange.400" }}>
                cleancrawler.com
              </Link>
              <Link href="https://integritycrawler.com" isExternal color="gray.100" _hover={{ color: "orange.400" }}>
                integritycrawler.com
              </Link>
              <Link href="https://trustcrawler.com" isExternal color="gray.100" _hover={{ color: "orange.400" }}>
                trustcrawler.com
              </Link>
              <Link href="https://trustedcrawler.com" isExternal color="gray.100" _hover={{ color: "orange.400" }}>
                trustedcrawler.com
              </Link>
            </VStack>
          </Box>

          {/* Scraping Solutions */}
          <Box>
            <Heading as="h4" size="md" mb={2} color="white">Scraping Solutions</Heading>
            <Text color="gray.400" fontSize="sm" mb={4} minH="40px">
              Precision scalable web scraping tools for extracting valuable web data.
            </Text>
            <VStack align="flex-start" spacing={2}>
              <Link href="https://automatedscraper.com" isExternal color="gray.100" _hover={{ color: "orange.400" }}>
                automatedscraper.com
              </Link>
              <Link href="https://cleanscraper.com" isExternal color="gray.100" _hover={{ color: "orange.400" }}>
                cleanscraper.com
              </Link>
              <Link href="https://ethicalscraper.com" isExternal color="gray.100" _hover={{ color: "orange.400" }}>
                ethicalscraper.com
              </Link>
              <Link href="https://legalscraping.com" isExternal color="gray.100" _hover={{ color: "orange.400" }}>
                legalscraping.com
              </Link>
              <Link href="https://scrapecompass.com" isExternal color="gray.100" _hover={{ color: "orange.400" }}>
                scrapecompass.com
              </Link>
              <Link href="https://scrapingcompass.com" isExternal color="gray.100" _hover={{ color: "orange.400" }}>
                scrapingcompass.com
              </Link>
              <Link href="https://scrapersafe.com" isExternal color="gray.100" _hover={{ color: "orange.400" }}>
                scrapersafe.com
              </Link>
              <Link href="https://smartscraping.com" isExternal color="gray.100" _hover={{ color: "orange.400" }}>
                smartscraping.com
              </Link>
              <Link href="https://trustedscraper.com" isExternal color="gray.100" _hover={{ color: "orange.400" }}>
                trustedscraper.com
              </Link>
              <Link href="https://trustscraper.com" isExternal color="gray.100" _hover={{ color: "orange.400" }}>
                trustscraper.com
              </Link>
            </VStack>
          </Box>
        </Grid>

        {/* Bottom Footer - Copyright and Legal */}
        <Flex justify="space-between" align="center" borderTop="1px solid" borderColor="gray.700" pt={6} flexWrap="wrap" gap={4}>
          <Text color="gray.400" fontSize="sm">
            © 2025 <Link href="https://cobaltdata.net" color="gray.200" _hover={{ color: "orange.400" }}>Cobalt Data Network</Link>. All rights reserved.
          </Text>
          <Flex gap={6}>
            <Link href="/privacy" color="gray.400" fontSize="sm" _hover={{ color: "orange.400" }}>Privacy Policy</Link>
            <Link href="/terms" color="gray.400" fontSize="sm" _hover={{ color: "orange.400" }}>Terms of Service</Link>
            <Link href="/compliance" color="gray.400" fontSize="sm" _hover={{ color: "orange.400" }}>Compliance</Link>
            <Link href="/cookie" color="gray.400" fontSize="sm" _hover={{ color: "orange.400" }}>Cookie Policy</Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;