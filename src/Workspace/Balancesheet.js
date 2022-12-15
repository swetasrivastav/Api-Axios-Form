import React, { useState } from "react";
import {
  Input,
  SimpleGrid,
  Container,
  Box,
  VStack,
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  Button,
  Stack,
} from "@chakra-ui/react";

const Balancesheet = () => {
  const [EquityShare, setEquityShare] = useState(0);
  const [PreferenceShare, setPreferenceShare] = useState(0);

  const [abc, setValue] = useState(0);

  const addNum = () => {
    let a = parseInt(EquityShare);
    let b = parseInt(PreferenceShare);
    setValue(a + b);
  };

  const dataChangeHandler = (e) => {
    setEquityShare(e.target.value);
    setPreferenceShare(e.target.value);
    addNum();
  };

  return (
    <div>
      <VStack>
        <Container maxW="60rem" color="blue">
          <Accordion allowToggle>
            <AccordionItem margin="3rem">
              <AccordionButton>
                <Box flex="3" textAlign="left" border="10rem">
                  <h1>EQUITY & LIABILITIE</h1>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <SimpleGrid
                  columns={[2, null, 3]}
                  spacing="2rem"
                  margin="2rem"
                  padding="1.5"
                >
                  <Box height="auto">
                    <Input
                      type="number"
                      onChange={dataChangeHandler}
                      placeholder="Equity Share Capital"
                    />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      onChange={dataChangeHandler}
                      placeholder="Preference Share Capital (Irredeemable)"
                    />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      value={abc}
                      placeholder="Capital"
                      readOnly
                    />
                  </Box>
                </SimpleGrid>
                <SimpleGrid
                  columns={[2, null, 3]}
                  spacing="2rem"
                  margin="1.5rem"
                  p="1.5"
                >
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="Profit & Loss A/c Balance"
                    />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="General Reserve" />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="Capital Reserve" />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="Securities Premium" />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="Others" />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="Reserves & Surplus" />
                  </Box>
                </SimpleGrid>
                <SimpleGrid
                  columns={[2, null, 3]}
                  spacing="2rem"
                  margin="1.5rem"
                  p={1.5}
                >
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="Unsecured LT from Directors/ Relatives etc."
                    />
                  </Box>

                  <Box height="auto">
                    <Input type="number" placeholder="From Banks/FIs" />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="Preference shares (Redeemable)"
                    />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="Debentures" />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="From Others" />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="Secured Long Term Borrowings"
                    />
                  </Box>
                </SimpleGrid>
                <SimpleGrid
                  columns={[2, null, 3]}
                  spacing="2rem"
                  margin="1.5rem"
                  p="1.5"
                >
                  <Box height="auto">
                    <Input type="number" placeholder="From Banks/FIs" />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="From Others" />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="Unsecured Long Term Borrowings"
                    />
                  </Box>
                </SimpleGrid>
                <SimpleGrid
                  columns={[2, null, 3]}
                  spacing="2rem"
                  margin="1.5rem"
                  p="1.5"
                >
                  <Box height="auto">
                    <Input type="number" placeholder="Advance from Parties" />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="Other LT Liabilities (Retention money relating to contractors+ payable for EMD and BG + Other Payable)"
                    />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="Other Long Term Liabilities"
                    />
                  </Box>
                </SimpleGrid>
                <SimpleGrid
                  columns={[2, null, 3]}
                  spacing="2rem"
                  margin="1.5rem"
                  p="1.5"
                >
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="Deferred Tax Liabilities"
                    />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="Long Term Provsions" />
                  </Box>

                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="Non Current Liabilities"
                    />
                  </Box>
                </SimpleGrid>
                <SimpleGrid
                  columns={[2, null, 3]}
                  spacing="2rem"
                  margin="1.5rem"
                  p="1.5"
                >
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="Short Term Borrowings-Others"
                    />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="Short Term Borrowings-Banks"
                    />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="LC/BC Backed Trade Payable"
                    />
                  </Box>
                </SimpleGrid>
                <SimpleGrid
                  columns={[2, null, 3]}
                  spacing="2rem"
                  margin="1.5rem"
                  p="1.5"
                >
                  <Box height="auto">
                    <Input type="number" placeholder="Trade Payable" />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="Expenses Payable" />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="Trade Payables" />
                  </Box>
                </SimpleGrid>
                <SimpleGrid
                  columns={[2, null, 3]}
                  spacing="2rem"
                  margin="1.5rem"
                  p="1.5"
                >
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="Current Maturities of Long Term Debt"
                    />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="Advance from customer" />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="Provision for Taxation" />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholde="Other Statutory Liabilities Payable"
                    />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="Mobilisation advance" />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="Lease Liability Provision"
                    />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="Others" />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="Other Current Liabilities"
                    />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="Short Term Provsions" />
                  </Box>
                </SimpleGrid>
                <SimpleGrid
                  columns={[2, null, 3]}
                  spacing="2rem"
                  margin="1.5rem"
                  p="1.5"
                >
                  <Box height="auto">
                    <Input type="number" placeholder="Current Liabilities" />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="ASSETS" />
                  </Box>
                </SimpleGrid>
                <SimpleGrid
                  columns={[2, null, 3]}
                  spacing="2rem"
                  margin="1.5rem"
                  p="1.5"
                >
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="a) Tangible Assets (i-ii-iii)"
                    />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="i) Gross Block" />
                  </Box>

                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="ii) Less: Accumulated Depreciation"
                    />
                  </Box>

                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="iii) Less: Revaluation Reserves"
                    />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="b) Intangible Assets(i-ii-iii)"
                    />
                  </Box>

                  <Box height="auto">
                    <Input type="number" placeholder="i)Gross Block" />
                  </Box>

                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="ii)Less: Accumulated Depreciation"
                    />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="iii)Less: Revaluation Reserves"
                    />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="c) CWIP" />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="Fixed Assets: Net Block"
                    />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="Deferred Tax Assets" />
                  </Box>
                </SimpleGrid>
                <SimpleGrid
                  columns={[2, null, 3]}
                  spacing="2rem"
                  margin="1.5rem"
                  p="1.5"
                >
                  <Box height="auto">
                    <Input type="number" placeholder="a) In Group Concerns" />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="d) In Others" />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="Non Current Investments"
                    />
                  </Box>
                </SimpleGrid>
                <SimpleGrid
                  columns={[2, null, 3]}
                  spacing="2rem"
                  margin="1.5rem"
                  p="1.5"
                >
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="To group Concerns/Related Parties"
                    />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="To Capital Advances" />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="To Others" />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="Long Term Loans & Advances"
                    />
                  </Box>
                </SimpleGrid>
                <SimpleGrid
                  columns={[2, null, 3]}
                  spacing="2rem"
                  margin="1.5rem"
                  p="1.5"
                >
                  <Box height="auto">
                    <Input type="number" placeholder="a) Retention money" />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="b) Domestic Debtors exceeding 1 Years"
                    />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="c) Export Debtors exceeding 1 Year"
                    />
                  </Box>{" "}
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="d) FD with maturity more than 1 year"
                    />
                  </Box>{" "}
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="e) Long Term Security Deposits"
                    />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="f) Staff Advances" />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="g) Non-cons. stores and spares"
                    />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="h) Patents/ goodwill, misc. exp. not provided for)"
                    />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="i) Others" />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="Other Non Current Assets"
                    />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="Non Current Assets" />
                  </Box>
                </SimpleGrid>
                <SimpleGrid
                  columns={[2, null, 3]}
                  spacing="2rem"
                  margin="1.5rem"
                  p="1.5"
                >
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="a) Govt. and trust securities"
                    />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="b) Other securities " />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="c) FDs with banks - Lien Free"
                    />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="Current Investements" />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="Inventories" />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="a) Raw Material (& consumables)"
                    />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="b) Stock-in-Process" />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="c) Finished Goods" />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="d) Stock in trade " />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="e) Consumables/ stores & spares"
                    />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="f) Goods in Transit" />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="g) Other stock" />
                  </Box>
                </SimpleGrid>
                <SimpleGrid
                  columns={[2, null, 3]}
                  spacing="2rem"
                  margin="1.5rem"
                  p="1.5"
                >
                  <Box height="auto">
                    <Input type="number" placeholder="a) Domestic" />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="b) Export" />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="Trade Receivables - Less Than 1 Year"
                    />
                  </Box>
                </SimpleGrid>
                <SimpleGrid
                  columns={[2, null, 3]}
                  spacing="2rem"
                  margin="1.5rem"
                  p="1.5"
                >
                  <Box height="auto">
                    <Input type="number" placeholder="a) Cash Balance" />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="b) Bank balance" />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="c) FDs with banks - Lien Marked"
                    />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="Cash & Bank Balance" />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="a) Advance to Suppliers"
                    />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="b) Advances receoverable in cash or in kind or for value to be considered good"
                    />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="c) To Related Parties" />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="d) To Others" />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="Short Term Loans & Advances"
                    />
                  </Box>
                </SimpleGrid>
                <SimpleGrid
                  columns={[2, null, 3]}
                  spacing="2rem"
                  margin="1.5rem"
                  p="1.5"
                >
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="a) Instalments of deferred receiv. (due within 1 year)"
                    />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="b) EMD" />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="c) Retention money" />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="d) Advance Tax" />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="e) Prepaid Rent" />
                  </Box>
                  <Box height="auto">
                    <Input
                      type="number"
                      placeholder="f) Other current assets"
                    />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="Other Current Assets" />
                  </Box>
                  <Box height="auto">
                    <Input type="number" placeholder="Current Assets" />
                  </Box>
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
        <Stack spacing={4} direction="row">
          <Button colorScheme="teal" size="lg" textAlign="right">
            Submit
          </Button>
        </Stack>
      </VStack>
    </div>
  );
};

export default Balancesheet;
