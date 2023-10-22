import React from 'react';
import { Metadata, NextPage } from 'next';
import Image from 'next/image';
import { Feature, FeaturesList } from '@stn-ui/features';
import { FEATURES_ITEMS } from '@/lib/constants';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Check out our features',
};

const Features: NextPage = () => (
  <FeaturesList>
    {FEATURES_ITEMS.map(({ id, description, icon, image, title }) => (
      <Feature
        key={id}
        title={title}
        description={description}
        icon={icon}
        image={<Image src={image} alt={title} fill />}
      />
    ))}
  </FeaturesList>
);

export default Features;
