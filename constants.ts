
import type { Question, ScoringLevel } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 'Q1',
    title: 'Name of tool and brief description of the tool.',
    wordLimit: 1000,
    weighting: 4,
    keyPoints: [
      'Purpose/use of the tool',
      'Features',
      'Relevance'
    ]
  },
  {
    id: 'Q2',
    title: 'Please name the AI model for this tool.',
    description: 'Please explain how the model and training data fits the purpose of this project and how the data aligns with relevant legislation.',
    wordLimit: 1000,
    weighting: 12,
    keyPoints: [
      'Fined-tune or proprietary trained models',
      'Capabilities and limitation of the model',
      'Reasoning/intelligence level',
      'Data the model was trained on',
      'Data alignment with relevant legislation',
      'Difference in data used in training the model.',
      'How the model was trained.',
      'Model\'s input and output',
      'Model\'s integration requirement'
    ]
  },
  {
    id: 'Q3',
    title: 'Please explain how the model fit the purpose of this project.',
    description: 'Please explain the potential benefits and the likelihood of these benefits being realised in practice; as well the strength of available evidence supporting your assessment.',
    wordLimit: 1000,
    weighting: 12,
    keyPoints: [
      'Delivering better quality outcome.',
      'Reducing processing time',
      'Generation financial efficiency and savings',
      'AI capabilities that could be used or adopted by other departments',
      'Future innovation'
    ]
  },
  {
    id: 'Q4',
    title: 'What potential risk does the AI model has on planning decision - Community Benefit.',
    wordLimit: 1000,
    weighting: 12,
    keyPoints: [
      'Potential physical, psychological, and environmental harm',
      'Social equality',
      'Impact on right, privileges or entitlements',
      'Incorrect advice or guidance',
      'Potential erosion of community trust',
      'Community understanding of system\'s decision',
      'Other harm on community benefit'
    ]
  },
  {
    id: 'Q5',
    title: 'What potential risk does the AI model has on planning decision - Fairness.',
    wordLimit: 1000,
    weighting: 12,
    keyPoints: [
      'Incomplete or inaccurate data',
      'Fairness indicators',
      'Issues of diversity and inclusion',
      'Potential bias of the model (gender, minority groups, others)',
      'Monitoring and adjusting fairness level',
      'Addressing errors and bias in the model',
      'Representation level'
    ]
  },
  {
    id: 'Q6',
    title: 'What potential risk does the AI model has on planning decisions - Privacy and Security.',
    wordLimit: 1000,
    weighting: 12,
    keyPoints: [
      'Sensitive data including Children, Religious individuals, Racial and ethnically diverse individuals',
      'Political associations, Trade union associations',
      'Gender/sexual information',
      'Criminal records',
      'Health or genetic information',
      'Biometric information',
      'Sensitive Personal data',
      'Information consent',
      'Privacy and security measures',
      'Data protection'
    ]
  },
  {
    id: 'Q7',
    title: 'What potential risk does the AI model has on planning decisions - Transparency.',
    wordLimit: 1000,
    weighting: 12,
    keyPoints: [
      'Level of transparency',
      'Documentation of tool\'s design, development and deployment',
      'Users feedback mechanism',
      'Black box principle/explainability',
      'Traceability',
      'Public access',
      'Overreliance on technical experts'
    ]
  },
  {
    id: 'Q8',
    title: 'What potential risk does the AI model has on planning decisions - Accountability.',
    wordLimit: 1000,
    weighting: 12,
    keyPoints: [
      'Level of accountability regarding decision.',
      'Procedure for appealing model\'s decision',
      'Performance metrics and reporting mechanism',
      'Auditability of the model',
      'Responsibility of tool\'s decision?'
    ]
  },
  {
    id: 'Q9',
    title: 'Overall mitigation strategy.',
    wordLimit: 1000,
    weighting: 12,
    keyPoints: [
      'Data governance',
      'Monitoring and performance',
      'Model update and maintenance',
      'Transparency, explainability and auditing',
      'Residual risk',
      'Level of human oversight',
      'Technical mitigation strategies',
      'Operational mitigation strategies',
      'Reliability and stability of the AI model'
    ]
  }
];

export const SCORING_KEY: ScoringLevel[] = [
  { level: 'Excellent', description: 'An excellent response in terms of the level of detail, accuracy and relevance. The level of information provided is comprehensive and evidences strongly an assurance as to the tool\'s capability to deliver the project successfully. The response raises no concerns and has no information deficiencies.', score: 5 },
  { level: 'Very Good', description: 'A very good response in terms of the level of detail, accuracy and relevance. The information submitted provides significant evidence of the ability of the tool to deliver the project successfully. However, the response does include a small number of minor informational deficiencies. The response raises no concerns regarding the tool\'s ability.', score: 4 },
  { level: 'Good', description: 'A good response in terms of the level of detail, accuracy and relevance. The information provides good evidence of the ability of the tool to deliver the project successfully; but does raise minor concerns and/or includes deficiencies around some of the information provided in the response. Does not raise any fundamental concerns regarding the tool\'s ability.', score: 3 },
  { level: 'Acceptable', description: 'An acceptable response submitted in terms of the level of detail, accuracy and relevance. Answer provides an average level of evidence as to the tool\'s capability. The response raises some concerns and/or includes a significant number of informational deficiencies. Does not raise any fundamental concerns regarding the tool\'s ability.', score: 2 },
  { level: 'Poor', description: 'A response that is inadequate or only partially addresses the question. Response provides only limited evidence as to the capabilities of the tool to deliver the project successfully. Raises a large number of concerns and/or includes a large number of informational deficiencies. Does not raise any fundamental concerns regarding the tool\'s ability.', score: 1 },
  { level: 'Unacceptable / Not answered', description: 'Question not answered - and / or - Response to the question significantly deficient - and / or - raises fundamental concerns regarding the ability of the tool to successfully deliver. Answer does not provide satisfactory evidence as to the capability of the tool to deliver successfully.', score: 0 }
];
