import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, name, type, image }) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title} | Bapan Modak</title>
      <meta name="description" content={description} />
      {/* Facebook / Open Graph tags */}
      <meta property="og:type" content={type || "website"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={image || "/public/socialMedia.webp"}
      />{" "}
      {/* Path to your portfolio preview image */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name || "Bapan Modak"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
