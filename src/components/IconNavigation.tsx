import React from "react";

interface IconNavigationProps {
  item: {
    name: string;
    href: string;
    icon: React.ReactNode;
  };
  className?: string;
  iconClassName?: string;
  showLabels?: boolean;
}

const IconNavigation = ({
  item,
  className = "flex space-x-6 items-center",
  iconClassName = "md:text-2xl text-base",
  showLabels = false,
}: IconNavigationProps) => {
  return (
    <div className={className}>
      <a
        key={item.name}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 transition duration-300 flex items-center space-x-2"
        aria-label={item.name}
      >
        <span className={iconClassName}>{item.icon}</span>
        {showLabels && <span className="text-sm">{item.name}</span>}
      </a>
    </div>
  );
};

export default IconNavigation;
