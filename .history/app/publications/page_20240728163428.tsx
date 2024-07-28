export default function Page() {
    return (
      <section className="max-w-3xl mx-auto p-4">
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">My Publications</h1>
        
        <div className="space-y-4">
          <div className="p-4 border border-gray-300 rounded-lg">
            <h2 className="font-semibold">Assessing the Impact of GPT-4 Turbo in Generating Defeaters for Assurance Cases</h2>
            <p className="text-gray-500">Proceedings of the 2024 IEEE/ACM First International Conference on AI</p>
          </div>
          <div className="p-4 border border-gray-300 rounded-lg">
            <h2 className="font-semibold">I came, I saw, I certified: some perspectives on the safety assurance of cyber-physical systems</h2>
            <p className="text-gray-500">arXiv preprint arXiv:2401.16633</p>
          </div>
          <div className="p-4 border border-gray-300 rounded-lg">
            <h2 className="font-semibold">GPT-4 and Safety Case Generation: An Exploratory Analysis</h2>
            <p className="text-gray-500">arXiv preprint arXiv:2312.05696</p>
          </div>
          <div className="p-4 border border-gray-300 rounded-lg">
            <h2 className="font-semibold">A PRISMA-driven systematic mapping study on system assurance weakeners</h2>
            <p className="text-gray-500">Information and Software Technology, 107526</p>
          </div>
          <div className="p-4 border border-gray-300 rounded-lg">
            <h2 className="font-semibold">Prompting GPT–4 to support automatic safety case generation</h2>
            <p className="text-gray-500">Expert Systems with Applications, 124653</p>
          </div>
        </div>
      </section>
    );
  }