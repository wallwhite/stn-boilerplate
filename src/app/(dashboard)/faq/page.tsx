import React from 'react';
import { Metadata, NextPage } from 'next';
import { Accordion, AccordionItem } from '@stn-ui/accordion';
import { Banner } from '@stn-ui/banner';
import { Button } from '@stn-ui/button';
import { DiamondIcon } from '@stn-ui/icons';
import { FAQ_ITEMS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions',
};

export const dynamic = 'force-static';

const Faq: NextPage = () => (
  <>
    <Accordion className="mb-40">
      {FAQ_ITEMS.map(({ id, title, description }) => (
        <AccordionItem key={id} id={id} title={title}>
          {description}
        </AccordionItem>
      ))}
    </Accordion>
    <Banner
      icon={<DiamondIcon />}
      title="Can't find what you're looking for?"
      description="Contact us and we'll get back to you as soon as possible."
    >
      <Button size="m">Get in touch</Button>
    </Banner>
  </>
);

export default Faq;
