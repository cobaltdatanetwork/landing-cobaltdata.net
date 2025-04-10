import React, { useState, useMemo } from 'react';
import {
  Box,
  Flex,
  Icon,
  Text,
  IconButton,
  Image,
  Link,
  Container,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RouterLink } from "@tanstack/react-router";
import { 
  FiMenu, 
  FiChevronDown, 
  FiGlobe,
  FiBook,
  FiShield,
  FiRefreshCw,
  FiSearch,
  FiTool,
  FiLock,
  FiMap,
  FiCompass,
  FiCode,
  FiCpu,
  FiCheckCircle,
} from "react-icons/fi";

import Logo from "/assets/images/cobalt-data-network-logo.png"; // Adjust path as needed

interface NavItem {
  title: string;
  icon?: any;
  path?: string;
  subItems?: SubItem[];
  description?: string;
}

interface SubItem {
  title: string;
  path: string;
  description?: string;
  icon?: any;
}

interface NavItemsProps {
  onClose?: () => void;
  isMobile?: boolean;
}

const useProducts = () => useMemo(() => ({
  proxySolutions: [
    { title: "TheDataProxy.com", path: "https://thedataproxy.com", description: "Global proxy network for seamless data access", icon: FiGlobe },
    { title: "RoamingProxy.com", path: "https://roamingproxy.com", description: "Rotating proxies for uninterrupted scraping", icon: FiRefreshCw },
  ],
  crawlingTools: [
    { title: "AutomatedCrawler.com", path: "https://automatedcrawler.com", description: "Automated tools for web crawling", icon: FiSearch },
    { title: "CleanCrawler.com", path: "https://cleancrawler.com", description: "Reliable and clean crawling solutions", icon: FiTool },
    { title: "IntegrityCrawler.com", path: "https://integritycrawler.com", description: "Crawling with a focus on integrity", icon: FiShield },
    { title: "TrustCrawler.com", path: "https://trustcrawler.com", description: "Trusted crawling for consistent results", icon: FiCheckCircle },
    { title: "TrustedCrawler.com", path: "https://trustedcrawler.com", description: "Dependable crawling technology", icon: FiCheckCircle },
  ],
  scrapingSolutions: [
    { title: "AutomatedScraper.com", path: "https://automatedscraper.com", description: "Efficient automation for web scraping", icon: FiCpu },
    { title: "CleanScraper.com", path: "https://cleanscraper.com", description: "Precise and clean data extraction", icon: FiTool },
    { title: "EthicalScraper.com", path: "https://ethicalscraper.com", description: "Compliant scraping practices", icon: FiShield },
    { title: "LegalScraping.com", path: "https://legalscraping.com", description: "Legally sound scraping solutions", icon: FiLock },
    { title: "ScrapeCompass.com", path: "https://scrapecompass.com", description: "Navigate scraping with ease", icon: FiCompass },
    { title: "ScrapingCompass.com", path: "https://scrapingcompass.com", description: "Guided tools for scraping success", icon: FiMap },
    { title: "ScraperSafe.com", path: "https://scrapersafe.com", description: "Secure scraping with safety in mind", icon: FiLock },
    { title: "SmartScraping.com", path: "https://smartscraping.com", description: "Intelligent scraping technology", icon: FiCode },
    { title: "TrustedScraper.com", path: "https://trustedscraper.com", description: "Reliable scraping services", icon: FiCheckCircle },
    { title: "TrustScraper.com", path: "https://trustscraper.com", description: "Trustworthy scraping tools", icon: FiCheckCircle },
  ],
  core: [
    { title: "CobaltData.net", path: "https://cobaltdata.net", description: "The hub for all Cobalt solutions", icon: FiGlobe },
  ],
}), []);

const navStructure: NavItem[] = [
  {
    title: "Proxy Solutions",
    icon: FiGlobe,
    description: "Powerful proxy networks for web data collection",
    subItems: [], // Populated dynamically
  },
  {
    title: "Crawling Tools",
    icon: FiSearch,
    description: "Advanced tools for exploring the web",
    subItems: [], // Populated dynamically
  },
  {
    title: "Scraping Solutions",
    icon: FiCode,
    description: "Precision tools for extracting web data",
    subItems: [], // Populated dynamically
  },
  {
    title: "Resources",
    icon: FiBook,
    description: "Guides and support for your projects",
    subItems: [
      { title: "Articles", path: "/resources/blog", description: "Learn how to use our APIs", icon: FiBook },
      { title: "FAQ", path: "/resources/faq", description: "Answers to common questions", icon: FiBook },
      { title: "Support", path: "/resources/support-center", description: "Get help with your projects", icon: FiBook },
    ],
  },
  { title: "Contact", path: "/contact", description: "Reach out to us" },
];

