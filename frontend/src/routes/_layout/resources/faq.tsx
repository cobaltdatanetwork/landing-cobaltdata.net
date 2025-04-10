import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, SimpleGrid, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Tag, HStack } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon, SearchIcon, PhoneIcon, EmailIcon, ChatIcon, QuestionIcon, InfoIcon, TimeIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/resources/faq")({
  component: FAQPage,
});

function FAQPage() {
  const faqCategories = [
    { category: "Data Solutions", articles: 18, views: "78K+", topics: "Data integration, warehousing, analytics, quality management, governance" },
    { category: "Platform & Services", articles: 24, views: "92K+", topics: "Platform overview, implementation, service levels, API access, maintenance" },
    { category: "Account & Billing", articles: 16, views: "65K+", topics: "Subscription tiers, payment options, invoices, enterprise agreements, account settings" },
    { category: "Security & Compliance", articles: 22, views: "85K+", topics: "Data protection, encryption, compliance certifications, access controls, auditing" },
    { category: "Technical Support", articles: 31, views: "96K+", topics: "Troubleshooting, system requirements, performance optimization, known issues" },
    { category: "Integrations", articles: 20, views: "72K+", topics: "Third-party connectors, custom integrations, data pipelines, webhooks" }
  ];

  const popularQuestions = [
    { 
      question: "How secure is my data with CobaltData?", 
      answer: "CobaltData employs enterprise-grade security measures including SOC 2 Type II compliance, end-to-end encryption for all data (in transit and at rest), regular penetration testing, and role-based access controls. Our infrastructure is hosted in ISO 27001 certified data centers with 99.99% uptime. All customer data is backed up daily with point-in-time recovery options available on Business and Enterprise plans.", 
      views: "14.7K",
      category: "Security & Compliance"
    },
    { 
      question: "What data sources can Cobalt Data Network connect to?", 
      answer: "CobaltData supports over 150 pre-built connectors to common data sources including all major cloud platforms (AWS, Azure, GCP), databases (SQL, NoSQL, data warehouses), SaaS applications (Salesforce, HubSpot, etc.), file formats (CSV, JSON, XML, Parquet), and streaming sources (Kafka, Kinesis). Our Universal Connector Framework allows custom connections to virtually any source with a documented API, and our no-code integration builder makes configuring new connections straightforward without requiring specialized engineering resources.", 
      views: "13.2K",
      category: "Integrations"
    },
    { 
      question: "How is Cobalt Data Network different from other data platforms?", 
      answer: "CobaltData differentiates itself through: 1) Unified platform approach that combines ETL, warehousing, governance and analytics in one solution, 2) Industry-specific data models pre-configured for finance, healthcare, retail and manufacturing, 3) AI-powered data quality and anomaly detection that improves over time, 4) Hybrid architecture supporting both cloud and on-premises deployment, and 5) Transparent, consumption-based pricing with no hidden fees. Our average implementation time is 65% faster than traditional solutions with significantly lower total cost of ownership.", 
      views: "12.9K",
      category: "Platform & Services"
    },
    { 
      question: "What are the pricing options for CobaltData?", 
      answer: "CobaltData offers three primary pricing tiers: Standard ($2,500/month), Business ($5,000/month), and Enterprise (custom pricing). Pricing is based on data volume, processing requirements, and selected features. All plans include our core platform, while Business adds advanced analytics, higher throughput limits, and premium support. Enterprise plans offer dedicated infrastructure, custom SLAs, and specialized integration services. We also offer a Starter plan ($750/month) for small businesses with limited data needs. Volume discounts are available with annual contracts.", 
      views: "11.8K",
      category: "Account & Billing"
    }
  ];

  const faqItems = [
    {
      question: "What is Cobalt Data Network and what problems does it solve?",
      answer: "CobaltData is a comprehensive data management platform that helps organizations integrate, process, govern, and analyze their data more effectively. Our platform solves key challenges including data silos, poor data quality, complex compliance requirements, and the difficulty of turning raw data into actionable insights. By providing a unified solution for the entire data lifecycle, Cobalt Data Network reduces the complexity, cost, and time required to build and maintain effective data infrastructure while enabling better, data-driven decision making."
    },
    {
      question: "What are the system requirements for using CobaltData?",
      answer: "As a cloud-native SaaS platform, Cobalt Data Network has minimal system requirements. Users need a modern web browser (Chrome, Firefox, Safari, or Edge), reliable internet connection, and appropriate permissions to access your organization's data sources. For the Cobalt Data Network Desktop Companion, we recommend Windows 10/11 or macOS 10.15+ with 8GB RAM and 2GB free disk space. Our mobile app requires iOS 14+ or Android 10+. For on-premises components or high-volume data processing, detailed requirements are provided during implementation planning."
    },
    {
      question: "How long does it take to implement CobaltData?",
      answer: "Implementation timeframes vary based on your specific needs and environment complexity. A standard cloud implementation with pre-built connectors typically takes 2-4 weeks from contract signing to production deployment. More complex scenarios involving custom integrations, data migration, or on-premises components may require 6-12 weeks. Our Professional Services team uses a phased approach, allowing you to realize initial value quickly while expanding your implementation incrementally. We provide detailed timelines during the pre-sales process based on your specific requirements."
    },
    {
      question: "Does Cobalt Data Network offer an on-premises solution?",
      answer: "Yes, Cobalt Data Network offers flexible deployment options. While our platform is primarily cloud-based, we provide hybrid options for organizations with specific requirements. Our Edge Agent technology allows secure data processing within your firewall, with only processed results or metadata sent to the cloud. For enterprises with stringent data residency or regulatory requirements, we offer Cobalt Data Network Enterprise Private Cloud, which can be deployed in your own data centers or private cloud environment. This option maintains all the functionality of our cloud platform while keeping your data entirely within your infrastructure."
    },
    {
      question: "How does Cobalt Data Network ensure data quality?",
      answer: "CobaltData employs a multi-layered approach to data quality. Our platform includes automated data profiling that identifies patterns, anomalies and inconsistencies upon ingestion. Configurable validation rules can enforce business logic and constraints. Our AI-powered data quality engine learns from historical patterns to detect unexpected changes or errors. Data lineage tracking provides visibility into where and how data has changed. Additionally, our data observability suite offers continuous monitoring with automated alerts when quality metrics fall below defined thresholds. These capabilities are integrated throughout the platform, making quality a continuous process rather than a one-time effort."
    },
    {
      question: "What kind of support does Cobalt Data Network provide?",
      answer: "CobaltData offers tiered support options based on your plan. All customers receive access to our comprehensive knowledge base, community forums, and email support with 24-hour response time. Business plans include 12/5 technical support with 4-hour response for critical issues and a designated support specialist. Enterprise plans feature 24/7 support with 1-hour response guarantees, a dedicated Technical Account Manager, quarterly health checks, and priority issue resolution. We also offer optional Premium Support packages for customers requiring enhanced SLAs or specialized assistance. All customers receive maintenance updates and new feature releases as part of their subscription."
    },
    {
      question: "How does Cobalt Data Network handle compliance requirements?",
      answer: "CobaltData was built with regulatory compliance in mind. Our platform includes key features to support GDPR, CCPA, HIPAA, PCI-DSS and other major regulations. These include data classification to identify sensitive information, access controls with fine-grained permissions, comprehensive audit logging, data retention policies, and anonymization/pseudonymization capabilities. Our compliance documentation package provides attestations, certifications and deployment guides specific to various regulatory frameworks. For industries with specialized requirements, such as healthcare or financial services, we offer compliance-specific modules with pre-configured settings and reports designed for those regulatory environments."
    },
    {
      question: "What analytics capabilities does Cobalt Data Network provide?",
      answer: "CobaltData offers a range of built-in analytics capabilities while also supporting integration with specialized tools. Our platform includes interactive dashboards for operational metrics, a visual query builder for non-technical users, scheduled reports with automated distribution, and embedded predictive analytics for common use cases like customer churn or inventory forecasting. For advanced analytics, we provide seamless integration with tools like Tableau, Power BI, Looker, and Python/R notebooks. Our semantic layer allows consistent metrics and definitions across all analytics tools, while our query optimization engine ensures fast performance even for complex analyses against large datasets."
    },
    {
      question: "Can Cobalt Data Network handle real-time data processing?",
      answer: "Yes, Cobalt Data Network supports both batch and real-time data processing paradigms. Our stream processing engine can ingest, transform, and analyze data in real-time from sources including message queues, IoT devices, logs, and application events. The platform supports sub-second latency for critical use cases while providing exactly-once processing semantics to ensure data accuracy. Real-time dashboards show current metrics with automatic updates, and our rules engine can trigger alerts or actions based on event patterns. For mixed workloads, our intelligent orchestration layer can coordinate between real-time and batch processes to optimize resource utilization while meeting your performance requirements."
    },
    {
      question: "How does Cobalt Data Network handle data governance?",
      answer: "CobaltData provides comprehensive data governance capabilities integrated throughout the platform. Our central metadata repository automatically catalogs all data assets with technical metadata, while business glossaries and data dictionaries enable standardized terminology. The governance workflow engine supports approval processes for data definitions, quality rules, and access requests. Our lineage tracking shows data movement and transformations across the entire pipeline, while impact analysis helps assess how changes might affect downstream systems. Role-based access controls, column-level security, and dynamic data masking protect sensitive information, while compliance frameworks provide pre-built governance controls for common regulatory requirements."
    },
    {
      question: "What kind of scalability does Cobalt Data Network offer?",
      answer: "CobaltData is built on a modern, cloud-native architecture designed for elastic scalability. Our platform automatically scales both compute and storage resources based on your workload demands, with no manual intervention required. Standard plans support data volumes up to 5TB and processing up to 10 million records per hour. Business plans extend this to 20TB and 50 million records per hour. Enterprise plans offer virtually unlimited scaling capabilities, with customers currently processing petabytes of data and billions of records daily. Our architecture separates storage from compute, allowing each to scale independently for optimal resource utilization and cost efficiency."
    },
    {
      question: "How can I migrate existing data pipelines to CobaltData?",
      answer: "CobaltData provides several approaches to migrate existing data pipelines. Our Migration Assistant can automatically scan and convert pipelines from common tools like Informatica, Talend, or SSIS, preserving business logic and transformations. For custom-built pipelines, our reverse engineering tools analyze data flows and generate equivalent Cobalt Data Network configurations. During migration, our dual-run capability allows both old and new pipelines to operate simultaneously, ensuring validation before full cutover. Our Professional Services team offers migration packages that include assessment, planning, conversion, testing, and knowledge transfer to ensure a smooth transition with minimal risk or business disruption."
    }
  ];

  return (
    <>
      {/* FAQ Hero Section */}
      <Box py={16} bg="blue.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Frequently Asked Questions
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={8} maxW="800px" mx="auto">
            Find quick answers to common questions about CobaltData's platform, features, security,
            and technical capabilities.
          </Text>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {faqCategories.map((category, index) => (
              <Box key={index} p={6} bg="gray.50" borderRadius="md" boxShadow="sm">
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
                  <Text as="span" fontWeight="bold">Topics covered:</Text> {category.topics}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      
      {/* FAQ Main Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={4} fontWeight="medium">
            Most Common Questions
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Quick answers to our most frequently asked questions about CobaltData
          </Text>
          
          <Box bg="white" borderRadius="md" boxShadow="sm" overflow="hidden">
            <Accordion allowToggle>
              {faqItems.map((faq, index) => (
                <AccordionItem key={index} borderColor="gray.300">
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
        </Box>
      </Box>
      
      {/* Popular Articles Section */}
      <Box py={16} bg="gray.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={4} fontWeight="medium">
            Popular Questions
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            The most viewed questions and comprehensive answers from our knowledge base
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            {popularQuestions.map((article, index) => (
              <Flex key={index} p={6} bg="white" borderRadius="md" boxShadow="sm" align="flex-start">
                <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                  <QuestionIcon boxSize="30px" color="blue.600" />
                </Box>
                <Box>
                  <Flex justify="space-between" align="center" mb={2}>
                    <Heading as="h3" size="md" fontWeight="medium">{article.question}</Heading>
                    <Tag size="sm" colorScheme="blue" ml={2}>{article.category}</Tag>
                  </Flex>
                  <Text color="gray.600" mb={3} noOfLines={3}>{article.answer}</Text>
                  <HStack spacing={8}>
                    <Flex align="center">
                      <InfoIcon color="gray.400" mr={2} />
                      <Text fontSize="sm" color="gray.500">{article.views} views</Text>
                    </Flex>
                    <Button colorScheme="blue" size="sm" variant="outline">Read More</Button>
                  </HStack>
                </Box>
              </Flex>
            ))}
          </Grid>
        </Box>
      </Box>
      
      {/* Need More Help Section */}
      <Box py={16} bg="blue.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Didn't Find Your Answer?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Our technical team is ready to assist you with any questions that aren't covered in our FAQ
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

export default FAQPage;