export default function Page() {
  return (
    <section className="max-w-3xl mx-auto p-4">
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Kimya Khakzad Shahandashti</h1>
      
      <section className="mb-8">
        <h2 className="font-medium text-xl mb-4">About Me</h2>
        <p className="prose prose-neutral dark:prose-invert">
          I recently graduated with a Master's in Computer Science and have worked in the software engineering domain for almost 5 years, specializing in front end development with React. 
          During my research, I worked with assurance cases and am interested in Generative AI models and LLMs.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="font-medium text-xl mb-4">Work Experience</h2>
        <ul className="prose prose-neutral dark:prose-invert">
          <li>
            <strong>Researcher</strong> - York University, Toronto, Canada (Sep 2022 - Present)
            <ul>
              <li>Developed LLM-powered tools with LangChain for software engineering tasks and employed prompt techniques such as chain-of-thought.</li>
              <li>Utilized GPT-4 Turbo to enhance Cyber-Physical Systems' safety by identifying vulnerabilities, achieving a 95% confidence in system safety.</li>
              <li>Facilitated lab activities and evaluated assignments in Advanced Object-Oriented Programming and Software Testing courses.</li>
            </ul>
          </li>
          <li>
            <strong>Machine Learning Fellow</strong> - AI4Good Lab, Toronto, Canada (May 2024 - Jun 2024)
            <ul>
              <li>Created a mental health chatbot for students, powered by Generative AI. Fine-tuned GPT-3.5 using conversational data and deployed it using Streamlit.</li>
              <li>Completed a 7-week program including machine learning lectures and workshops covering neural networks, convolutional neural networks, reinforcement learning, recurrent neural networks, and generative AI.</li>
            </ul>
          </li>
          <li>
            <strong>Software Engineer</strong> - Porsline, Tehran, Iran (Mar 2021 - Jun 2022)
            <ul>
              <li>Refactored the response page of Porsline by implementing Next.js and Redux toolkit, resulting in a 60% increase in user engagement and survey creation efficiency.</li>
              <li>Enhanced test coverage to 80% by implementing tests, utilizing Jest and React Testing Library.</li>
              <li>Led a scrum team of 7 frontend developers, managing project workflows and fostering team growth, while also actively participating in the recruitment and interview process.</li>
            </ul>
          </li>
          <li>
            <strong>Frontend Developer</strong> - Iranian Medical Computing, Tehran, Iran (Jul 2020 - Feb 2021)
            <ul>
              <li>Implemented an online 3D exhibition platform using React.js and Three.js, boosting user satisfaction by 70%.</li>
              <li>Developed an interactive web conferencing system featuring real-time video, audio, and text communication through WebRTC and Socket.io which handled more than 1000 users.</li>
            </ul>
          </li>
          <li>
            <strong>Mobile Application Developer/Intern</strong> - Pheebs, Tehran, Iran (Jun 2019 - May 2020)
            <ul>
              <li>Implemented a mobile bank application for Maskan Bank using React Native and Redux which had more than 5000 users.</li>
            </ul>
          </li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="font-medium text-xl mb-4">Education</h2>
        <p className="prose prose-neutral dark:prose-invert">
          <strong>Master of Computer Science, MSc</strong><br />
          York University, Toronto, Canada • GPA: 4.0 (Sep 2022 - Apr 2024)
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="font-medium text-xl mb-4">Skills</h2>
        <ul className="prose prose-neutral dark:prose-invert">
          <li>Programming Languages: JavaScript, Python, TypeScript, Java</li>
          <li>Web Development Skills: React.js, Next.js, HTML5, CSS3, Node.js, Express, RESTful API</li>
          <li>Databases: MongoDB, MySQL</li>
          <li>Machine Learning and AI technologies: LLM, LangChain, OpenAI API, HuggingFace, RAG, Prompt Engineering</li>
          <li>Tools and Technologies: Git/GitHub, Docker, CI/CD Pipeline, Streamlit</li>
          <li>Technical Skills: Agile Development and Scrum, Design Patterns, Object-Oriented Design, Software Development Life Cycle</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="font-medium text-xl mb-4">Publications</h2>
        <ul className="prose prose-neutral dark:prose-invert">
          <li>Assessing the Impact of GPT-4 Turbo in Generating Defeaters for Assurance Cases</li>
          <li>Using GPT-4 Turbo To Automatically Identify Defeaters In Assurance Cases</li>
        </ul>
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