const NavItems = ({ onClose, isMobile = false }: NavItemsProps) => {
  const { proxySolutions, crawlingTools, scrapingSolutions, core } = useProducts();
  const textColor = "gray.800";
  const hoverColor = "blue.600";
  const bgActive = "blue.100";
  const activeTextColor = "blue.800";
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);

  const finalNavStructure = useMemo(() => {
    const structure = [...navStructure];
    structure[0].subItems = [...proxySolutions, ...core]; // Proxy Solutions + CobaltData.net
    structure[1].subItems = crawlingTools; // Crawling Tools
    structure[2].subItems = scrapingSolutions; // Scraping Solutions
    return structure;
  }, [proxySolutions, crawlingTools, scrapingSolutions, core]);

  const handleMenuToggle = (index: number) => {
    setActiveMenuIndex(activeMenuIndex === index ? null : index);
  };

  const renderNavItems = (items: NavItem[]) =>
    items.map(({ icon, title, path, subItems, description }, index) => {
      const isActive = activeMenuIndex === index;

      if (subItems?.length) {
        return (
          <Box key={title} position="relative">
            <Flex
              as="button"
              px={4}
              py={2}
              color={textColor}
              _hover={{ color: hoverColor }}
              _active={{ bg: bgActive, color: activeTextColor }}
              align="center"
              onClick={() => handleMenuToggle(index)}
              w="100%"
            >
              {icon && <Icon as={icon} mr={2} />}
              <Text flex={1} textAlign="left">{title}</Text>
              <Icon as={FiChevronDown} ml={2} transform={isActive ? "rotate(180deg)" : "rotate(0deg)"} transition="transform 0.2s" />
            </Flex>
            {isActive && (
              <Box
                bg="white"
                w={isMobile ? "100%" : "100%"}
                maxW={isMobile ? "100%" : "1200px"}
                mx={isMobile ? 0 : "auto"}
                pl={isMobile ? 6 : 0}
                py={4}
                position={isMobile ? "static" : "fixed"}
                top={isMobile ? "auto" : "60px"}
                left={isMobile ? "auto" : "50%"}
                transform={isMobile ? "none" : "translateX(-50%)"}
                zIndex={20}
                boxShadow={isMobile ? "none" : "md"}
                borderRadius={isMobile ? 0 : "md"}
              >
                <Box px={4} py={2} borderBottom="1px" borderColor="gray.200">
                  {description && (
                    <Text fontSize="sm" color="gray.600">{description}</Text>
                  )}
                </Box>
                <Flex
                  direction={isMobile ? "column" : "row"}
                  wrap={isMobile ? "nowrap" : "wrap"}
                  justify={isMobile ? "flex-start" : "space-between"}
                  p={4}
                >
                  {subItems.map((subItem) => (
                    <Box
                      key={subItem.title}
                      as={Link}
                      href={subItem.path}
                      isExternal={subItem.path.startsWith("https")}
                      color={textColor}
                      _hover={{ color: hoverColor, bg: "gray.100" }}
                      onClick={() => {
                        if (isMobile && onClose) onClose();
                        setActiveMenuIndex(null);
                      }}
                      p={2}
                      flex={isMobile ? "none" : "0 0 25%"}
                      minW={isMobile ? "auto" : 0}
                    >
                      <Flex align="center">
                        {subItem.icon && <Icon as={subItem.icon} mr={2} />}
                        <Box>
                          <Text fontWeight="medium">{subItem.title}</Text>
                          {subItem.description && (
                            <Text fontSize="xs" color="gray.500">{subItem.description}</Text>
                          )}
                        </Box>
                      </Flex>
                    </Box>
                  ))}
                </Flex>
              </Box>
            )}
          </Box>
        );
      }

      return (
        <Flex
          key={title}
          as={RouterLink}
          to={path}
          px={4}
          py={2}
          color={textColor}
          _hover={{ color: hoverColor }}
          activeProps={{ style: { background: bgActive, color: activeTextColor } }}
          align="center"
          onClick={() => isMobile && onClose ? onClose() : null}
        >
          {icon && <Icon as={icon} mr={2} />}
          <Text>{title}</Text>
        </Flex>
      );
    });

  return (
    <Flex 
      align="center" 
      gap={4}
      flexDir={isMobile ? "column" : "row"}
      justify="center"
    >
      {renderNavItems(finalNavStructure)}
    </Flex>
  );
};

const TopNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="100%">
      <Box
        bg="blue.50"
        px={4}
        py={3}
        position="sticky"
        top="0"
        zIndex="sticky"
        boxShadow="sm"
      >
        <Container maxW="1200px" px={0}>
          <Flex align="center" justify="space-between" w="100%">
            <Link href="/" as={RouterLink} onClick={onClose}>
              <Image src={Logo} alt="CobaltData" h="40px" />
            </Link>

            <IconButton
              onClick={isOpen ? onClose : onOpen}
              display={{ base: "flex", md: "none" }}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              fontSize="20px"
              color="blue.600"
              icon={<FiMenu />}
              variant="ghost"
            />

            <Flex 
              align="center" 
              gap={4} 
              display={{ base: "none", md: "flex" }}
              flex={1}
              justify="center"
            >
              <NavItems />
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "none" }}
        bg="white"
        w="100%"
      >
        <Container maxW="1200px" px={0}>
          <Flex flexDir="column" py={4}>
            <NavItems onClose={onClose} isMobile={true} />
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default TopNav;