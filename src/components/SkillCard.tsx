import React from 'react';

interface SkillCardProps {
  title: string;
  level: number;
  darkMode?: boolean;
}

export function SkillCard({ title, level, darkMode }: SkillCardProps) {
  return (
    <div className={`rounded-lg shadow-lg p-6 transition-transform hover:scale-105 ${
      darkMode ? 'bg-gray-700' : 'bg-white'
    }`}>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div className="mt-4">
        <div className={`w-full rounded-full h-2 ${
          darkMode ? 'bg-gray-600' : 'bg-gray-200'
        }`}>
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${level}%` }}
          />
        </div>
        <span className={`text-sm mt-1 ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {level}%
        </span>
      </div>
    </div>
  );
}