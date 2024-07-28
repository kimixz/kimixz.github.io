export default function Page() {
    return (
      <section className="max-w-3xl mx-auto p-4">
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">My Publications</h1>
        
        <ol className="prose prose-neutral dark:prose-invert list-decimal pl-5">
          <li className="mb-4">
            Assessing the Impact of GPT-4 Turbo in Generating Defeaters for Assurance Cases
          </li>
          <li className="mb-4">
            I came, I saw, I certified: some perspectives on the safety assurance of cyber-physical systems
          </li>
          <li className="mb-4">
            GPT-4 and Safety Case Generation: An Exploratory Analysis
          </li>
          <li className="mb-4">
            A PRISMA-driven systematic mapping study on system assurance weakeners
          </li>
          <li className="mb-4">
            Prompting GPT–4 to support automatic safety case generation
          </li>
        </ol>
      </section>
    );
  }