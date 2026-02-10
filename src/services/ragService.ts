// RAG Service for Portfolio Chatbot
// This service indexes portfolio content and performs semantic search

export interface Document {
  id: string;
  content: string;
  metadata: {
    section: string;
    title?: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// Portfolio knowledge base - Real portfolio content
const portfolioKnowledge: Document[] = [
  {
    id: '1',
    content: 'I am an Electronics and Communication Engineering student at Aditya College Of Engineering And Technology, Surampalem, currently in my B.Tech program (2023-2027) with a CGPA of 7.75. I have strong interest in Cloud Computing and Backend Development. I completed my Intermediate (MPC) from Pragati Junior College, Prathipadu (2021-2023) with GPA of 7.76. I have hands-on experience with AWS services, serverless architectures, and infrastructure automation using Terraform. I am adaptable to new environments with a problem-solving mindset and eagerness to learn.',
    metadata: { section: 'about', title: 'About Me & Education' }
  },
  {
    id: '2',
    content: 'My technical skills include: Programming & Data - Python, NumPy, Data Structures, Algorithms. Cloud & DevOps - AWS EC2, S3, Lambda, DynamoDB, RDS, Load Balancer, Auto Scaling, SageMaker, Terraform. Web & Data - Web Scraping, API Development. Tools & Platforms - Git, GitHub, VS Code, Linux. Problem Solving - LeetCode (100+ problems), GeeksForGeeks (100+ problems), CodeChef, HackerRank. Databases - DynamoDB, RDS, SQL. I am proficient in cloud computing, backend development, and problem-solving.',
    metadata: { section: 'skills', title: 'Technical Skills' }
  },
  {
    id: '3',
    content: 'HireFusion Project: A comprehensive AWS-powered platform that processes resumes and interview videos using AI services. Features automated workflows, real-time visualization, and intelligent analysis. Tech stack: AWS Lambda, S3, Textract, Rekognition, Transcribe, Comprehend, DynamoDB, API Gateway, CloudWatch, Python. Key highlights: Designed AWS Lambda functions for resume and video processing, Automated workflows using S3 Event Notifications and SNS, Stored analysis results in DynamoDB with API Gateway exposure. This was a collaborative team project with 6 members. GitHub: https://github.com/Godesivaramakrishna/HireFusionAI.git',
    metadata: { section: 'projects', title: 'HireFusion Project' }
  },
  {
    id: '4',
    content: 'Blood Donation Platform Project: A life-saving web application connecting blood donors with recipients in need. Features donor registration, blood type matching, and emergency request handling to facilitate life-saving donations. Tech stack: React, Node.js, MongoDB, Docker, Google Maps API, Google Cloud Run. Key highlights: User registration and authentication system, Blood type matching algorithm, Real-time donor availability tracking, Emergency blood request notifications. This was a solo project. GitHub: https://github.com/Godesivaramakrishna/blooddonation.git',
    metadata: { section: 'projects', title: 'Blood Donation Platform Project' }
  },
  {
    id: '5',
    content: 'I worked as a Cloud Development Intern at Technical Hub Private Limited, located at Aditya Group of Engineering Colleges from May 2025 to July 2025. During this internship, I worked on cloud-based development using AWS services such as EC2, S3, Lambda, and DynamoDB. I assisted in deployment workflows and basic infrastructure automation tasks. I gained hands-on exposure to real-time cloud environments and best practices. Key skills used: AWS EC2, S3, Lambda, DynamoDB, DevOps.',
    metadata: { section: 'experience', title: 'Work Experience' }
  },
  {
    id: '6',
    content: 'I have earned the Prompt Design in Vertex AI certification from Google Cloud, issued in 2024. This certification validates my expertise in AI prompt engineering and Google Cloud technologies. Credential link: https://www.credly.com/badges/1178ca1c-555b-4f01-8325-92ea53f08e66/public_url',
    metadata: { section: 'certifications', title: 'Certifications' }
  },
  {
    id: '7',
    content: 'I am very active on competitive programming platforms. LeetCode: username 23MH1A0424, solved 100+ problems (https://leetcode.com/u/23MH1A0424/). GeeksForGeeks: username goderaw5kh, solved 100+ problems (https://www.geeksforgeeks.org/profile/goderaw5kh). CodeChef: username gsrk_coder, 1 star coder (https://www.codechef.com/users/gsrk_coder). HackerRank: username goderaja288, 3 stars in Problem Solving, SQL, and Python, 2 stars in Java (https://www.hackerrank.com/profile/goderaja288). Total problems solved across all platforms: 200+ problems.',
    metadata: { section: 'coding-profiles', title: 'Coding Profiles' }
  },
  {
    id: '8',
    content: 'My key interests and focus areas are Cloud Computing and Backend Development. I am passionate about AWS services, serverless architectures, infrastructure automation using Terraform, problem-solving through competitive programming, and building scalable cloud-based applications.',
    metadata: { section: 'interests', title: 'Key Interests' }
  }
];

// Simple cosine similarity for text matching
function cosineSimilarity(text1: string, text2: string): number {
  const words1 = text1.toLowerCase().split(/\s+/);
  const words2 = text2.toLowerCase().split(/\s+/);
  
  const uniqueWords = Array.from(new Set([...words1, ...words2]));
  
  const vector1 = uniqueWords.map(word => words1.filter(w => w === word).length);
  const vector2 = uniqueWords.map(word => words2.filter(w => w === word).length);
  
  const dotProduct = vector1.reduce((sum, val, i) => sum + val * vector2[i], 0);
  const magnitude1 = Math.sqrt(vector1.reduce((sum, val) => sum + val * val, 0));
  const magnitude2 = Math.sqrt(vector2.reduce((sum, val) => sum + val * val, 0));
  
  return magnitude1 && magnitude2 ? dotProduct / (magnitude1 * magnitude2) : 0;
}

// Retrieve relevant documents based on query
export function retrieveRelevantDocs(query: string, topK: number = 3): Document[] {
  const scoredDocs = portfolioKnowledge.map(doc => ({
    doc,
    score: cosineSimilarity(query, doc.content)
  }));
  
  return scoredDocs
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map(item => item.doc);
}

// Generate context from retrieved documents
export function generateContext(docs: Document[]): string {
  return docs.map(doc => `[${doc.metadata.section}] ${doc.content}`).join('\n\n');
}

// Simple rule-based response for demo (replace with actual LLM API call)
export function generateRAGResponse(query: string, context: string): string {
  const lowerQuery = query.toLowerCase().trim();
  
  // General conversational responses
  if (lowerQuery === 'hi' || lowerQuery === 'hello' || lowerQuery === 'hey' || lowerQuery === 'hi!' || lowerQuery === 'hello!') {
    return `Hello! 👋 I'm here to help you learn more about this portfolio. Feel free to ask me about skills, projects, experience, education, certifications, or coding profiles!`;
  }
  
  if (lowerQuery.includes('how are you') || lowerQuery.includes('whats up') || lowerQuery.includes("what's up")) {
    return `I'm doing great, thanks for asking! 😊 I'm here to answer your questions about this portfolio. What would you like to know?`;
  }
  
  if (lowerQuery.includes('thank') || lowerQuery.includes('thanks')) {
    return `You're welcome! 😊 Feel free to ask if you have any other questions about the portfolio!`;
  }
  
  if (lowerQuery.includes('bye') || lowerQuery === 'goodbye') {
    return `Goodbye! 👋 Thanks for checking out the portfolio. Feel free to come back anytime if you have more questions!`;
  }
  
  if (lowerQuery.includes('help') || lowerQuery === '?') {
    return `I can help you learn about:\n\n💼 Skills & Technologies\n🎨 Projects (HireFusion, Blood Donation)\n👔 Work Experience\n🎓 Education Background\n🏆 Certifications\n💻 Coding Profiles (LeetCode, GFG, etc.)\n📧 Contact Information\n\nWhat would you like to know?`;
  }
  
  if (lowerQuery.includes('your name') || lowerQuery.includes('who made you')) {
    return `I'm an AI assistant built to help visitors learn about this portfolio! I use RAG (Retrieval-Augmented Generation) to provide accurate information. How can I help you today?`;
  }
  
  // Intent detection with specific responses
  
  // Programming languages
  if (lowerQuery.includes('programming language') || lowerQuery.includes('languages') || 
      (lowerQuery.includes('know') && (lowerQuery.includes('python') || lowerQuery.includes('java'))) ||
      (lowerQuery.includes('python') && lowerQuery.includes('java'))) {
    return `Yes! I'm proficient in Python - it's my primary programming language. I also know Java (2★ on HackerRank). I use Python for cloud development, AWS services, data structures, algorithms, and have experience with NumPy for data processing. Would you like to know more about my specific skills?`;
  }
  
  if (lowerQuery.includes('python')) {
    return `Yes, I'm proficient in Python! It's my primary programming language. I use it extensively for AWS Lambda functions, backend development, data structures, algorithms, and have experience with NumPy. I also have a 3★ rating in Python on HackerRank!`;
  }
  
  if (lowerQuery.includes('java')) {
    return `Yes, I know Java! I have a 2★ rating in Java on HackerRank. While Python is my primary language, I'm comfortable working with Java for various programming challenges.`;
  }
  
  // Coding general questions
  if ((lowerQuery.includes('about') || lowerQuery.includes('give')) && (lowerQuery.includes('coding') || lowerQuery.includes('competitive'))) {
    return `I'm active on multiple platforms with 200+ problems solved:\n\n🧩 LeetCode: 100+ problems (23MH1A0424)\n💻 GeeksForGeeks: 100+ problems (goderaw5kh)\n👨‍🍳 CodeChef: 1★ coder (gsrk_coder)\n🏆 HackerRank: 3★ in Problem Solving, SQL, Python | 2★ Java (goderaja288)\n\nCheck out the profiles section for links to all my coding profiles!`;
  }
  
  // Problems/Coding questions
  if (lowerQuery.includes('problem') && (lowerQuery.includes('solve') || lowerQuery.includes('done') || lowerQuery.includes('many'))) {
    if (lowerQuery.includes('leetcode')) {
      return `I have solved 100+ problems on LeetCode! My username is 23MH1A0424. You can check my profile at https://leetcode.com/u/23MH1A0424/`;
    }
    if (lowerQuery.includes('geeksforgeeks') || lowerQuery.includes('gfg')) {
      return `I have solved 100+ problems on GeeksForGeeks! My username is goderaw5kh. Check out my profile at https://www.geeksforgeeks.org/profile/goderaw5kh`;
    }
    return `I have solved 200+ problems across various platforms! 100+ on LeetCode, 100+ on GeeksForGeeks, plus CodeChef (1★) and HackerRank (3★ in Problem Solving, SQL, Python). I'm consistently practicing to improve my problem-solving skills!`;
  }
  
  // Interests
  if (lowerQuery.includes('interest') || lowerQuery.includes('passion') || lowerQuery.includes('focus')) {
    return `My key interests are Cloud Computing and Backend Development! I'm passionate about AWS services, serverless architectures, infrastructure automation using Terraform, and building scalable cloud-based applications. I also enjoy competitive programming to sharpen my problem-solving skills.`;
  }
  
  // Skills
  if (lowerQuery.includes('skill') || lowerQuery.includes('technology') || lowerQuery.includes('tech stack')) {
    return `My core skills include:\n\n🐍 Python, NumPy, DSA, Algorithms\n☁️ AWS (EC2, S3, Lambda, DynamoDB, RDS, SageMaker, Terraform)\n🌐 Web Scraping, API Development\n🛠️ Git, GitHub, VS Code, Linux\n💾 SQL, DynamoDB, RDS\n\nI specialize in cloud computing and backend development with strong problem-solving abilities!`;
  }
  
  // Projects
  if (lowerQuery.includes('project')) {
    if (lowerQuery.includes('hire') || lowerQuery.includes('fusion')) {
      return `HireFusion is an AWS-powered platform for resume and interview analysis! It uses Lambda, S3, Textract, Rekognition, Transcribe, Comprehend, and DynamoDB. I worked on this as part of a 6-member team. The platform automates candidate evaluation workflows. GitHub: https://github.com/Godesivaramakrishna/HireFusionAI.git`;
    }
    if (lowerQuery.includes('blood') || lowerQuery.includes('donation')) {
      return `The Blood Donation Platform connects blood donors with recipients in need! Built with React, Node.js, MongoDB, Docker, and Google Cloud Run. Features include donor registration, blood type matching, and emergency request notifications. GitHub: https://github.com/Godesivaramakrishna/blooddonation.git`;
    }
    return `I have two major projects:\n\n1️⃣ HireFusion - AWS-powered resume & interview analysis platform (team project)\n2️⃣ Blood Donation Platform - Life-saving donor connection system (solo project)\n\nBoth showcase my cloud expertise and problem-solving skills. Want to know more about a specific project?`;
  }
  
  // Experience
  if (lowerQuery.includes('experience') || lowerQuery.includes('work') || lowerQuery.includes('intern')) {
    return `I worked as a Cloud Development Intern at Technical Hub Private Limited (May 2025 - July 2025) at Aditya Group of Engineering Colleges. I gained hands-on experience with AWS services (EC2, S3, Lambda, DynamoDB), deployment workflows, infrastructure automation, and cloud best practices!`;
  }
  
  // Education
  if (lowerQuery.includes('education') || lowerQuery.includes('college') || lowerQuery.includes('degree')) {
    return `I'm pursuing B.Tech in Electronics and Communication Engineering from Aditya College Of Engineering And Technology, Surampalem (2023-2027) with CGPA 7.75. I completed my Intermediate (MPC) from Pragati Junior College, Prathipadu (2021-2023) with GPA 7.76.`;
  }
  
  // Certifications
  if (lowerQuery.includes('certification') || lowerQuery.includes('certificate')) {
    return `I have earned the "Prompt Design in Vertex AI" certification from Google Cloud (2024). This validates my expertise in AI prompt engineering and Google Cloud technologies. View credential: https://www.credly.com/badges/1178ca1c-555b-4f01-8325-92ea53f08e66/public_url`;
  }
  
  // Coding profiles
  if (lowerQuery.includes('coding profile') || lowerQuery.includes('competitive') || lowerQuery.includes('leetcode') || lowerQuery.includes('hackerrank') || lowerQuery.includes('codechef') || lowerQuery.includes('gfg')) {
    return `I'm active on multiple platforms with 200+ problems solved:\n\n🧩 LeetCode: 100+ problems (23MH1A0424)\n💻 GeeksForGeeks: 100+ problems (goderaw5kh)\n👨‍🍳 CodeChef: 1★ coder (gsrk_coder)\n🏆 HackerRank: 3★ in Problem Solving, SQL, Python | 2★ Java (goderaja288)\n\nCheck out the profiles section for links!`;
  }
  
  // AWS specific
  if (lowerQuery.includes('aws') || lowerQuery.includes('cloud')) {
    return `I have strong AWS expertise! I work with EC2, S3, Lambda, DynamoDB, RDS, Load Balancer, Auto Scaling, SageMaker, and Terraform for infrastructure automation. I gained practical experience through my cloud development internship and projects like HireFusion that leverage multiple AWS services.`;
  }
  
  // AWS specific
  if (lowerQuery.includes('aws') || (lowerQuery.includes('amazon') && lowerQuery.includes('web'))) {
    return `I have strong AWS expertise! I work with EC2, S3, Lambda, DynamoDB, RDS, Load Balancer, Auto Scaling, SageMaker, and Terraform for infrastructure automation. I gained practical experience through my cloud development internship and projects like HireFusion that leverage multiple AWS services.`;
  }
  
  if (lowerQuery.includes('cloud')) {
    return `Cloud Computing is one of my key interests! I have hands-on experience with AWS services (EC2, S3, Lambda, DynamoDB, RDS, SageMaker), infrastructure automation using Terraform, and completed a Cloud Development Internship. I've built cloud-based projects like HireFusion that use serverless architectures.`;
  }
  
  // Database questions
  if (lowerQuery.includes('database') || lowerQuery.includes('sql')) {
    return `I work with both SQL and NoSQL databases! I have experience with AWS RDS (relational databases), DynamoDB (NoSQL), and SQL queries. I also have a 3★ rating in SQL on HackerRank!`;
  }
  
  // Tools and frameworks
  if (lowerQuery.includes('tools') || lowerQuery.includes('git') || lowerQuery.includes('github')) {
    return `I use Git and GitHub for version control, VS Code as my primary IDE, and have experience with Linux. For cloud infrastructure, I use Terraform for automation. I'm also familiar with Docker and various AWS tools.`;
  }
  
  if (lowerQuery.includes('react') || lowerQuery.includes('node') || lowerQuery.includes('mongodb')) {
    return `Yes! I used React, Node.js, and MongoDB in my Blood Donation Platform project. It's a full-stack web application deployed on Google Cloud Run with Docker. The tech stack includes React for frontend, Node.js for backend, MongoDB for database, and Google Maps API for location features.`;
  }
  
  // Contact
  if (lowerQuery.includes('contact') || lowerQuery.includes('reach') || lowerQuery.includes('email') || lowerQuery.includes('hire')) {
    return `You can reach out through the contact section of this portfolio! I'm available for opportunities, collaborations, internships, or just a chat about technology. Feel free to send a message!`;
  }
  
  // About
  if (lowerQuery.includes('about') || lowerQuery.includes('who are you') || lowerQuery.includes('tell me about yourself') || lowerQuery.includes('introduce')) {
    return `I'm an ECE student at Aditya College with a strong passion for Cloud Computing and Backend Development! I have hands-on experience with AWS services, completed a cloud development internship, built real-world projects, and solved 200+ coding problems. I'm eager to learn and adapt to new technologies!`;
  }
  
  // Terraform
  if (lowerQuery.includes('terraform') || lowerQuery.includes('infrastructure')) {
    return `Yes, I use Terraform for infrastructure automation and Infrastructure as Code (IaC)! I gained hands-on experience with Terraform during my cloud development internship, where I worked on automating AWS infrastructure deployments.`;
  }
  
  // Backend/API questions
  if (lowerQuery.includes('backend') || lowerQuery.includes('api')) {
    return `Backend Development is one of my core interests! I have experience with API Development, working with AWS Lambda for serverless backends, Node.js, and API Gateway. I've built RESTful APIs and worked on backend services in both my projects and internship.`;
  }
  
  // Default response using context
  const relevantInfo = context.substring(0, 300);
  return `${relevantInfo}${context.length > 300 ? '...' : ''}\n\nFeel free to ask me about skills, projects, experience, education, certifications, or coding profiles!`;
}

// Main RAG query function
export async function queryRAG(userQuery: string): Promise<string> {
  try {
    // Step 1: Retrieve relevant documents
    const relevantDocs = retrieveRelevantDocs(userQuery, 3);
    
    // Step 2: Generate context from documents
    const context = generateContext(relevantDocs);
    
    // Step 3: Generate response (in production, call LLM API here)
    const response = generateRAGResponse(userQuery, context);
    
    return response;
  } catch (error) {
    console.error('Error in RAG query:', error);
    return 'Sorry, I encountered an error. Please try again or contact me directly through the contact section.';
  }
}

// Optional: Function to integrate with actual LLM API (OpenAI, etc.)
export async function queryWithLLM(userQuery: string, apiKey?: string): Promise<string> {
  if (!apiKey) {
    return queryRAG(userQuery);
  }
  
  try {
    const relevantDocs = retrieveRelevantDocs(userQuery, 3);
    const context = generateContext(relevantDocs);
    
    // Example OpenAI API call structure
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are a helpful assistant for a portfolio website. Use the following context to answer questions about the portfolio:\n\n${context}`
          },
          {
            role: 'user',
            content: userQuery
          }
        ],
        temperature: 0.7,
        max_tokens: 200
      })
    });
    
    if (!response.ok) {
      throw new Error('API request failed');
    }
    
    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling LLM API:', error);
    return queryRAG(userQuery);
  }
}
