import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, SimpleGrid, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Tag, HStack, Helmet } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon, SearchIcon, PhoneIcon, EmailIcon, ChatIcon, QuestionIcon, InfoIcon, TimeIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/resources/support-center")({
  component: SupportCenterPage,
});

function SupportCenterPage() {
  const supportCategories = [
    { category: "Account Management", articles: 48, views: "125K+", topics: "Login troubleshooting, password reset, security settings, account configuration, user permissions" },
    { category: "Data Integration", articles: 65, views: "180K+", topics: "Connection errors, data quality issues, format conversion, extraction techniques, validation problems" },
    { category: "API & Development", articles: 72, views: "210K+", topics: "Authentication issues, rate limits, response errors, endpoint usage, webhook configuration" },
    { category: "Platform Services", articles: 54, views: "155K+", topics: "Processing errors, pipeline configuration, data transformation, workflow optimization, job scheduling" },
    { category: "Billing & Subscriptions", articles: 36, views: "95K+", topics: "Payment methods, invoices, subscription management, plan upgrades, enterprise billing" },
    { category: "Technical Infrastructure", articles: 83, views: "220K+", topics: "System requirements, performance optimization, compatibility issues, deployment assistance" }
  ];

  const popularArticles = [
    { 
      title: "Resolving API Authentication Failures", 
      description: "Step-by-step guide to diagnosing and fixing the most common authentication issues with Cobalt Data Network API services", 
      views: "12.5K",
      category: "API & Development"
    },
    { 
      title: "Optimizing Data Integration Performance", 
      description: "Best practices for improving speed and efficiency when processing large volumes of data through Cobalt Data Network", 
      views: "10.2K",
      category: "Data Integration"
    },
    { 
      title: "Managing Usage Limits & Billing", 
      description: "How to set up alerts, monitor resource usage, and manage your Cobalt Data Network subscription settings to optimize costs", 
      views: "9.7K",
      category: "Billing & Subscriptions"
    },
    { 
      title: "Troubleshooting Connection Issues", 
      description: "Complete guide to identifying and resolving data source connection problems in your Cobalt Data Network implementation", 
      views: "11.3K",
      category: "Technical Infrastructure"
    }
  ];

  const faqItems = [
    {
      question: "How do I reset my Cobalt Data Network password?",
      answer: "To reset your Cobalt Data Network password, click on the 'Forgot Password' link on the login page. Enter your email address, and we'll send you a password reset link. Follow the instructions in the email to create a new password. For security reasons, password reset links expire after 24 hours."
    },
    {
      question: "What payment methods does Cobalt Data Network accept?",
      answer: "Cobalt Data Network accepts all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and bank transfers for annual enterprise plans. Cryptocurrency payments are available upon request for annual subscriptions. All payments are processed securely through our PCI-compliant payment system."
    },
    {
      question: "How do I upgrade my Cobalt Data Network subscription plan?",
      answer: "You can upgrade your Cobalt Data Network subscription at any time by going to Account Settings > Subscription. Click on 'Change Plan' and select your desired plan. The price difference will be prorated based on the remaining days in your current billing cycle. Your new plan benefits will be available immediately after upgrading."
    },
    {
      question: "Can I get a refund if I'm not satisfied with Cobalt Data Network?",
      answer: "Yes, Cobalt Data Network offers a 14-day money-back guarantee for new subscriptions. If you're not completely satisfied with our service, contact our support team within 14 days of your initial purchase for a full refund. Refunds for monthly plans are processed within 3-5 business days."
    },
    {
      question: "What are the data processing options for Cobalt Data Network?",
      answer: "Cobalt Data Network offers several data processing options including batch processing, real-time streaming, incremental updates, and scheduled jobs. You can configure these settings in the dashboard under Processing Settings > Processing Options. Enterprise users have access to additional custom processing strategies and priority queue management."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cobalt Data Network Support Center | Technical Help & Customer Assistance</title>
        <meta name="description" content="Get expert help with Cobalt Data Network's data integration platform. Find troubleshooting guides, technical documentation, and direct support from our team." />
        <meta name="keywords" content="Cobalt Data Network support, technical help, data integration support, customer assistance, troubleshooting, API support, data platform help" />
        <link rel="canonical" href="https://cobaltdata.net/resources/support-center" />
      </Helmet>
      
      {/* Support Center Hero Section */}
      <Box py={16} bg="blue.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Cobalt Data Network Support Center
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={8} maxW="800px" mx="auto">
            Find answers to your questions with our comprehensive documentation,
            tutorials, and direct support from our Cobalt Data Network experts.
          </Text>
          
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
            Cobalt Data Network Support at a Glance
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            We're committed to providing exceptional support with fast response times and high satisfaction rates for all Cobalt Data Network customers
          </Text>
          
          <Box bg="blue.50" p={8} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
              <VStack>
                <Heading as="h3" size="lg" color="blue.600">96%</Heading>
                <Text fontWeight="medium">Satisfaction Rate</Text>
                <Text fontSize="sm" color="gray.600">Based on customer feedback</Text>
              </VStack>
              <VStack>
                <Heading as="h3" size="lg" color="blue.600">2 min</Heading>
                <Text fontWeight="medium">Chat Response</Text>
                <Text fontSize="sm" color="gray.600">Average wait time</Text>
              </VStack>
              <VStack>
                <Heading as="h3" size="lg" color="blue.600"> 4 hrs</Heading>
                <Text fontWeight="medium">Email Response</Text>
                <Text fontSize="sm" color="gray.600">During business hours</Text>
              </VStack>
              <VStack>
                <Heading as="h3" size="lg" color="blue.600">24/7</Heading>
                <Text fontWeight="medium">Documentation</Text>
                <Text fontSize="sm" color="gray.600">Always available</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* FAQ Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Frequently Asked Cobalt Data Network Questions
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Quick answers to our most common Cobalt Data Network support questions
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
              View All Cobalt Data Network FAQs
            </Button>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="blue.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Need Additional Help With Cobalt Data Network?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Our technical support team is ready to assist you with any Cobalt Data Network questions or implementation issues
            that aren't covered in our documentation
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
              Request Cobalt Data Network Demo
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
              Contact Technical Support
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