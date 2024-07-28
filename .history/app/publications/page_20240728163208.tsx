export default function Page() {
    return (
      <section className="max-w-3xl mx-auto p-4">
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">My Publications</h1>
        
        <section className="mb-8">
          <ul className="prose prose-neutral dark:prose-invert">
            <li>
              <a href="https://example.com/paper1" className="text-blue-500">Assessing the Impact of GPT-4 Turbo in Generating Defeaters for Assurance Cases</a><br />
\
            </li>
            <li>
              <a href="https://example.com/paper2" className="text-blue-500">I came, I saw, I certified: some perspectives on the safety assurance of cyber-physical systems</a><br />
            </li>
            <li>
              <a href="https://example.com/paper3" className="text-blue-500">GPT-4 and Safety Case Generation: An Exploratory Analysis</a><br />
            </li>
            <li>
              <a href="https://example.com/paper4" className="text-blue-500">A PRISMA-driven systematic mapping study on system assurance weakeners</a><br />
            </li>
            <li>
              <a href="https://example.com/paper5" className="text-blue-500">Prompting GPT–4 to support automatic safety case generation</a><br />
            </li>
          </ul>
        </section>
      </section>
    );
  }