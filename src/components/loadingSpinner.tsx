import React from "react";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  text?: string;
}

export const Loading: React.FC<LoadingProps> = ({ size = "md", text }) => {
  const sizeClasses = {
    sm: "w-5 h-5 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 p-4">
      <div
        className={`${sizeClasses[size]} border-(--terdiary-color) border-t-transparent rounded-full animate-spin`}
        role="status"
        aria-label="Carregando"
      />
      {text && (
        <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
          {text}
        </p>
      )}
    </div>
  );
};
