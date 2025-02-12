import NavBar from "./NavBar";

function ReactFeatures() {
  return (
    <div>
      <section
        id="reactFeatures"
        className="flex flex-col justify-center items-center h-screen"
      >
        <NavBar />
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl font-bold mb-6">React 19: New Features</h1>
          <p className="text-lg mb-4">
            React 19 introduces several exciting features such as:
          </p>
          <ul className="text-left list-disc space-y-3">
            <li>Concurrent Rendering Improvements</li>
            <li>React Compiler for optimized performance</li>
            <li>Server Components support</li>
            <li>New Hooks for better state management</li>
            <li>Improved developer tools and error handling</li>
          </ul>
          <p className="mt-6 text-gray-600">
            React 19 focuses on improving performance, developer experience, and
            scalability.
          </p>
        </div>
      </section>
    </div>
  );
}

export default ReactFeatures;
