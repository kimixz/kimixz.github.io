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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12h2a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2v-6a2 2 0 012-2zm-8 0h2a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6a2 2 0 012-2zm8-6h2a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2V8a2 2 0 012-2zm-8 0h2a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
              </svg>
              kimya@yorku.ca
            </a>
            <a href="https://linkedin.com/in/kimya-khakzad" className="text-blue-500 flex items-center mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 00-12 0v8a6 6 0 0012 0V8zm-6-3a3 3 0 110 6 3 3 0 010-6zm9 12a5 5 0 00-10 0v1a5 5 0 0010 0v-1z" />
              </svg>
              linkedin.com/in/kimya-khakzad
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