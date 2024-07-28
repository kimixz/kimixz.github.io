export default function Page() {
  return (
    <section className="max-w-3xl mx-auto p-4">
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Kimya Khakzad Shahandashti</h1>
      
      <section className="mb-8">
        <h2 className="font-medium text-xl mb-4">About Me</h2>
        <p className="prose prose-neutral dark:prose-invert">
          I recently graduated with a Master's in Computer Science at York University.I have worked in the software engineering domain for almost 5 years, specializing in front end-development with React. 
          During my research, I worked with assurance cases and am interested in Generative AI models and LLMs.
        </p>
      </section>
      
   
      
      <section className="mb-8">
        <h2 className="font-medium text-xl mb-4">Education</h2>
        <p className="prose prose-neutral dark:prose-invert">
          <strong>Master of Computer Science, MSc</strong><br />
          York University, Toronto, Canada • GPA: 4.0 (Sep 2022 - Apr 2024)
        </p>
      </section>
      
      
      <section>
        <h2 className="font-medium text-xl mb-4">Contact</h2>
        <p className="prose prose-neutral dark:prose-invert">
          Toronto, ON • +1 (416) 939-3973 • <a href="mailto:kimya@yorku.ca" className="text-blue-500">kimya@yorku.ca</a> • <a href="https://linkedin.com/in/kimya-khakzad" className="text-blue-500">linkedin.com/in/kimya-khakzad</a>
        </p>
      </section>
    </section>
  );
}