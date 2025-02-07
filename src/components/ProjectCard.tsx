interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  darkMode: boolean; // <-- Add darkMode prop
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  darkMode, // <-- Receive darkMode prop
}) => {
  return (
    <div className={`rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 ${
      darkMode ? 'bg-gray-700' : 'bg-white'
    }`}>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className={`mb-4 text-gray-600 ${darkMode ? 'text-white' : 'text-gray-600'} mb-4`}>
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full text-sm ${
                darkMode ? 'bg-blue-900 text-blue-200' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
