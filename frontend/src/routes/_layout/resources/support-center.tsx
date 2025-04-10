import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Input, InputGroup, InputLeftElement, Divider, Tag, HStack } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon, SearchIcon, PhoneIcon, EmailIcon, ChatIcon, QuestionIcon, InfoIcon, TimeIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/resources/support-center")({
  component: SupportCenterPage,
});

function SupportCenterPage() {
  const supportCategories = [
    { category: "Proxy Solutions", articles: 50, views: "130K+", topics: "Proxy setup, IP rotation, geolocation targeting, connection issues, authentication" },
    { category: "Crawling Tools", articles: 60, views: "170K+", topics: "Crawler configuration, error handling, performance optimization, compliance settings" },
    { category: "Scraping Solutions", articles: 75, views: "200K+", topics: "Data extraction errors, scraper automation, ethical scraping, output formats" },
    { category: "Network & Security", articles: 45, views: "110K+", topics: "Network uptime, security protocols, compliance, IP blocking prevention" },
    { category: "Solutions & Use Cases", articles: 55, views: "140K+", topics: "Content aggregation, market research, price monitoring, SEO monitoring" },
    { category: "Billing & Account", articles: 40, views: "90K+", topics: "Subscription plans, payment methods, account management, enterprise billing" }
  ];

  const popularArticles = [
    { 
      title: "Configuring IP Rotation for Proxies", 
      description: "Learn how to set up IP rotation on thedataproxy.com and roamingproxy.com for seamless data collection", 
      views: "14.2K",
      category: "Proxy Solutions"
    },
    { 
      title: "Optimizing Crawlers for Large-Scale Data", 
      description: "Best practices for using automatedcrawler.com and trustcrawler.com to handle complex web crawling tasks", 
      views: "11.8K",
      category: "Crawling Tools"
    },
    { 
      title: "Ethical Web Scraping Guidelines", 
      description: "How to configure ethicalscraper.com and legalscraping.com for compliant data extraction", 
      views: "10.5K",
      category: "Scraping Solutions"
    },
    { 
      title: "Preventing IP Blocks During Scraping", 
      description: "Strategies to avoid IP blocking using Cobalt’s proxy and scraping tools for uninterrupted access", 
      views: "12.9K",
      category: "Network & Security"
    }
  ];

  const faqItems = [
    {
      question: "How do I set up a proxy on thedataproxy.com or roamingproxy.com?",
      answer: "To set up a proxy, log in to your dashboard on thedataproxy.com or roamingproxy.com, navigate to Proxy Settings, and select your preferred IP type (residential, datacenter, or mobile). Configure rotation settings and authentication credentials as needed. Detailed guides are available in our documentation."
    },
    {
      question: "What are the compliance requirements for web scraping?",
      answer: "Cobalt Data Network prioritizes compliance. Use ethicalscraper.com or legalscraping.com for tools designed to respect website terms of service, robots.txt, and regional regulations like GDPR and CCPA. Always configure rate limits and consult our compliance resources for best practices."
    },
    {
      question: "How can I optimize my crawler for better performance?",
      answer: "Optimize crawlers like automatedcrawler.com or trustcrawler.com by setting appropriate crawl delays, enabling parallel processing, and using our built-in error-handling features. Visit our Web Scraping Guides for detailed optimization tips tailored to your use case."
    },
    {
      question: "What payment options are available for Cobalt’s services?",
      answer: "We accept major credit cards (Visa, Mastercard, Amex), PayPal, and bank transfers for enterprise plans. Cryptocurrency payments are available for annual subscriptions upon request. All transactions are processed securely via our PCI-compliant platform."
    },
    {
      question: "How do I contact support for urgent issues?",
      answer: "For urgent issues, reach out via live chat (available 24/7 for enterprise clients) or email info@cobaltdata.net. You can also call +1 (855) 440-2242 during business hours (Monday to Friday, 9 AM - 6 PM EST). Enterprise clients have access to dedicated support channels."
    }
  ];

  return (
    <>
      {/* Support Categories Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Support Categories
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {supportCategories.map((category, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{category.category}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="blue.600">{category.articles}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Articles</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="blue.400">{category.views}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Monthly Views</Text>
                  </Flex>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Common Topics:</Text> {category.topics}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      {/* Customer Support Stats */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Our Support at a Glance
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            We provide fast, reliable support for our global proxy and scraping solutions with a focus on compliance and uptime.
          </Text>
          <Box bg="blue.50" p={8} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
              <VStack>
                <Heading as="h3" size="lg" color="blue.600">99%</Heading>
                <Text fontWeight="medium">Satisfaction Rate</Text>
                <Text fontSize="sm" color="gray.600">Based on client feedback</Text>
              </VStack>
              <VStack>
                <Heading as="h3" size="lg" color="blue.600">3 min</Heading>
                <Text fontWeight="medium">Chat Response</Text>
                <Text fontSize="sm" color="gray.600">Average wait time</Text>
              </VStack>
              <VStack>
                <Heading as="h3" size="lg" color="blue.600">6 hrs</Heading>
                <Text fontWeight="medium">Email Response</Text>
                <Text fontSize="sm" color="gray.600">During business hours</Text>
              </VStack>
              <VStack>
                <Heading as="h3" size="lg" color="blue.600">24/7</Heading>
                <Text fontWeight="medium">Uptime Support</Text>
                <Text fontSize="sm" color="gray.600">For enterprise clients</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>

      {/* FAQ Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Frequently Asked Questions
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Answers to common questions about our proxy, crawling, and scraping solutions
          </Text>
          <Box bg="white" borderRadius="md" boxShadow="sm" overflow="hidden">
            <Accordion allowToggle>
              {faqItems.map((faq, index) => (
                <AccordionItem key={index} borderColor="gray.200">
                  <h3>
                    <AccordionButton py={4} px={6} _expanded={{ bg: "blue.50", color: "blue.600" }}>
                      <Box flex="1" textAlign="left" fontWeight="medium" fontSize="md">
                        {faq.question}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel pb={4} px={6} bg="gray.50">
                    <Text color="gray.700">{faq.answer}</Text>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
          <Box textAlign="center" mt={8}>
            <Button 
              colorScheme="blue" 
              variant="outline" 
              as="a"
              href="/resources/faq"
              size="lg"
            >
              View All FAQs
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Call to Action */}
      <Box py={16} bg="blue.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Need More Help?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Our expert team is available 24/7 to assist with proxy setup, crawler optimization, or scraping challenges.
          </Text>
          <Flex justify="center" gap={6} flexWrap="wrap">
            <Button
              size="lg"
              bg="white"
              color="blue.500"
              _hover={{ bg: "gray.100" }}
              as="a"
              href="/demo-request"
            >
              Request Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "blue.700" }}
              as="a"
              href="/contact-sales"
            >
              Contact Sales
            </Button>
          </Flex>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default SupportCenterPage;