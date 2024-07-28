export default function Page() {
    return (
      <section className="max-w-3xl mx-auto p-4">
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">My Publications</h1>
        
        <section className="mb-8">
          <ul className="prose prose-neutral dark:prose-invert">
            <li>
              <a href="https://example.com/paper1" className="text-blue-500">Assessing the Impact of GPT-4 Turbo in Generating Defeaters for Assurance Cases</a><br />
              K Khakzad Shahandashti, M Sivakumar, MM Mohajer, A Boaye Belle, ...<br />
              Proceedings of the 2024 IEEE/ACM First International Conference on AI …<br />
              <strong>Cited by:</strong> 5 <strong>Year:</strong> 2024
            </li>
            <li>
              <a href="https://example.com/paper2" className="text-blue-500">I came, I saw, I certified: some perspectives on the safety assurance of cyber-physical systems</a><br />
              M Sivakumar, AB Belle, KK Shahandashti, O Odu, H Hemmati, ...<br />
              arXiv preprint arXiv:2401.16633<br />
              <strong>Cited by:</strong> 2 <strong>Year:</strong> 2024
            </li>
            <li>
              <a href="https://example.com/paper3" className="text-blue-500">GPT-4 and Safety Case Generation: An Exploratory Analysis</a><br />
              M Sivakumar, AB Belle, J Shan, KK Shahandashti<br />
              arXiv preprint arXiv:2312.05696<br />
              <strong>Cited by:</strong> 2 <strong>Year:</strong> 2023
            </li>
            <li>
              <a href="https://example.com/paper4" className="text-blue-500">A PRISMA-driven systematic mapping study on system assurance weakeners</a><br />
              KK Shahandashti, AB Belle, TC Lethbridge, O Odu, M Sivakumar<br />
              Information and Software Technology, 107526<br />
              <strong>Cited by:</strong> 1 <strong>Year:</strong> 2024
            </li>
            <li>
              <a href="https://example.com/paper5" className="text-blue-500">Prompting GPT–4 to support automatic safety case generation</a><br />
              M Sivakumar, AB Belle, J Shan, KK Shahandashti<br />
              Expert Systems with Applications, 124653<br />
              <strong>Year:</strong> 2024
            </li>
          </ul>
        </section>
      </section>
    );
  }