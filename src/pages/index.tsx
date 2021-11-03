import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';
import { tw } from 'twind'

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="Robotrips"
        description="Autonomous Shuttle Service for you 24/7"
      />
      <Header/>
      <main className = {tw(`bg-gray-100 `)}>
        <VideoSection />
        <ListSection />
        <FeatureSection />
        <CasesSection />
        {/* <SocialProof /> */}
        <PricingTable />
      </main>
      {/* <Footer /> */}
    </Page>
  );
}
