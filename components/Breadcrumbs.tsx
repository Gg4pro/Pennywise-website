import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  // Generate schema for breadcrumb structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      ...(item.href && { "item": `https://www.pennywise-app.com${item.href}` })
    }))
  };

  return (
    <>
      {/* Schema.org structured data for breadcrumbs */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <nav aria-label="Breadcrumb" className={`flex items-center text-sm ${className}`}>
        <ol className="flex items-center flex-wrap gap-1.5" itemScope itemType="https://schema.org/BreadcrumbList">
          {/* Home Link */}
          <li className="flex items-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link
              to="/"
              className="text-white/60 hover:text-white transition-colors flex items-center gap-1"
              itemProp="item"
            >
              <Home className="w-3.5 h-3.5" />
              <span itemProp="name" className="sr-only">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>

          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <ChevronRight className="w-3.5 h-3.5 text-white/40 mx-1" aria-hidden="true" />

              {item.href ? (
                <Link
                  to={item.href}
                  className="text-white/60 hover:text-white transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span className="text-white/90 font-medium" itemProp="name">
                  {item.label}
                </span>
              )}
              <meta itemProp="position" content={String(index + 2)} />
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
