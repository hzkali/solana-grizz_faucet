import { Text, Heading, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Faucet from "../src/components/Faucet";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Solana dev faucet</title>
        <meta
          name="description"
          content="A faucet for solana tokens on dev net"
        />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main className={styles.main}>
        <VStack mb={6}>
          <Heading as="h1" size={"3xl"}>
            
            <span className={styles.animateCharcter}>
               Solana Grizzlython Hackathon 
            </span>
           <Text color={"whiteAlpha.900"} fontSize="3xl">
          Do you want to test your app?
          </Text>
              <Text color={"whiteAlpha.900"} fontSize="2xl">
                Use this faucet airdrop yourself ☉
          </Text></Heading>
        </VStack>
        <Faucet />
      </main>

   
    </div>
  );
};

export default Home;
