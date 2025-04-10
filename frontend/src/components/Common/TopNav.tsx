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
} from "@chakra-ui/react";
import { Link as RouterLink } from "@tanstack/react-router";
import { 
  FiMenu, 
  FiChevronDown, 
  FiGlobe,
  FiBook,
} from "react-icons/fi";

import Logo from "/assets/images/data-proxy-logo.png"; // Adjust path as needed

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
}

interface NavItemsProps {
  onClose?: () => void;
  isMobile?: boolean;
}

const useProducts = () => useMemo(() => [
  { title: "TheDataProxy.com", path: "https://thedataproxy.com", description: "Global proxy network for web scraping" },
  { title: "AutomatedCrawler.com", path: "https://automatedcrawler.com", description: "Automated web crawling solutions" },
  { title: "AutomatedScraper.com", path: "https://automatedscraper.com", description: "Efficient web scraping automation" },
  { title: "CleanCrawler.com", path: "https://cleancrawler.com", description: "Clean and reliable crawling tools" },
  { title: "CleanScraper.com", path: "https://cleanscraper.com", description: "Precise and clean scraping solutions" },
  { title: "CobaltData.net", path: "https://cobaltdata.net", description: "Umbrella for all Cobalt solutions" },
  { title: "EthicalScraper.com", path: "https://ethicalscraper.com", description: "Compliant web scraping tools" },
  { title: "IntegrityCrawler.com", path: "https://integritycrawler.com", description: "Crawling with integrity" },
  { title: "LegalScraping.com", path: "https://legalscraping.com", description: "Legally compliant scraping solutions" },
  { title: "RoamingProxy.com", path: "https://roamingproxy.com", description: "Rotating proxy services" },
  { title: "ScrapeCompass.com", path: "https://scrapecompass.com", description: "Navigate web scraping easily" },
  { title: "ScrapingCompass.com", path: "https://scrapingcompass.com", description: "Guided scraping solutions" },
  { title: "ScraperSafe.com", path: "https://scrapersafe.com", description: "Safe and secure scraping tools" },
  { title: "SmartScraping.com", path: "https://smartscraping.com", description: "Intelligent scraping technology" },
  { title: "TrustCrawler.com", path: "https://trustcrawler.com", description: "Trusted crawling solutions" },
  { title: "TrustedCrawler.com", path: "https://trustedcrawler.com", description: "Reliable crawling tools" },
  { title: "TrustedScraper.com", path: "https://trustedscraper.com", description: "Trusted scraping services" },
  { title: "TrustScraper.com", path: "https://trustscraper.com", description: "Secure and trustworthy scraping" },
], []);

const navStructure: NavItem[] = [
  {
    title: "Products",
    icon: FiGlobe,
    description: "Explore our suite of web scraping and proxy solutions",
    subItems: [], // Populated dynamically in NavItems
  },
  {
    title: "Resources",
    icon: FiBook,
    description: "Documentation and learning resources",
    subItems: [
      { title: "Articles", path: "/resources/blog", description: "Learn how to use our APIs" },
      { title: "FAQ", path: "/resources/faq", description: "Answers to common questions" },
      { title: "Support", path: "/resources/support-center", description: "Get help with your projects" },
    ],
  },
  { title: "Contact", path: "/contact", description: "Get in touch with us" },
];

const NavItems = ({ onClose, isMobile = false }: NavItemsProps) => {
  const products = useProducts();
  const textColor = "gray.800";
  const hoverColor = "blue.600";
  const bgActive = "blue.100";
  const activeTextColor = "blue.800";
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);

  const finalNavStructure = useMemo(() => {
    const structure = [...navStructure];
    structure[0].subItems = products; // Assign products to "Products" menu
    return structure;
  }, [products]);

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
                      <Text fontWeight="medium">{subItem.title}</Text>
                      {subItem.description && (
                        <Text fontSize="xs" color="gray.500">{subItem.description}</Text>
                      )}
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