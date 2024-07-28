import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

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
          <div className="flex space-x-4">
            <a href="mailto:kimya@yorku.ca" className="text-red-500">
              <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />
            </a>
            <a href="https://scholar.google.com/citations?user=your-scholar-id" className="text-blue-500">
              <FontAwesomeIcon icon={faGoogle} className="h-6 w-6" />
            </a>
            <a href="https://github.com/your-github-username" className="text-gray-800">
              <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/kimya-khakzad" className="text-blue-700">
              <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
            </a>
          </div>
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