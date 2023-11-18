const tsData = [
    {
        id: 1,
        title: 'Full Stack Developer',
        jobType: 'Full Time',
        location: 'Dhaka, Bangladesh',
        stack: ['ReactJs', 'NodeJs', 'ExpressJs', 'MongoDB'],
        thumbnail: '/images/product-owner2.png',
        open: false,
        slug: 'full-stack-developer',
        jobDescription: 'TS4U Ltd. is looking for energetic and proactive individuals to be a part of our development team, supporting established projects and creating from the ground up. The ideal candidate is an experienced leader and team player who is adept at both frontend and backend development.',
        vacancy: 1,
        officeHours: '7:00 AM to 4:00 PM',
        salary: 'Negotiable',
        keySkills: [
            'Working as a part of a dynamic team to deliver winning products.',
            'Excellent knowledge of MERN - Mongo, Express, React JS, Node.js',
            'Overall 3+ years of Full-Stack JavaScript Experience',
            'Experience in working with JSON and REST API (a good understanding of how to build and consume REST APIs is required)',
            'Excellent knowledge of Design patterns and front-end technologies - HTML5 and CSS/CSS3 (LESS/Sass is a plus, but not required)',
            'Providing code documentation and other inputs to technical documents.',
            'Supporting continuous improvement by investigating alternatives and new technologies and presenting these for architectural review.',
            'Troubleshooting and debugging to optimize the performance of the application.',
            'Led the design, creation, and implementation of a software suite.',
            'Designing and implementing web applications.Investigating and resolving technical issues by deploying updates/fixes.',
            'Participating in the definition and implementation of standards for mobile development.',
            'Experience in state management library with Redux.',
            'Experience in Object Oriented Programming and Functional Programming.',
            'Component design libraries like Ant Design and Material UI.'
        ],
        responsibility: [
            'Writing efficient, reusable, testable, and scalable code.',
            'Support the team in planning, execution, implementation, deployment, and maintaining the code',
            'Developing Frontend components to enhance performance and receptiveness, client-side logic, and platform, highly responsive web applications',
            'Work as an assistant with the Lead Engineer',
            'Testing and debugging applications with debugging tools',
            'Upgrading our existing applications',
            'Enhancing the functionalities of our existing applications'
        ],
        salaryReview: 'Yearly',
        festivalBonus: 2
    },
    {
        id: 2,
        title: 'Product Owner',
        jobType: 'Full Time',
        location: 'Dhaka, Bangladesh',
        stack: ['Agile', 'Project Management', 'Scrum', 'Product Backlog'],
        thumbnail: '/images/teacher.png',
        open: true,
        slug: 'product-owner',
        jobDescription: 'TS4U Ltd. is looking for energetic and proactive individuals to be a part of our development team, supporting established projects and creating from the ground up. The ideal candidate is an experienced leader and team player who is adept at product management.',
        vacancy: 1,
        officeHours: '7:00 AM to 4:00 PM',
        salary: 'Negotiable',
        responsibility: [
            'Plan and prioritize product feature backlog and development for the product.',
            'Defines, develop, and manages product vision, strategies, and roadmaps.',
            'Assess value, develop cases, and prioritize stories, epics, and features to ensure work focuses on those with maximum value that are aligned with product strategy.',
            'Provide backlog management, iteration planning, and elaboration of the user stories.',
            'Providing vision and direction to the Agile development team and stakeholders throughout the project.',
            'Support the Operation team in onboarding new candidates.',
            'Translate business requirements to the development team to enable the creation of actionable tasks.',
            "Writing user stories from the user's perspective will be an important point to showcase.",
            'Lead the scrum team in using Agile methodology and scrum practices.',
            'Take ownership of product success.'
        ],
        requiredQualification: [
            "Bachelor's degree required or equivalent experience.",
            'Minimum 3 years experience as a product owner in the industry.',
            'Strong knowledge of Agile principles and processes; CSPO is nice to have.',
            'In-depth understanding of industry market conditions and trends.',
            'Outstanding verbal and written communication skills',
            'Successful track record of developing products within deadlines.',
            'Excellent attention to detail.',
            'Sharp analytical and problem-solving skills.',
            'Creative and innovative thinker.'
        ],
        salaryReview: 'Yearly',
        festivalBonus: 2
    },
    {
        id: 3,
        title: 'Mentor and Software Engineer Assistant for (Java, Python and NodeJs)',
        jobType: 'Part Time',
        location: 'Remote',
        stack: ['Java', 'Python', 'JavaScript', 'NodeJs', 'Django'],
        thumbnail: '/images/graphics-designer.png',
        open: true,
        slug: 'mentor&assistant',
        jobDescription: 'TS4U Ltd. is looking for some experienced & skilled software engineers to be mentor and software engineer assistant to join our team.',
        vacancy: '7-10',
        // officeHours: '7:00 AM to 4:00 PM',
        salary: 'Negotiable',
        responsibility: [
            'Design the e2e course modules and chapters for Java, Python, NodeJs',
            'Design classed for each chapter.',
            'Lead workshop, classes, and provide group and 1:1 mentoring.',
            'Prepare job market profile and make dynamic contents.',
            'Provide interview prepreation guideline and resume review.',
            'Provide mock interview assistance and review interview recorded videos.',
            'Develop class labs, data, and enhance class contents.',
            "Provide core training on Java, Python, Nodejs",
            'Review course plans and provide feedback.',
            'Educate students about their new benefits and answer any questions they may have',
            'Escalate problems or concerns to the appropriate supervisor, and check in with students to ensure their questions have been fully answered',
            'Update students information',
            'Provide student enrollment guideline and onboarding',
            'Review student day to day 1:1 chat, day to day activities, accept meeting, provide technical support',
            'Assist with software installation, configuration, workshop update, workshop upload',
            'Prepare workshop contents, slide, documents, and provide information as needed',
            'Take mock interview after a student complete the course',
            'Prepare interview contents and provide job readiness assistance',
            'Prepare webinar contents and review with lead mentor'
        ],
        requiredQualification: [
            "Bachelor's degree required or equivalent experience in software development.",
            'Minimum 3 years experience as a software developer for mentor position.',
            'Strong knowledge of Software development lifecycle.',
            'In-depth understanding of industry market conditions and trends.',
            'Outstanding verbal and written communication skills',
            'Successful track record of developing products within deadlines.',
            'Sharp analytical and problem-solving skills.',
            'Creative and innovative thinker.'
        ],
        // salaryReview: 'Yearly',
        // festivalBonus: 2
    },
    {
        id: 4,
        title: 'Mid-Level Graphic Designer with Video Design Experience',
        jobType: 'Full Time',
        location: 'Dhaka, Bangladesh',
        stack: ['Canva', 'Photoshop', 'Illustrator', 'After Effects'],
        thumbnail: '/images/online-marketer.png',
        open: true,
        slug: 'graphics-designer',
        jobDescription: "TS4U is looking for a mid-level Graphic Designer with video design experience to join our creative team. You will work on various projects in this role, including branding, marketing materials, and video content. We're looking for a talented and ambitious designer who is passionate about design and has a strong desire to create visually stunning work.",
        vacancy: '1',
        // officeHours: '7:00 AM to 4:00 PM',
        salary: 'Negotiable',
        responsibility: [
            'Design and create visually stunning graphics, including logos, brochures, social media graphics, and more.',
            'Design and create video content, including animations, explainer videos, and promotional videos.',
            'Collaborate with the marketing team to develop and execute creative concepts and design solutions that align with brand guidelines.',
            'Stay up-to-date with industry trends and technologies to bring fresh, innovative ideas.',
            'Manage multiple projects and meet tight deadlines.'
        ],
        requiredQualification: [
            "2-3 years of graphic design experience focusing on video design.",
            'Strong portfolio showcasing your design skills, focusing on video design.',
            'Proficient in Adobe Creative Suite (Photoshop, Illustrator, After Effects, Premiere, etc.)',
            'Strong attention to detail and ability to multitask.',
            'Outstanding verbal and written communication skills',
            'Successful track record of developing products within deadlines.',
            'Sharp analytical and problem-solving skills.',
            'Creative and innovative thinker.',
            'Ability to work in a fast-paced environment and manage multiple projects at once.',
            'A positive attitude and a willingness to learn and grow as a designer.'
        ],
        // salaryReview: 'Yearly',
        // festivalBonus: 2
    },
    {
        id: 5,
        title: 'Mid-Level SEO Expert',
        jobType: 'Full Time',
        location: 'Dhaka, Bangladesh',
        stack: ['SEO Monitor', 'On-page SEO optimization', 'Google Analytics'],
        thumbnail: '/images/online-marketer.png',
        open: true,
        slug: 'seo-expert',
        jobDescription: "TS4U is looking for an experienced and results-driven Mid-Level SEO expert to join our team. The ideal candidate will have a strong understanding of SEO best practices and be able to develop and implement effective SEO strategies to drive organic traffic and increase website visibility.",
        vacancy: '1',
        // officeHours: '7:00 AM to 4:00 PM',
        salary: 'Negotiable',
        responsibility: [
            'Conduct keyword research and analysis to identify high-value target keywords',
            'Optimize website content and meta tags for SEO Monitor and analyze website traffic and search engine rankings',
            'Stay up-to-date with the latest SEO trends and algorithms',
            'Collaborate with cross-functional teams to drive SEO success',
            'Provide regular reports on SEO performance and make recommendations for improvement'
        ],
        requiredQualification: [
            "Experience in SEO, with a focus on mid-level strategies",
            'Strong understanding of SEO best practices, including on-page optimization, link building, and content optimization',
            'Experience with SEO tools such as Google Analytics, Ahrefs, SEMrush, and Moz',
            'Proven track record of increasing organic traffic and website visibility',
            'Outstanding verbal and written communication skills',
            'Strong and sharp analytical and problem-solving skills',
            'Creative and innovative thinker.',
            'Ability to work in a fast-paced environment and manage multiple projects at once.',
            'A positive attitude and a willingness to learn and grow as a designer.'
        ],
        // salaryReview: 'Yearly',
        // festivalBonus: 2
    },
    {
        id: 5,
        title: 'Junior Front-End Developer',
        jobType: 'Full Time',
        location: 'Dhaka, Bangladesh',
        stack: ['JavaScript', 'ReactJs', 'NextJs', 'Redux'],
        thumbnail: '/images/frontend.png',
        open: true,
        slug: 'front-end-developer',
        jobDescription: "TS4U Ltd. is looking for energetic and proactive Front-End Developer to be a part of our development team, supporting established projects and creating from the ground up. The ideal candidate will be tasked with developing easily scalable, responsive, and detailed front-end features.",
        vacancy: '1',
        // officeHours: '7:00 AM to 4:00 PM',
        salary: 'Negotiable',
        keySkills: [
            'Working as a part of a dynamic team to deliver winning products.',
            'Excellent knowledge of ReactJs, NextJs, Redux',
            'Experience with fundamentals such as HTML, CSS, and frameworks.',
            'Experience in working with JSON and REST API (a good understanding of how to build and consume REST APIs is required)',
            'Excellent knowledge of Design patterns and front-end technologies - HTML5, CSS3 and SASS',
            'Experience with browser testing and debugging.',
            'Knowledge of browser APIs, DOM, asynchronous programming.',
            'Troubleshooting and debugging to optimize the performance of the application.',
            'Led the design, creation, and implementation of a software suite.',
            'Knowledge of SEO principles',
            'Experience in state management library with Redux.',
            'Experience in Object Oriented Programming and Functional Programming.',
            'Component design libraries like Ant Design and Material UI.'
        ],
        responsibility: [
            'Writing efficient, reusable, testable, and scalable code.',
            'Support the team in planning, execution, implementation, deployment, and maintaining the code',
            'Developing Frontend components to enhance performance and receptiveness, client-side logic, and platform, highly responsive web applications',
            'Work as an assistant with the Lead Engineer',
            'Testing and debugging applications with debugging tools',
            'Upgrading our existing applications',
            'Enhancing the functionalities of our existing applications'
        ],
        // salaryReview: 'Yearly',
        // festivalBonus: 2
    },

    {
        id: 6,
        title: 'Lead Generation Intern',
        jobType: 'Full Time',
        location: 'Dhaka, Bangladesh',
        stack: ['Collecting Leads', 'Marketing', 'Operating Meeting'],
        thumbnail: '/images/lead-generation.png',
        open: true,
        slug: 'lead-generation-intern',
        jobDescription: "TS4U is looking for a Lead Generation Intern. The ideal candidate will be tasked with collecting our leads that generate from various marketing sources.",
        vacancy: '1',
        // officeHours: '7:00 AM to 4:00 PM',
        salary: '20000 BDT',
        // keySkills: [
        // ],
        responsibility: [
            'You will collect our leads that generate from various marketing sources; we have a central location to bulk upload them (all is done, you collect and upload).',
            'You will reach out to leads and set up a specific time for the meeting so that our enrollment lead can meet everyone and provide the guideline for our bootcamp',
            'Guide each lead to join our trial program',
            'Work with the operation team to learn best practices',
            'Collaborate with the operation team to ensure the meetings at the specific time that you have set up',
            'Open to learning American culture and how people work, and their standard',
            'Open to learning our partner process',
            'Typing speed more than 60 (English typing, willing to know if you type slowly)',
            'Life-changing bonus, if you want to grow outside of your work hours, we will provide you specific bootcamp access based on your interest. Our bootcamp fees are from $10000 to $20000.',
            'Open for feedback and grow from your feedback',
            'Attention to details',
            'Ok to make mistakes (new mistake) but avoid the repetitive mistake',
            'Be curious and have a mindset to own your areas of responsibilities'

        ],
        duration: '6 months',
        preferable: 'Female, Fluent in English writing, and Smart Learner!',
        possibility: 'You can be full-time and permanent at TS4U LTD. based on your performance, feedback, and how soon you can own the lead generation area.',
        numberOfDays: 6,
        numberOfHours: 'Flexible (2-shifts)'
        // salaryReview: 'Yearly',
        // festivalBonus: 2
    },
    // {
    //     id: 2,
    //     title: 'Front End Developer',
    //     jobType: 'Full Time',
    //     location: 'Dhaka, Bangladesh',
    //     stack: ['ReactJs', 'NextJs', 'Redux'],
    //     thumbnail: '/career/web-developer.png',
    //     open: false,
    //     slug: 'front-end-developer'
    // }

    {
        id: 7,
        title: 'Lead Generation Specialist',
        jobType: 'Full Time',
        location: 'Dhaka, Bangladesh',
        stack: ['Lead Generation', 'Marketing Strategy', 'Operating Meeting'],
        thumbnail: '/images/lead-generation.png',
        open: true,
        slug: 'lead-generation-specialist',
        jobDescription: "We seek a highly motivated and experienced Lead Generation Specialist to join our team. The Lead Generation Specialist will be responsible for pre-enrollment and post-enrollment lead generation activities and will work closely with the marketing team to achieve the company's revenue goals.",
        vacancy: '1',
        officeHours: '7:00 AM to 4:00 PM',
        salary: 'Negotiable',
        requiredQualification: [
            "Bachelor's degree in Marketing, Business, or a related field",
            '1-2 years of experience in lead generation or a similar role',
            'Excellent communication and interpersonal skills',
            'Strong understanding of digital marketing channels and techniques',
            'Proficient in using marketing tools',
            'Ability to work independently and as part of a team',
            'Strong analytical and problem-solving skills',
            'Results-oriented with a focus on achieving goals and objectives',
        ],
        responsibility: [
            'Develop and execute a lead generation strategy to attract potential customers for our bootcamp programs.',
            'Identify and research potential customers, including individuals, and maintain a contacts database.',
            'Use various marketing channels to reach out to potential customers, including email marketing, sms marketing, social media, and digital advertising.',
            'Planning for engaging content and marketing campaigns to generate interest in our programs',
            'Build relationships with potential customers through effective communication and follow-up.',
            'Qualify leads and provide information about our programs to help potential customers make informed decisions.',
            'Collaborate with the sales team to provide support and ensure a smooth transition from lead generation to enrollment.',
            'Track and report on the effectiveness of lead generation activities, making adjustments as needed to optimize results'
        ],
        salaryReview: 'Yearly',
        festivalBonus: 2
    },

    {
        id: 8,
        title: 'MERN Stack Developer',
        jobType: 'Full Time',
        location: 'Dhaka, Bangladesh',
        stack: ['MERN', 'Full Stack', 'Frontend', 'Backend'],
        thumbnail: '/images/web-developer.png',
        open: true,
        slug: 'mern-stack-developer',
        jobDescription: "TS4U Ltd. is looking for energetic and proactive individuals to be a part of our development team, supporting established projects and creating from the ground up. The ideal candidate is an experienced leader and team player adept at front-end and back-end development.",
        vacancy: '1',
        officeHours: '7:00 AM to 4:00 PM',
        salary: 'Negotiable',
        requiredQualification: [
            "Proven experience as a MERN stack developer or similar role",
            'Strong understanding of JavaScript, HTML, and CSS.',
            'Experience with React.js, Node.js, MongoDB, and Express.js',
            'Experience with version control tools like Git',
            'Strong problem-solving and analytical skills',
            'Excellent written and verbal communication skills',
            'Ability to work independently and as part of a team',
            'Experience with agile development methodologies',
            'Experience with front-end technologies like Redux, Ant Design, SASS',
            'Familiarity with testing frameworks like Jest',
            'Experience with CI/CD tools like Jenkins'
        ],
        responsibility: [
            'Design and develop web applications using MongoDB, Express.js, React, and Node.js',
            'Develop and maintain RESTful APIs using Node.js and Express.js',
            'Design and develop responsive and dynamic user interfaces using React.js',
            'Implement data models and schemas using MongoDB',
            'Write clean, maintainable, and scalable code that follows best practices and standards.',
            'Debug and troubleshoot code issues, and provide timely solutions',
            'Work with version control tools like Git and continuously integrate and deploy code using tools like Jenkins or Travis CI',
            'Participate in code reviews and provide feedback to other developers',
            'Stay up-to-date with emerging trends and technologies in the MERN stack',
            'Write clear technical documentation for other team members and stakeholders'
        ],
        keySkills: [
            'Strong programming skills in JavaScript and Node.js',
            'Excellent understanding of the MERN stack and its components',
            'Strong knowledge of database design and management',
            'Ability to write clean, maintainable, and scalable code',
            'Excellent problem-solving and analytical skills',
            'Strong communication and collaboration skills',
        ],
        salaryReview: 'Yearly',
        festivalBonus: 2
    },

    {
        id: 9,
        title: 'QA Automation Engineer',
        jobType: 'Full Time',
        location: 'Dhaka, Bangladesh',
        stack: ['QA Methodologies', 'Selenium', 'Quality Assurance'],
        thumbnail: '/images/web-developer.png',
        open: true,
        slug: 'qa-automation-engineer',
        jobDescription: "We are looking for a Software development engineer in test to automate tests within complex projects to ensure product quality and also who can assist the mentors in preparing and providing the contents of the bootcamp. Responsibilities include designing and implementing tests, debugging, and defining corrective actions. You will also review system requirements and track quality assurance metrics. This role plays an integral part in our company’s product development process.",
        vacancy: '1',
        officeHours: '7:00 AM to 4:00 PM',
        salary: 'Negotiable',
        requiredQualification: [
            "Experience in developing automated tests using selenium web driver and RESTAssured to use the Java programming language.",
            'Proven work experience in software quality assurance, especially web applications and mobile applications',
            'Hands-on experience with automated testing tools (Selenium, Maven, TestNG, Cucumber, and JUnit)',
            'Hands-on solid work experience in API Automation through Postman and RestAssured.',
            'Good knowledge of CICD through Jenkins and GitLab or GitHub.',
            'Strong knowledge of standard web application technologies',
            'Strong knowledge of software QA methodologies, tools, and processes',
            'Experience in writing clear, concise, and comprehensive test plans and test cases',
            'Attention to detail to analyze user story',
            'Open to learning and identifying areas where you require optimization of the process, tools, and technology.',
            'Open to learn another stake like JavaScript and Python for the test automation'
        ],
        responsibility: [
            'Review requirements, specifications, and technical design documents to provide timely and meaningful feedback',
            'Create detailed, comprehensive, and well-structured test plans and test cases.',
            'Estimate, prioritize, plan, and coordinate testing activities',
            'Design, develop and execute automation scripts',
            'Identify, record, track and documents the bugs',
            'Perform thorough regression testing when bugs are resolved',
            'Develop and apply testing processes for new and existing features to meet client needs',
            'Assist the mentors who lead the SDET workshop',
            'Prepare documentation or slides based on the contents before the workshop',
            'Make sure the content is ready for delivery',
            'Join the workshops on time',
            'Support the students to solve their issues by setting up a meeting with them.',
            'Prepare the technical questions and review the submitted answers from the students.',
            'Stay up to date with new testing tools and test strategies.'
        ],
        salaryReview: 'Yearly',
        festivalBonus: 2
    },
    {
        id: 9,
        title: 'CloudOps Mentor Assistant',
        jobType: 'Full Time',
        location: 'Dhaka, Bangladesh',
        stack: ['DevOps', 'CloudOps', 'AWS', 'Linux'],
        thumbnail: '/images/web-developer.png',
        open: true,
        slug: 'devops-mentor-assistant',
        jobDescription: "We are looking for a DevOps Mentor Assistant to join our team and help support our mentorship program for aspiring DevOps engineers. The ideal candidate will be an experienced DevOps professional passionate about teaching and mentoring. If you are a DevOps professional passionate about teaching and mentoring, we would love to hear from you. This is an exciting opportunity to help shape the future of DevOps by guiding the next generation of engineers. Apply now and join our team!",
        vacancy: '1',
        officeHours: '7:00 AM to 4:00 PM',
        salary: 'Negotiable',
        requiredQualification: [
            "We don’t care if you have any Technical certifications, but if you have any, that’ll also be considered",
            'Strong English spoken & written capability, communication skills, and self-learning attitude',
            'Good analytical and problem-solving skills',
            'Some experience in Web development/architecture, Cloud Platforms (Any), and Microservices will be a plus.',
            'Good understanding of DevOps work scope, DevOps Tools (Git and GitHub, Jenkins/GitLab CI(or Any), Docker, Kubernetes, Puppet/Chef/Ansible)',
            'Experience in real-world version control systems and server automation, including CI/CD, will be a plus.'
        ],
        responsibility: [
            'Primarily act as a Mentor Assistant in CloudOps/DevOps Bootcamp',
            'Assist in designing, developing, and implementing the mentorship program for aspiring DevOps engineers.',
            'Mentor and guide mentees in their DevOps learning journey and provide feedback to ensure their progress',
            'Collaborate with the mentorship team to continuously improve and evolve the program.',
            'Keep up-to-date with the latest trends and technologies in the DevOps industry and share knowledge with mentees',
            'Help Bootcamp members with their issues and support them in solving their tasks and problems.',
            'Work with the mentorship team to identify potential areas for improvement in the program and implement changes as necessary.',
            'Prepare questionnaires based on the Bootcamp workshops to practice',
            'Prepare quizzes based on the Bootcamp workshops to test the members',
            'Run ShowNTells on specific topics based on Bootcamp workshops',
            'Engage in workshops and ShowNTells done by members',
            'Participate in boot camps arranged by the organization',
            'Prepare the environment and Implement integrations as per the requirement',
            'Develop scripts to deploy and automate visualization',
            'Design procedures for system troubleshooting and maintenance',
            'Deploy updates and fixes to existing environments',
            'Build tools to reduce occurrences of errors and improve deployment systems',
            'Perform root cause analysis for production errors',
            'Investigate and resolve technical issues on existing deployments.'
        ],
        salaryReview: 'Yearly',
        festivalBonus: 2
    },
    {
        id: 10,
        title: 'DevOps Mentor Assistant',
        jobType: 'Full Time',
        location: 'Dhaka, Bangladesh',
        stack: ['DevOps', 'CloudOps', 'AWS', 'Linux'],
        thumbnail: '/images/frontend.png',
        open: false,
        slug: 'devops-mentor-assistant-intern',
        jobDescription: "We are looking for a DevOps Mentor Assistant(Intern) to join our team and help support our mentorship program for aspiring DevOps engineers. The ideal candidate will be an aspirant DevOps enthusiast who is passionate about teaching and mentoring. If you are passionate about teaching and mentoring, we would love to hear from you. This is an exciting opportunity to help shape the future of DevOps by guiding the next generation of engineers as well as growing yourself as a DevOps Engineer working here with our mentors. Apply now and join our team!",
        vacancy: '1',
        officeHours: '7:00 AM to 4:00 PM',
        salary: 'Negotiable',
        requiredQualification: [
            "We don’t care if you have any Technical certifications, but if you have any, that’ll also be considered",
            'Strong English spoken & written capability, communication skills, and self-learning attitude',
            'Good analytical and problem-solving skills',
            'Some experience in Web development/architecture, Cloud Platforms (Any), and Microservices will be a plus.',
            'Good understanding of DevOps work scope, DevOps Tools (Git and GitHub, Jenkins/GitLab CI(or Any), Docker, Kubernetes, Puppet/Chef/Ansible)',
            'Experience in real-world version control systems and server automation, including CI/CD, will be a plus.',
            'Recent Computer Science graduates are preferred to apply but if you’re confident about yourself then we’re happy to work with you[ Most of our engineers and mentors are not from CS background ;) ].'
        ],
        responsibility: [
            'Primarily act as a Mentor Assistant in CloudOps/DevOps Bootcamp',
            'Assist in designing, developing, and implementing the mentorship program for aspiring DevOps engineers.',
            'Mentor and guide mentees in their DevOps learning journey and provide feedback to ensure their progress',
            'Collaborate with the mentorship team to continuously improve and evolve the program.',
            'Keep up-to-date with the latest trends and technologies in the DevOps industry and share knowledge with mentees',
            'Help Bootcamp members with their issues and support them in solving their tasks and problems.',
            'Work with the mentorship team to identify potential areas for improvement in the program and implement changes as necessary.',
            'Prepare questionnaires based on the Bootcamp workshops to practice',
            'Prepare quizzes based on the Bootcamp workshops to test the members',
            'Run ShowNTells on specific topics based on Bootcamp workshops',
            'Engage in workshops and ShowNTells done by members',
            'Participate in boot camps arranged by the organization',
        ],
        salaryReview: 'Yearly',
        festivalBonus: 2
    },
    {
        id: 11,
        title: 'Business Support Analyst',
        jobType: 'Hybrid',
        // location: 'Dhaka, Bangladesh',
        stack: ['Business Support', 'Analyst', 'Administrative Support'],
        thumbnail: '/images/frontend.png',
        open: true,
        slug: 'business-support-analyst',
        jobDescription: "TS4U is looking for six months Intern to hire a role as Business Support Analyst. We will teach you if you’re open.",
        vacancy: '4',
        // officeHours: '7:00 AM to 4:00 PM',
        salary: '10000 to 12000 BDT',
        requiredQualification: [
            "SSC or under HSC or going undergraduate is also fine but the below requirements will be assessed throughout the interview."
        ],
        responsibility: [
            'Fluent in English writing, speaking, and listening. ',
            'Good computer typing speed.',
            'Open to learning new business applications.',
            'Fluent in google drive (Word, Excel, and PowerPoint).',
            'taking notes from conversation.',
            'Other administrative support activities.',
        ],
        salaryReview: 'Yearly',
        festivalBonus: 2,
        hiringProccess: [
            'Complete technical assessment.',
            'Group or 1:1 chat 5 to 10 min to assess.',
            'Email several times to determine your email skills.',
            'Go through interview after submission of your resume.',
        ],
    },
    {
        id: 12,
        title: 'Business & Marketing Specialist',
        jobType: 'Full Time',
        location: 'Dhaka, Bangladesh',
        stack: ['Create Marketing Materials', 'Conduct Market Research'],
        thumbnail: '/images/online-marketer.png',
        open: true,
        slug: 'business-marketing-specialist',
        jobDescription: "TS4U is looking  highly motivated and creative Junior Marketing Specialist to join our team. The ideal candidate will be responsible for assisting with the development and execution of marketing strategies to promote our brand, products, and services. The Junior Marketing Specialist will work closely with the Marketing Manager to help drive sales and engagement across various channels, including email, social media, advertising, and events.",
        vacancy: '1',
        // officeHours: '7:00 AM to 4:00 PM',
        salary: 'Negotiable',
        requiredQualification: [
            "Strong written and verbal communication skills.",
            "Highly organized with strong attention to detail.",
            "Experience with social media marketing and email marketing.",
            "Basic knowledge of digital marketing tools, such as Google Analytics and AdWords.",
            "Ability to work independently and as part of a team.",
            "Creativity and willingness to think outside the box."
        ],
        responsibility: [
            'Assist in the development and implementation of marketing plans and strategies.',
            'Collaborate with the Marketing Manager to create and execute promotional campaigns across various channels.',
            'Conduct market research to identify new opportunities and trends.',
            'Assist with the creation of marketing materials such as social media posts, email campaigns, and digital ads.',
            'Monitor and report on the performance of marketing campaigns, making recommendations for optimization.',
            'Help coordinate and execute events, including trade shows and product launches.',
        ],
        salaryReview: 'Yearly',
        festivalBonus: 2,
    },
];

export default tsData;