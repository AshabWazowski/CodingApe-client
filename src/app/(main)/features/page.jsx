import {
  Code2,
  Bot,
  PlayCircle,
  Map,
  Lightbulb
} from "lucide-react";

const FeaturesPage = () => {
  const features = [
    {
      title: "AI-Powered Code Editor",
      description: "Experience coding enhanced by Gemini AI with intelligent autocompletion, real-time code suggestions, and built-in CodeTools for fixing bugs and explaining complex logic.",
      icon: <Code2 className="h-10 w-10 text-indigo-500" />,
    },
    {
      title: "Interactive Coding Challenges",
      description: "Solve algorithmic problems of varying difficulties. Each problem comes with test cases, template code, and a dedicated workspace to hone your skills.",
      icon: <Lightbulb className="h-10 w-10 text-amber-500" />,
    },
    {
      title: "CodeChimp AI Assistant",
      description: "Stuck on a problem? Chat with CodeChimp, our conversational AI coding assistant powered by Gemini. Ask questions, clarify concepts, and get tailored coding advice without leaving the platform.",
      icon: <Bot className="h-10 w-10 text-emerald-500" />,
    },
    {
      title: "Real-time Code Execution",
      description: "Run and test your code instantly in the browser. Powered by Judge0 CE, get immediate feedback on compilation errors and testcase outputs across multiple programming languages.",
      icon: <PlayCircle className="h-10 w-10 text-rose-500" />,
    },
    {
      title: "Interactive Guided Tours",
      description: "Never feel lost. With built-in Shepherd.js integrations, enjoy step-by-step onboarding that guides you through the IDE features and the overall platform effortlessly.",
      icon: <Map className="h-10 w-10 text-blue-500" />,
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col p-8 rounded-3xl bg-opacity-10 shadow-border bg-background border border-border shadow-lg transition-all hover:shadow-xl duration-300 group"
            >
              <div className="mb-6 p-4 rounded-xl bg-muted/50 w-max group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h2 className="text-2xl font-bold mb-3">{feature.title}</h2>
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
