import React from 'react';

/**
 * Utility component to suppress hydration warnings caused by browser extensions
 * that add attributes like fdprocessedid to form elements
 */
export const SuppressHydrationWarning: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div suppressHydrationWarning className={className}>
      {children}
    </div>
  );
};

/**
 * Hook to handle hydration mismatches gracefully
 */
export const useHydrationFix = () => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};
