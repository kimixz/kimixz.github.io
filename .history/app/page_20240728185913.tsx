export default function Page() {
  return (
    <section className="max-w-3xl mx-auto p-4">
      <h1 className="font-medium text-3xl mb-8 tracking-tighter">Kimya Khakzad Shahandashti</h1>
      
      <section className="mb-8">
        <h2 className="font-medium text-xl mb-4">About Me</h2>
        <p className="prose prose-neutral dark:prose-invert">
          I recently graduated with a Master's in Computer Science at York University. I have worked in the software engineering domain for almost 5 years, specializing in front end-development with React. 
          During my research, I worked with assurance cases and am interested in Generative AI models and LLMs.
        </p>
        <div className="mt-4">
          <h2 className="font-medium text-xl mb-4">Contact</h2>
          <p className="prose prose-neutral dark:prose-invert">
            <a href="mailto:kimya@yorku.ca" className="text-blue-500 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12h2a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2v-6a2 2 0 012-2zm-8 0h2a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2zM8 4h2a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2zm0 0h8a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z" />
              </svg>
              kimya@yorku.ca
            </a>
            <a href="https://linkedin.com/in/kimya-khakzad" className="text-blue-500 flex items-center mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 00-12 0v8a6 6 0 0012 0V8zm-6-3a3 3 0 110 6 3 3 0 010-6zm9 12a5 5 0 00-10 0v1a5 5 0 0010 0v-1z" />
              </svg>
              linkedin.com/in/kimya-khakzad
            </a>
            <a href="https://github.com/your-github-username" className="text-blue-500 flex items-center mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.167 6.839 9.491.5.092.682-.217.682-.483 0-.237-.01-1.02-.015-1.85-2.782.605-3.369-1.34-3.369-1.34-.454-1.165-1.11-1.477-1.11-1.477-.909-.62.069-.607.069-.607 1.004.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.646.349-1.089.636-1.34-2.221-.252-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.563 9.563 0 0112 6.844c.851.004 1.705.115 2.504.336 1.91-1.295 2.75-1.025 2.75-1.025.544 1.378.201 2.397.098 2.65.64.701 1.029 1.595 1.029 2.688 0 3.849-2.336 4.695-4.565 4.942.359.309.679.92.679 1.855 0 1.34-.012 2.422-.012 2.75 0 .269.18.579.688.481C19.134 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              github.com/your-github-username
            </a>
            <a href="https://scholar.google.com/citations?user=your-scholar-id" className="text-blue-500 flex items-center mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10 10 10 0 00-10-10zM4.93 4.93a9 9 0 1112.728 12.728A9 9 0 014.93 4.93zM12 6a6 6 0 00-5.294 8.83A6 6 0 0012 18a6 6 0 005.294-3.17A6 6 0 0012 6z" />
              </svg>
              scholar.google.com/citations?user=your-scholar-id
            </a>
          </p>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="font-medium text-xl mb-4">Education</h2>
        <div className="prose prose-neutral dark:prose-invert">
          <div className="mb-4">
            <strong>Master of Computer Science, MSc</strong><br />
            York University, Toronto, Canada<br />
            <span className="text-sm text-gray-600 dark:text-gray-400">Sep 2022 - Apr 2024</span>
          </div>
          <div>
            <strong>Bachelor of Computer Engineering, BSc</strong><br />
            Shahid Beheshti University, Tehran, Iran<br />
            <span className="text-sm text-gray-600 dark:text-gray-400">Sep 2016 - Feb 2021</span>
          </div>
        </div>
      </section>
    </section>
  );
}