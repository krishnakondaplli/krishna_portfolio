import { useState } from "react";

import { motion } from "framer-motion";
import { Card } from "../components/Card";
import { CardContent } from "../components/CardContent";
import { Link } from "react-router-dom";

const topics = [
  {
    title: "How the Internet Works",
    content:
      "The internet is a global network of computers that communicate using protocols like TCP/IP. When you send a request, it travels through routers, switches, and servers before reaching its destination.",
    fullContent:
      "The internet is a global network of computers that communicate using protocols like TCP/IP. When you send a request, it travels through routers, switches, and servers before reaching its destination. Data is broken into packets and sent through various paths to ensure efficient delivery. Websites are hosted on servers, and browsers use HTTP/HTTPS to fetch and display content. DNS helps translate domain names into IP addresses, making it easier for users to access websites without remembering numerical addresses. The internet's infrastructure relies on undersea cables, satellites, and data centers to maintain global connectivity. Learn more about how the internet works from Google's Guide to Internet Infrastructure and IBM's Networking Basics.",
    links: [
      {
        name: "www.cloudflare.com",
        url: "https://www.cloudflare.com/learning/network-layer/how-does-the-internet-work/",
      },
      {
        name: "www.ibm.com",
        url: "https://www.ibm.com/docs/en/zvm/7.2?topic=structure-overview-internetworking",
      },
    ],
  },
  {
    title: "Sending and Receiving Data",
    content:
      "Data transmission over the internet occurs through packets. These packets move across networks via protocols like HTTP, FTP, and WebSocket.",
    fullContent:
      "Data transmission over the internet occurs through packets. These packets move across networks via protocols like HTTP, FTP, and WebSocket. When a user requests a web page, the request is sent to a server, which then responds with the necessary data. The data travels back in packets and is reassembled by the user's browser. Security measures like encryption (SSL/TLS) ensure data integrity and protection during transmission. Protocols like MQTT and gRPC are also used for IoT and real-time communication. Explore more about data transmission from Meta's Engineering Blog and Google's Cloud Networking.",
    links: [
      {
        name: "engineering.fb.com",
        url: "https://engineering.fb.com/",
      },
      {
        name: "www.cloudflare.com",
        url: "https://www.cloudflare.com/learning/network-layer/how-does-the-internet-work/",
      },
    ],
  },
  {
    title: "Artificial Intelligence and Its Future Uses",
    content:
      "AI is transforming industries with automation, machine learning, and predictive analytics. It is used in healthcare, finance, and even creative fields.",
    fullContent:
      "AI is transforming industries with automation, machine learning, and predictive analytics. It is used in healthcare for diagnostics, finance for fraud detection, and even creative fields like music and art generation. AI-powered chatbots, recommendation systems, and virtual assistants enhance user experience and efficiency. As AI evolves, its role in various industries will expand, making processes smarter and more efficient. AI is also being used in climate modeling, autonomous vehicles, and personalized education. Learn more about AI's future from IBM's AI Insights and Google's AI Blog.",
    links: [
      {
        name: "www.ibm.com/artificial-intelligence",
        url: "https://www.ibm.com/artificial-intelligence",
      },
      {
        name: "ai.googleblog.com",
        url: "https://ai.googleblog.com/",
      },
    ],
  },
  {
    title: "AI in the Software Industry",
    content:
      "In the software industry, AI improves development with code generation, bug detection, and intelligent automation, enhancing productivity.",
    fullContent:
      "In the software industry, AI improves development with code generation, bug detection, and intelligent automation, enhancing productivity. Tools like GitHub Copilot and ChatGPT assist developers in writing code efficiently. AI-powered testing frameworks detect issues before deployment, reducing errors and speeding up development cycles. AI also plays a crucial role in DevOps, monitoring system performance and predicting failures before they occur. AI-driven analytics help teams make data-driven decisions, improving software quality and user satisfaction. Explore more about AI in software development from Microsoft's AI Toolsand Meta's AI Research.",
    links: [
      {
        name: "azure.microsoft.com",
        url: "https://azure.microsoft.com/en-us/services/machine-learning/",
      },
      {
        name: "ai.facebook.com",
        url: "https://ai.facebook.com/",
      },
    ],
  },
  {
    title: "The Importance of Generative AI for Developers",
    content:
      "Generative AI is revolutionizing software development by assisting in content creation, coding, and automation, making developers more efficient.",
    fullContent:
      "Generative AI is revolutionizing software development by assisting in content creation, coding, and automation, making developers more efficient. It helps generate boilerplate code, suggest improvements, and even create entire applications based on prompts. Developers can leverage AI-powered tools to prototype ideas faster and focus on problem-solving rather than repetitive coding. The future of development will see AI as a co-pilot rather than a replacement, enhancing creativity and innovation. Generative AI is also being used for UI/UX design, documentation, and debugging. Learn more about generative AI from OpenAI's Blog and Google's Generative AI Resources.",
    links: [
      {
        name: "openai.com",
        url: "https://openai.com/blog",
      },
      {
        name: "ai.google",
        url: "https://ai.google/education/generative-ai",
      },
    ],
  },
];

export default function Blog() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div
      id="blog"
      className="max-w-4xl mx-auto p-4 sm:p-6 space-y-4 sm:space-y-6"
    >
      <h1 className="text-2xl mt-24 sm:text-3xl font-bold text-center">
        Tech Blog
      </h1>
      {topics.map((topic, index) => (
        <motion.div
          key={index}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="bg-black/15 "
        >
          <Card className="p-3 sm:p-4 bg-black/10 shadow-lg rounded-xl sm:rounded-2xl">
            <CardContent className="bg-black/10">
              <h2 className="text-lg sm:text-xl font-semibold">
                {topic.title}
              </h2>
              <p className="text-gray-500 font-bold tracking-wider mt-1 sm:mt-2 text-sm sm:text-base">
                {expanded === index ? (
                  <>
                    <p>{topic.fullContent}</p>
                    {topic.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-1 sm:mt-2 text-blue-500 underline text-sm sm:text-base"
                      >
                        <p>{link.name}</p>
                      </a>
                    ))}
                  </>
                ) : (
                  topic.content
                )}
              </p>
              <button
                className="mt-2 sm:mt-4 hover:text-blue-600 hover:rounded-lg text-sm sm:text-base"
                onClick={() => setExpanded(expanded === index ? null : index)}
              >
                {expanded === index ? "Read Less" : "Read More"}
              </button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
