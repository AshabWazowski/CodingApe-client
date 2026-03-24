import {
  Code2,
  Terminal,
  Bot,
  Calendar,
  Map,
  Briefcase
} from "lucide-react";

const FeaturesPage = () => {
  const features = [
    {
      title: "AI-Powered Code Editor",
      subtitle: "Code Smarter, Not Harder",
      description: "Supercharge your workflow with intelligent debugging, automated code optimizations, and built-in tools that instantly fix bugs and break down complex logic.",
      icon: <Code2 className="h-10 w-10 text-indigo-500" />,
      colorClass: "text-indigo-500"
    },
    {
      title: "Coding Practice",
      subtitle: "Test & Run Instantly",
      description: "No setup required. Execute your code directly and get lightning-fast feedback on compilation errors and test cases across multiple programming languages.",
      icon: <Terminal className="h-10 w-10 text-purple-500" />,
      colorClass: "text-purple-500"
    },
    {
      title: "KritBuddy: Your AI Mentor",
      subtitle: "Never Get Stuck Again",
      description: "Meet KritBuddy, your conversational coding assistant. Share your screen, ask questions, and get tailored, real-time advice to clarify tricky concepts without ever leaving the platform.",
      icon: <Bot className="h-10 w-10 text-pink-500" />,
      colorClass: "text-pink-500"
    },
    {
      title: "Dynamic Study Planner",
      subtitle: "Master Your Daily Routine",
      description: "Tell our AI what you want to master, and it will generate a highly structured, day-by-day study routine designed to keep you focused and on track.",
      icon: <Calendar className="h-10 w-10 text-blue-500" />,
      colorClass: "text-blue-500"
    },
    {
      title: "Custom Learning Roadmaps",
      subtitle: "Your Path to Proficiency",
      description: "Stop wondering what to learn next. Generate a personalized, big-picture roadmap tailored to your ultimate career goals, guiding you effortlessly from beginner to pro.",
      icon: <Map className="h-10 w-10 text-emerald-500" />,
      colorClass: "text-emerald-500"
    },
    {
      title: "Interview Prep Hub",
      subtitle: "Crack the Coding Interview",
      description: "Land your dream job with confidence. Generate a comprehensive, customized interview guide packed with the exact questions and concepts you need to ace your technical rounds.",
      icon: <Briefcase className="h-10 w-10 text-orange-500" />,
      colorClass: "text-orange-500"
    },
  ];

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-64px)]">
      <div className="w-full py-8 px-8 md:px-20 mb-12">
        <div className="flex flex-col items-center justify-center w-full mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
            Platform <span className="text-indigo-600">Features</span>
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl">
            Explore the powerful tools and functionalities designed to make your coding journey seamless, engaging, and highly productive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col p-8 rounded-3xl bg-opacity-10 shadow-border bg-background border border-border shadow-lg transition-all hover:shadow-xl duration-300 group"
            >
              <div className="mb-6 p-4 rounded-xl bg-muted/50 w-max group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h2 className="text-2xl font-bold mb-1">{feature.title}</h2>
              <h3 className={`text-sm font-semibold mb-3 ${feature.colorClass}`}>{feature.subtitle}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
