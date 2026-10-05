import type { ReactNode } from "react";

export type LegalSection = { id: string; title: string; content: ReactNode };
export type LegalDocument = { title: string; updatedAt: string; notice?: ReactNode; sections: LegalSection[] };

// Content only, transcribed from https://www.attentionfactory.io/legal/privacy-policy
export const privacyPolicy: LegalDocument = { title: "Privacy Policy", updatedAt: "22 August 2026", sections: [
{ id: "introduction", title: "Introduction", content: <>
<p>{"Attention Factory (“Attention Factory,” “we,” “us,” or “our”) respects your privacy and is committed to protecting the Personal Data entrusted to us."}</p>
<p>{"This Privacy Policy explains how we collect, use, disclose, store, protect, and otherwise process Personal Data when you visit our website, participate in our training programmes, attend our workshops or events, engage our advisory or consulting Services, communicate with us, or otherwise interact with Attention Factory."}</p>
<p>{"Attention Factory combines Artificial Intelligence with human ingenuity to help teams and leaders solve critical problems faster and work more effectively."}</p>
<p>{"We put people first by building on existing strengths, processes, and working models while leveraging AI tools and systems to amplify productivity, engagement, and performance."}</p>
<p>{"This Privacy Policy should be read together with our Terms of Use and any other applicable contractual terms."}</p>
</> },
{ id: "information-we-collect", title: "1. Information we collect", content: <>
<p>{"Depending on how you interact with Attention Factory, we may collect:"}</p>
<h3>{"1.1 Identity and Contact Information"}</h3>
<p>{"This may include:"}</p>
<ul><li>{"Name;"}</li><li>{"Email address;"}</li><li>{"Telephone number;"}</li><li>{"Organisation or employer;"}</li><li>{"Job title or professional role;"}</li><li>{"Business address; and"}</li><li>{"Other contact information you voluntarily provide."}</li></ul>
<h3>{"1.2 Account and Registration Information"}</h3>
<p>{"Where applicable, we may collect:"}</p>
<ul><li>{"Username;"}</li><li>{"Account information;"}</li><li>{"Program registration information;"}</li><li>{"Course participation information;"}</li><li>{"Attendance records;"}</li><li>{"Certification or completion information; and"}</li><li>{"Other information necessary to administer our Services."}</li></ul>
<h3>{"1.3 Training and Program Information"}</h3>
<p>{"When you participate in our Services, we may collect information relating to:"}</p>
<ul><li>{"Training attendance;"}</li><li>{"Workshop participation;"}</li><li>{"Questions and responses;"}</li><li>{"Assignments and exercises;"}</li><li>{"Feedback;"}</li><li>{"Assessments;"}</li><li>{"Learning progress;"}</li><li>{"Programme preferences; and"}</li><li>{"Other information voluntarily provided during participation."}</li></ul>
<h3>{"1.4 Client and Business Information"}</h3>
<p>{"Where we provide Services to an organisation, we may process information relating to:"}</p>
<ul><li>{"Business processes;"}</li><li>{"Organisational structures;"}</li><li>{"Workflows;"}</li><li>{"Business objectives;"}</li><li>{"AI adoption requirements;"}</li><li>{"Operational challenges;"}</li><li>{"Internal systems;"}</li><li>{"Productivity and performance information; and"}</li><li>{"Other information necessary to provide the agreed Services."}</li></ul>
<h3>{"1.5 AI Inputs and Materials"}</h3>
<p>{"Depending on the Services provided, you may voluntarily submit:"}</p>
<ul><li>{"Prompts;"}</li><li>{"Questions;"}</li><li>{"Documents;"}</li><li>{"Files;"}</li><li>{"Text;"}</li><li>{"Data;"}</li><li>{"Images;"}</li><li>{"Business information;"}</li><li>{"Workflow information; and"}</li><li>{"Other materials for use in AI training, demonstrations, consulting, or implementation activities."}</li></ul>
<p>{"Users should not submit sensitive or confidential information to third-party AI systems unless they have confirmed that such use is appropriate and authorised."}</p>
</> },
{ id: "how-we-use-personal-data", title: "2. How we use Personal Data", content: <>
<p>{"Attention Factory may use Personal Data to:"}</p>
<ul><li>{"Provide and administer our Services;"}</li><li>{"Register participants for program;"}</li><li>{"Deliver AI training and education;"}</li><li>{"Provide consulting, advisory, and AI enablement Services;"}</li><li>{"Communicate with users and clients;"}</li><li>{"Manage events and workshops;"}</li><li>{"Process payments;"}</li><li>{"Monitor program participation;"}</li><li>{"Improve our Services;"}</li><li>{"Develop educational resources;"}</li><li>{"Understand how users interact with our Services;"}</li><li>{"Maintain security;"}</li><li>{"Detect fraud, abuse, or unauthorised activity;"}</li><li>{"Respond to enquiries and requests;"}</li><li>{"Conduct research and analysis;"}</li><li>{"Comply with applicable laws and regulations; and"}</li><li>{"Protect the rights, property, and safety of Attention Factory, our users, clients, and third parties."}</li></ul>
</> },
{ id: "ai-training-and-user-data", title: "3. AI training and user data", content: <>
<p>{"Because Attention Factory provides AI education and enablement Services, participants may interact with AI systems during training, workshops, consultations, or other engagements."}</p>
<p>{"Where AI tools are used, information submitted to those tools may be processed by the relevant third-party provider in accordance with that provider's terms and privacy policy."}</p>
<p>{"Attention Factory does not control the privacy practices of third-party AI providers."}</p>
<p>{"Before submitting Personal Data, confidential information, proprietary business information, or other sensitive information to a third-party AI tool, you should review the relevant provider's terms and privacy practices and ensure that you have the appropriate authority to submit such information."}</p>
</> },
{ id: "legal-basis-for-processing", title: "4. Legal basis for processing", content: <>
<p>{"Where applicable, Attention Factory processes Personal Data on one or more lawful bases recognised under applicable data protection laws, including:"}</p>
<ul><li>{"Performance of a contract;"}</li><li>{"Compliance with legal obligations;"}</li><li>{"Consent;"}</li><li>{"Legitimate interests; and"}</li><li>{"Other lawful bases permitted under applicable law."}</li></ul>
<p>{"Where consent is required, we will obtain it before processing Personal Data."}</p>
</> },
{ id: "sharing-of-personal-data", title: "5. Sharing of Personal Data", content: <>
<p>{"Attention Factory may share Personal Data where reasonably necessary with:"}</p>
<ul><li>{"Employees and authorised personnel;"}</li><li>{"Trainers, instructors, facilitators, and consultants;"}</li><li>{"Technology and infrastructure providers;"}</li><li>{"Website and hosting providers;"}</li><li>{"Payment processors;"}</li><li>{"Communications providers;"}</li><li>{"Analytics providers;"}</li><li>{"Event and program partners;"}</li><li>{"Professional advisers;"}</li><li>{"Contractors and service providers;"}</li><li>{"Affiliates, where applicable; and"}</li><li>{"Government authorities, regulators, law enforcement agencies, courts, or other persons where required or permitted by law."}</li></ul>
<p>{"We may also disclose Personal Data in connection with a merger, acquisition, financing, restructuring, sale of assets, reorganisation, or other corporate transaction involving Attention Factory."}</p>
<p>{"We will seek to ensure that third parties receiving Personal Data process it in accordance with applicable legal and contractual requirements."}</p>
</> },
{ id: "international-data-transfers", title: "6. International data transfers", content: <>
<p>{"Attention Factory may use service providers located in Nigeria, the United States, or other jurisdictions."}</p>
<p>{"As a result, Personal Data may be transferred to or processed in jurisdictions outside the country in which you reside."}</p>
<p>{"Where required by applicable law, Attention Factory will implement appropriate safeguards for international transfers of Personal Data."}</p>
</> },
{ id: "data-retention", title: "7. Data retention", content: <>
<p>{"We retain Personal Data only for as long as reasonably necessary for the purposes for which it was collected, including to:"}</p>
<ul><li>{"Provide Services;"}</li><li>{"Maintain business and transaction records;"}</li><li>{"Meet legal and regulatory requirements;"}</li><li>{"Resolve disputes;"}</li><li>{"Enforce agreements; and"}</li><li>{"Protect our legitimate interests."}</li></ul>
<p>{"Retention periods may vary depending on the type and nature of the information."}</p>
</> },
{ id: "data-security", title: "8. Data security", content: <>
<p>{"Attention Factory is committed to protecting the privacy, security, and confidentiality of Personal Data."}</p>
<p>{"We implement reasonable technical, administrative, physical, and organisational safeguards designed to protect Personal Data against:"}</p>
<ul><li>{"Unauthorised access;"}</li><li>{"Unauthorised disclosure;"}</li><li>{"Loss;"}</li><li>{"Destruction;"}</li><li>{"Alteration;"}</li><li>{"Misuse; and"}</li><li>{"Other unlawful processing."}</li></ul>
<p>{"Security measures may include access controls, confidentiality obligations, secure storage, encryption where appropriate, network security measures, and other reasonable security practices."}</p>
<p>{"However, no method of transmission over the internet or electronic storage system can be guaranteed to be completely secure."}</p>
</> },
{ id: "your-privacy-rights", title: "9. Your privacy rights", content: <>
<p>{"Subject to applicable law, you may have rights to:"}</p>
<ul><li>{"Request access to your Personal Data;"}</li><li>{"Request correction of inaccurate information;"}</li><li>{"Request deletion of Personal Data;"}</li><li>{"Request restriction of processing;"}</li><li>{"Object to certain processing activities;"}</li><li>{"Request portability of Personal Data where applicable;"}</li><li>{"Withdraw consent where processing is based on consent; and"}</li><li>{"Lodge a complaint with the relevant data protection authority."}</li></ul>
<p>{"Requests may be submitted using the contact information provided below."}</p>
</> },
{ id: "cookies-and-analytics", title: "10. Cookies and analytics", content: <>
<p>{"Our website and digital Services may use cookies, analytics tools, and similar technologies to:"}</p>
<ul><li>{"Maintain website functionality;"}</li><li>{"Understand website usage;"}</li><li>{"Improve user experience;"}</li><li>{"Analyse traffic and engagement; and"}</li><li>{"Support security and performance."}</li></ul>
<p>{"Where required by applicable law, we will obtain appropriate consent for the use of non-essential cookies and similar technologies."}</p>
</> },
{ id: "children-s-privacy", title: "11. Children's privacy", content: <>
<p>{"Our Services are generally intended for adults and professional users."}</p>
<p>{"We do not knowingly collect Personal Data from children in circumstances where such collection is prohibited by applicable law."}</p>
<p>{"Where a program is specifically designed for younger participants, appropriate safeguards and consent requirements will apply."}</p>
</> },
{ id: "marketing-and-communications", title: "12. Marketing and communications", content: <>
<p>{"Where permitted by applicable law, Attention Factory may send communications relating to:"}</p>
<ul><li>{"Program;"}</li><li>{"Training opportunities;"}</li><li>{"Workshops;"}</li><li>{"Events;"}</li><li>{"Educational resources;"}</li><li>{"New Services; and"}</li><li>{"Other relevant business or educational information."}</li></ul>
<p>{"Where required, you may opt out of marketing communications by following the unsubscribe instructions in the relevant communication or contacting us directly."}</p>
<p>{"You may continue to receive essential administrative or transactional communications where necessary."}</p>
</> },
{ id: "photographs-recordings-and-testimonials", title: "13. Photographs, recordings, and testimonials", content: <>
<p>{"Attention Factory may photograph or record certain events, workshops, training sessions, or programs for administrative, educational, archival, or promotional purposes."}</p>
<p>{"Where required by applicable law, we will obtain appropriate consent before using identifiable photographs, recordings, or testimonials for promotional purposes."}</p>
<p>{"Participants may contact us where they have concerns regarding the use of their image or recording."}</p>
</> },
{ id: "third-party-websites-and-services", title: "14. Third-party websites and services", content: <>
<p>{"Our website or Services may contain links to third-party websites, applications, or platforms."}</p>
<p>{"Attention Factory is not responsible for the privacy practices, security, content, or policies of third-party services."}</p>
<p>{"We encourage users to review the privacy policies of third-party platforms before providing them with Personal Data."}</p>
</> },
{ id: "business-transactions", title: "15. Business transactions", content: <>
<p>{"If Attention Factory is involved in a merger, acquisition, financing, restructuring, reorganisation, sale of assets, or similar transaction, Personal Data may be transferred as part of that transaction where permitted by applicable law."}</p>
<p>{"Where required, appropriate safeguards and notices will be provided."}</p>
</> },
{ id: "data-breaches-and-security-incidents", title: "16. Data breaches and security incidents", content: <>
<p>{"If Attention Factory becomes aware of a Personal Data breach or security incident affecting Personal Data, we will take reasonable steps to investigate, contain, mitigate, and remediate the incident."}</p>
<p>{"Where required by applicable law, we will notify affected individuals and/or relevant regulatory authorities within the applicable timeframe."}</p>
<p>{"If you become aware of a suspected security vulnerability or unauthorised access relating to our Services, please notify us promptly."}</p>
</> },
{ id: "changes-to-this-privacy-policy", title: "17. Changes to this Privacy Policy", content: <>
<p>{"Attention Factory may update this Privacy Policy from time to time."}</p>
<p>{"Where material changes are made, we may notify users by updating the effective date, publishing the revised Privacy Policy, or providing other appropriate notice where required by law."}</p>
<p>{"You should review this Privacy Policy periodically to remain informed about how we process Personal Data."}</p>
</> },
{ id: "governing-law", title: "18. Governing law", content: <>
<p>{"This Privacy Policy shall be governed by the applicable laws of the Federal Republic of Nigeria, including applicable Nigerian data protection and privacy legislation."}</p>
<p>{"Where mandatory data protection laws provide additional rights or protections, those rights shall apply notwithstanding anything inconsistent in this Privacy Policy."}</p>
</> },
{ id: "contact-us", title: "19. Contact us", content: <>
<p>{"For questions, requests, complaints, or concerns regarding this Privacy Policy or the processing of your Personal Data, please contact:"}</p>
<p>{"Attention Factory —"}{" "}<a href="mailto:hello@attentionfactory.io">{"hello@attentionfactory.io"}</a></p>
</> },
] };
// Content only, transcribed from https://www.attentionfactory.io/legal/terms-of-service
export const termsOfService: LegalDocument = { title: "Terms of Use", updatedAt: "22 August 2026", sections: [
{ id: "introduction", title: "Introduction", content: <>
<p>{"Welcome to Attention Factory."}</p>
<p>{"These Terms of Use (“Terms”) govern your access to and use of Attention Factory's websites, training programs, workshops, courses, consulting and advisory services, AI enablement programs, educational resources, events, digital platforms, tools, materials, and other services provided by Attention Factory (collectively, the “Services”)."}</p>
<p>{"These Terms constitute a legally binding agreement between you (“User,” “Participant,” “Client,” “you,” or “your”) and Attention Factory (“Attention Factory,” “we,” “us,” or “our”)."}</p>
<p>{"By accessing or using our Services, registering for a program, participating in a training session, engaging our services, or accessing our materials, you acknowledge that you have read, understood, and agreed to these Terms."}</p>
<p>{"If you do not agree to these Terms, you should not use the Services."}</p>
</> },
{ id: "about-attention-factory", title: "1. About Attention Factory", content: <>
<p>{"Attention Factory combines the power of Artificial Intelligence with human ingenuity to help teams and leaders solve critical problems faster and work more effectively."}</p>
<p>{"We put people first, building on existing strengths, processes, and working models while leveraging the latest AI tools and systems to amplify productivity, engagement, and performance."}</p>
<p>{"Our goal is simple: empower people with AI to achieve more, faster."}</p>
<p>{"Attention Factory provides AI education, training, enablement, advisory, workshops, consulting, and related services designed to help individuals, teams, leaders, organisations, and businesses understand and effectively use AI in their work."}</p>
<p>{"Our Services may include:"}</p>
<ul><li>{"AI education and literacy;"}</li><li>{"AI navigation and practical AI training;"}</li><li>{"AI tool discovery and adoption;"}</li><li>{"Prompting and effective interaction with AI systems;"}</li><li>{"AI-assisted research and analysis;"}</li><li>{"AI-assisted productivity and workflow improvement;"}</li><li>{"AI-enabled business processes;"}</li><li>{"Human-AI collaboration;"}</li><li>{"AI strategy and implementation support;"}</li><li>{"AI adoption and workforce enablement;"}</li><li>{"AI governance and responsible AI awareness;"}</li><li>{"AI safety and risk awareness;"}</li><li>{"AI-powered creativity and problem-solving;"}</li><li>{"AI automation and workflow optimisation;"}</li><li>{"Leadership and organisational AI enablement; and"}</li><li>{"Other AI-related educational, advisory, and professional services."}</li></ul>
<p>{"The specific Services provided to a User or Client may be governed by additional proposals, statements of work, engagement letters, program terms, or other agreements."}</p>
</> },
{ id: "our-human-first-approach", title: "2. Our human-first approach", content: <>
<p>{"Attention Factory's Services are designed around the principle that AI should amplify human capability rather than replace human judgment and responsibility."}</p>
<p>{"Our program and engagements may involve the use of AI tools, systems, models, automation technologies, and other emerging technologies."}</p>
<p>{"However, AI tools are used as instruments to support human decision-making, creativity, productivity, and problem-solving."}</p>
<p>{"Users remain responsible for applying appropriate human judgment when using AI-generated information, recommendations, analyses, or Outputs."}</p>
</> },
{ id: "eligibility", title: "3. Eligibility", content: <>
<p>{"You must be at least eighteen (18) years old, or the minimum age required to lawfully use the relevant Service in your jurisdiction, whichever is higher."}</p>
<p>{"Where a particular program or Service is specifically designed for younger participants, participation may be permitted subject to applicable parental or guardian consent requirements."}</p>
<p>{"If you access the Services on behalf of an organisation, you represent that you have authority to accept these Terms on behalf of that organisation."}</p>
</> },
{ id: "registration-and-account-responsibility", title: "4. Registration and account responsibility", content: <>
<p>{"Certain Services may require registration or creation of an account."}</p>
<p>{"You agree to provide accurate, complete, and current information and to update such information where necessary."}</p>
<p>{"Where an account is required, you are responsible for:"}</p>
<ul><li>{"Maintaining the confidentiality of your account credentials;"}</li><li>{"All activities conducted through your account;"}</li><li>{"Not sharing restricted account access with unauthorised persons; and"}</li><li>{"Promptly notifying Attention Factory of unauthorised access or suspected security incidents."}</li></ul>
<p>{"Attention Factory may suspend or terminate accounts containing materially false, misleading, incomplete, or inaccurate information."}</p>
</> },
{ id: "ai-education-training-and-enablement", title: "5. AI education, training and enablement", content: <>
<p>{"Attention Factory provides practical education and enablement designed to help people understand, navigate, and use AI effectively."}</p>
<p>{"Our Services may include demonstrations, workshops, exercises, practical assignments, consultations, simulations, case studies, assessments, strategy sessions, and other learning or implementation activities."}</p>
<p>{"Participation in our Services does not guarantee:"}</p>
<ul><li>{"Employment;"}</li><li>{"Promotion or career advancement;"}</li><li>{"Increased income;"}</li><li>{"Business success;"}</li><li>{"Investment or funding;"}</li><li>{"A particular productivity improvement;"}</li><li>{"A specific financial return;"}</li><li>{"Mastery of a particular AI tool; or"}</li><li>{"Any other particular result."}</li></ul>
<p>{"Any examples, projections, testimonials, case studies, or statements concerning potential results are illustrative and do not constitute guarantees."}</p>
</> },
{ id: "ai-tools-and-third-party-services", title: "6. AI tools and third-party services", content: <>
<p>{"Attention Factory may demonstrate, recommend, integrate, or provide training relating to AI tools and third-party technology platforms."}</p>
<p>{"Such platforms may include AI assistants, generative AI systems, productivity applications, research tools, automation platforms, software applications, and other emerging technologies."}</p>
<p>{"Unless expressly stated otherwise, these platforms are not owned or controlled by Attention Factory."}</p>
<p>{"Third-party services are subject to their own terms, policies, pricing, availability, and privacy practices."}</p>
<p>{"Attention Factory is not responsible for:"}</p>
<ul><li>{"Changes to third-party platforms;"}</li><li>{"Suspension or discontinuation of third-party services;"}</li><li>{"Third-party content;"}</li><li>{"Third-party privacy practices;"}</li><li>{"Third-party security;"}</li><li>{"The accuracy of third-party AI Outputs; or"}</li><li>{"Losses resulting from reliance on or use of third-party services."}</li></ul>
</> },
{ id: "ai-inputs-and-outputs", title: "7. AI inputs and outputs", content: <>
<p>{"As part of the Services, Users may provide prompts, documents, data, files, questions, instructions, or other materials to AI systems (“Inputs”)."}</p>
<p>{"AI systems may generate text, analysis, recommendations, images, code, summaries, research, or other materials (“Outputs”)."}</p>
<p>{"Inputs and Outputs may collectively be referred to as “Materials.”"}</p>
<p>{"Users are responsible for:"}</p>
<ul><li>{"The legality and accuracy of their Inputs;"}</li><li>{"Having all necessary rights and permissions to submit Inputs;"}</li><li>{"Ensuring that Inputs do not infringe third-party rights; and"}</li><li>{"Reviewing and verifying Outputs before relying upon them."}</li></ul>
<p>{"AI Outputs may be inaccurate, incomplete, biased, outdated, or unsuitable for a particular purpose."}</p>
<p>{"Users should therefore apply appropriate human judgment and independent verification."}</p>
</> },
{ id: "use-of-ai-for-professional-decisions", title: "8. Use of AI for professional decisions", content: <>
<p>{"Attention Factory's Services are intended to support human productivity and decision-making."}</p>
<p>{"AI-generated Outputs should not be treated as a substitute for qualified professional advice."}</p>
<p>{"Users must independently verify AI-generated information before using it as the basis for legal, medical, financial, investment, regulatory, employment, or other high-stakes decisions."}</p>
<p>{"Attention Factory does not guarantee the accuracy, completeness, reliability, legality, or suitability of AI-generated Outputs."}</p>
</> },
{ id: "acceptable-use", title: "9. Acceptable use", content: <>
<p>{"You agree to use the Services lawfully, responsibly, and in accordance with these Terms."}</p>
<p>{"You must not use the Services to:"}</p>
<ul><li>{"Violate applicable laws or regulations;"}</li><li>{"Infringe intellectual property, privacy, confidentiality, or other rights;"}</li><li>{"Generate or distribute unlawful, fraudulent, abusive, deceptive, or harmful content;"}</li><li>{"Harass, threaten, intimidate, or discriminate against others;"}</li><li>{"Gain unauthorised access to Attention Factory's systems;"}</li><li>{"Interfere with the security, availability, or operation of the Services;"}</li><li>{"Introduce malware, viruses, or malicious code;"}</li><li>{"Impersonate another person or organisation;"}</li><li>{"Scrape or systematically collect information without authorisation;"}</li><li>{"Reverse engineer proprietary Attention Factory systems or materials;"}</li><li>{"Reproduce or commercially exploit restricted training materials without permission;"}</li><li>{"Share paid or restricted materials with unauthorised persons; or"}</li><li>{"Use the Services for unlawful or harmful purposes."}</li></ul>
<p>{"Attention Factory may suspend or terminate access where these Terms are violated."}</p>
</> },
{ id: "intellectual-property", title: "10. Intellectual property", content: <>
<p>{"Attention Factory and its licensors retain all rights, title, and interest in materials and intellectual property made available through the Services, including:"}</p>
<ul><li>{"Training materials;"}</li><li>{"Presentations;"}</li><li>{"Course content;"}</li><li>{"Frameworks;"}</li><li>{"Methodologies;"}</li><li>{"Templates;"}</li><li>{"Workbooks;"}</li><li>{"Guides;"}</li><li>{"Videos;"}</li><li>{"Written materials;"}</li><li>{"Designs;"}</li><li>{"Logos;"}</li><li>{"Trademarks;"}</li><li>{"Website content; and"}</li><li>{"Other proprietary materials."}</li></ul>
<p>{"Subject to these Terms, Attention Factory grants Users a limited, non-exclusive, non-transferable, revocable licence to access and use applicable materials for their intended personal or internal organisational purposes."}</p>
<p>{"You may not, without prior written permission:"}</p>
<ul><li>{"Copy or reproduce proprietary materials;"}</li><li>{"Sell or sublicense them;"}</li><li>{"Publish or distribute them;"}</li><li>{"Upload them to unauthorised platforms;"}</li><li>{"Create competing products or training programs substantially based on them; or"}</li><li>{"Represent them as your own."}</li></ul>
<p>{"Nothing in these Terms transfers ownership of Attention Factory's intellectual property."}</p>
</> },
{ id: "user-materials-and-user-content", title: "11. User materials and user content", content: <>
<p>{"Users may provide documents, data, information, prompts, processes, materials, or other content to Attention Factory (“User Materials” or “User Content”)."}</p>
<p>{"The User retains ownership of its pre-existing materials."}</p>
<p>{"You represent that you have the necessary rights and authority to provide such materials to Attention Factory."}</p>
<p>{"Attention Factory will use User Materials and User Content only as reasonably necessary to provide the relevant Services, subject to applicable agreements and our Privacy Policy."}</p>
<p>{"Attention Factory will not knowingly use confidential User Materials for unrelated commercial purposes without appropriate authorisation."}</p>
</> },
{ id: "confidentiality", title: "12. Confidentiality", content: <>
<p>{"Each party may receive confidential or proprietary information belonging to the other party."}</p>
<p>{"Confidential Information includes non-public business information, processes, strategies, customer information, technical information, trade secrets, financial information, and other information reasonably understood to be confidential."}</p>
<p>{"A receiving party shall:"}</p>
<ul><li>{"Keep Confidential Information confidential;"}</li><li>{"Use it only for the purpose for which it was disclosed;"}</li><li>{"Not disclose it to unauthorised third parties; and"}</li><li>{"Take reasonable measures to protect it from unauthorised access or disclosure."}</li></ul>
<p>{"Confidentiality obligations shall not apply to information that:"}</p>
<ul><li>{"Is publicly available without breach;"}</li><li>{"Was lawfully known before disclosure;"}</li><li>{"Is independently developed; or"}</li><li>{"Must be disclosed by law or valid legal process."}</li></ul>
<p>{"Where a separate confidentiality or non-disclosure agreement exists between the parties, that agreement shall govern the relevant Confidential Information."}</p>
</> },
{ id: "data-protection-and-privacy", title: "13. Data protection and privacy", content: <>
<p>{"Your use of the Services is also governed by the Attention Factory"}{" "}<a href="/privacy-policy">{"Privacy Policy"}</a>{"."}</p>
</> },
{ id: "fees-and-payment", title: "14. Fees and payment", content: <>
<p>{"Where Services are provided for a fee, applicable charges will be communicated through the relevant proposal, invoice, registration page, statement of work, engagement letter, or other applicable document."}</p>
<p>{"Fees must be paid in accordance with the agreed payment terms."}</p>
<p>{"Attention Factory may suspend Services where undisputed amounts remain unpaid beyond the applicable payment period."}</p>
<p>{"Unless otherwise agreed in writing, fees paid for completed Services are non-refundable."}</p>
</> },
{ id: "cancellation-and-rescheduling", title: "15. Cancellation and rescheduling", content: <>
<p>{"Attention Factory may modify, postpone, reschedule, or cancel a program, training session, workshop, or engagement where reasonably necessary."}</p>
<p>{"This may occur due to technical difficulties, instructor or facilitator availability, insufficient registration, security concerns, regulatory requirements, force majeure, or other circumstances beyond our reasonable control."}</p>
<p>{"Where appropriate, Attention Factory may provide an alternative date, replacement session, credit, or refund in accordance with the applicable program or engagement terms."}</p>
</> },
{ id: "service-availability", title: "16. Service availability", content: <>
<p>{"Attention Factory continually develops and improves its Services."}</p>
<p>{"We may:"}</p>
<ul><li>{"Add or remove features;"}</li><li>{"Update training content;"}</li><li>{"Change instructors or facilitators;"}</li><li>{"Modify delivery methods;"}</li><li>{"Introduce new AI tools or technologies;"}</li><li>{"Suspend certain Services; or"}</li><li>{"Restrict access to particular Services."}</li></ul>
<p>{"We do not guarantee uninterrupted or error-free availability."}</p>
</> },
{ id: "disclaimer", title: "17. Disclaimer", content: <>
<p>{"TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICES ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS."}</p>
<p>{"ATTENTION FACTORY DOES NOT GUARANTEE THAT:"}</p>
<ul><li>{"AI-GENERATED INFORMATION WILL ALWAYS BE ACCURATE;"}</li><li>{"AI TOOLS WILL ALWAYS BE AVAILABLE;"}</li><li>{"THIRD-PARTY AI SYSTEMS WILL OPERATE WITHOUT ERRORS;"}</li><li>{"TRAINING MATERIALS WILL ALWAYS BE COMPLETE OR CURRENT;"}</li><li>{"AI WILL PRODUCE A PARTICULAR RESULT; OR"}</li><li>{"USE OF THE SERVICES WILL PRODUCE A PARTICULAR BUSINESS, FINANCIAL, PROFESSIONAL, OR PRODUCTIVITY OUTCOME."}</li></ul>
<p>{"The Services are intended to augment human capability and decision-making, not replace professional judgment."}</p>
</> },
{ id: "limitation-of-liability", title: "18. Limitation of liability", content: <>
<p>{"TO THE MAXIMUM EXTENT PERMITTED BY LAW, ATTENTION FACTORY AND ITS AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, CONTRACTORS, INSTRUCTORS, PARTNERS, AND SERVICE PROVIDERS SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES ARISING FROM OR RELATING TO:"}</p>
<ul><li>{"Use of the Services;"}</li><li>{"Reliance on AI-generated Outputs;"}</li><li>{"Use of third-party AI tools;"}</li><li>{"Service interruptions;"}</li><li>{"Loss of data; or"}</li><li>{"Other matters arising from the Services."}</li></ul>
<p>{"Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited."}</p>
</> },
{ id: "indemnification", title: "19. Indemnification", content: <>
<p>{"You agree to indemnify and hold harmless Attention Factory, its affiliates, directors, officers, employees, contractors, instructors, partners, and service providers from claims, losses, liabilities, damages, costs, and expenses arising from:"}</p>
<ul><li>{"Your breach of these Terms;"}</li><li>{"Your misuse of the Services;"}</li><li>{"Your violation of applicable law;"}</li><li>{"Your infringement of third-party rights; or"}</li><li>{"Materials submitted by you that infringe the rights of another person."}</li></ul>
</> },
{ id: "suspension-and-termination", title: "20. Suspension and termination", content: <>
<p>{"Attention Factory may suspend or terminate access where:"}</p>
<ul><li>{"You breach these Terms;"}</li><li>{"Your conduct creates a risk to Attention Factory or another person;"}</li><li>{"Your use is unlawful;"}</li><li>{"You misuse proprietary materials;"}</li><li>{"You disrupt a program or community; or"}</li><li>{"Suspension is required by law."}</li></ul>
<p>{"Provisions relating to intellectual property, confidentiality, privacy, liability, indemnification, and governing law shall survive termination where applicable."}</p>
</> },
{ id: "governing-law-and-dispute-resolution", title: "21. Governing law and dispute resolution", content: <>
<p>{"These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria."}</p>
<p>{"Any dispute arising from or relating to these Terms or the Services shall, subject to any applicable contractual dispute resolution mechanism, be submitted to the competent courts of Nigeria."}</p>
<p>{"Nothing in this clause prevents Attention Factory from seeking urgent or interim relief where necessary to protect its intellectual property, Confidential Information, Personal Data, systems, or other legitimate interests."}</p>
</> },
{ id: "changes-to-these-terms", title: "22. Changes to these Terms", content: <>
<p>{"Attention Factory may amend these Terms from time to time."}</p>
<p>{"Updated Terms may be published on our website or communicated through the Services."}</p>
<p>{"The revised Terms shall become effective on the date specified in the updated version."}</p>
<p>{"Continued use of the Services after the effective date constitutes acceptance of the revised Terms, to the extent permitted by law."}</p>
</> },
{ id: "severability", title: "23. Severability", content: <>
<p>{"If any provision of these Terms is determined to be invalid or unenforceable, that provision shall be modified to the minimum extent necessary to make it enforceable, and the remaining provisions shall continue in full force and effect."}</p>
<p>{"Attention Factory —"}{" "}<a href="mailto:hello@attentionfactory.io">{"hello@attentionfactory.io"}</a></p>
</> },
] };
