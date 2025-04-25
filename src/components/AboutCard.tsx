import React from 'react';

type Props = {
  title: string;
  heroImage?: string;
  children: React.ReactNode;
};

const AboutCard = ({ title, heroImage, children }: Props) => {
  return (
    <article className="bg-sumiiro text-gray-200 p-6 rounded-lg max-w-4xl mx-auto">
      {heroImage && (
        <img
          src={heroImage}
          alt={title}
          className="w-full max-w-2xl mx-auto rounded-xl mb-6 shadow-lg"
        />
      )}
      <h1 className="text-3xl font-bold mb-4 text-center">{title}</h1>
      <div className="prose prose-invert">{children}</div>
    </article>
  );
};

export default AboutCard;