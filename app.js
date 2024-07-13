const { useState } = React;

const Alert = ({ children, className }) => (
    <div className={`bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 ${className}`} role="alert">
        {children}
    </div>
);

const AlertTitle = ({ children }) => (
    <h3 className="font-bold">{children}</h3>
);

const AlertDescription = ({ children }) => (
    <p>{children}</p>
);

const questions = [
    {
        question: "What is the typical pattern of mature whitetail antler development?",
        choices: [
            "A branched main beam with multiple forks",
            "An unbranched main beam with 3-7 points arising from the top",
            "A spiral-shaped main beam with points all around",
            "A flat, palmate structure similar to moose antlers"
        ],
        correctAnswer: 1,
        explanation: "The typical pattern of mature whitetail antler development is an unbranched main beam that normally develops from three to seven (or more) points arising from the top of the main beam. (How to Score North American Big Game, p. 121)"
    },
    {
        question: "Which of the following is considered an abnormal point on a whitetail deer rack?",
        choices: [
            "A point arising from the top of the main beam",
            "The brow tine (G-1)",
            "A point arising from the side of the main beam",
            "The main beam tip"
        ],
        correctAnswer: 2,
        explanation: "Points arising from the sides, top inside edge, or bottom of the main beam are considered abnormal points on a whitetail deer rack. (How to Score North American Big Game, p. 125)"
    },
    {
        question: "How many circumference measurements are always taken on whitetail antlers?",
        choices: [
            "2",
            "3",
            "4",
            "5"
        ],
        correctAnswer: 2,
        explanation: "Four and only four circumferences are always taken on whitetails regardless of the number of normal points. (How to Score North American Big Game, p. 129)"
    },
    {
        question: "Where is the H-1 circumference measurement taken?",
        choices: [
            "At the burr",
            "At the narrowest place between the burr and the G-1",
            "At the narrowest place between the G-1 and G-2",
            "Halfway between the G-1 and the beam tip"
        ],
        correctAnswer: 1,
        explanation: "The H-1 circumference is taken at the narrowest place between the burr and the G-1 (brow tine). (How to Score North American Big Game, p. 129)"
    },
    {
        question: "What is the minimum score for a typical whitetail deer to qualify for Boone and Crockett Awards?",
        choices: [
            "150",
            "160",
            "170",
            "180"
        ],
        correctAnswer: 1,
        explanation: "The minimum score for a typical whitetail deer to qualify for Boone and Crockett Awards is 160. (How to Score North American Big Game, p. 131)"
    },
    {
        question: "How are unmatched points at the end of the main beam treated?",
        choices: [
            "Always as abnormal points",
            "Always as normal points",
            "As normal points only if they are the longest point",
            "They are not counted at all"
        ],
        correctAnswer: 1,
        explanation: "Extra, unpaired points at the end of the beam that project upward along the outside edge of the main beam are treated as normal points. (How to Score North American Big Game, p. 126)"
    },
    {
        question: "What is a 'non-symmetry point'?",
        choices: [
            "A point that is longer on one side than the other",
            "An extra unmatched point that occurs between normal points",
            "A point that grows in an unusual direction",
            "A point that is broken off"
        ],
        correctAnswer: 1,
        explanation: "A non-symmetry point is an extra unmatched point that occurs at some position other than at the end of the beam. It is treated as an abnormal point. (How to Score North American Big Game, p. 127-128)"
    },
    {
        question: "How is the greatest spread measurement taken?",
        choices: [
            "With a flexible tape measure",
            "By eye estimation",
            "Using a wall, carpenter's level, and ruler",
            "It's not measured, only calculated"
        ],
        correctAnswer: 2,
        explanation: "The greatest spread measurement is best taken by laying the rack against a vertical wall, using a carpenter's level to mark the widest point, and measuring with a ruler. (How to Score North American Big Game, p. 123-124)"
    },
    {
        question: "What is the minimum score for a non-typical Coues' whitetail to qualify for Pope and Young?",
        choices: [
            "70",
            "80",
            "90",
            "100"
        ],
        correctAnswer: 1,
        explanation: "The minimum score for a non-typical Coues' whitetail to qualify for Pope and Young is 80. (How to Score North American Big Game, p. 131)"
    },
    {
        question: "How many abnormal inches are required for a whitetail to be classified as non-typical in Pope and Young?",
        choices: [
            "5 inches",
            "10 inches",
            "15 inches",
            "20 inches"
        ],
        correctAnswer: 2,
        explanation: "A whitetail must have 15 abnormal inches to be classified as non-typical in Pope and Young. (How to Score North American Big Game, p. 131)"
    },
    {
        question: "Where is the H-4 circumference taken if there are fewer than four normal points?",
        choices: [
            "At the burr",
            "At the beam tip",
            "Halfway between the G-3 and the beam tip",
            "It's not measured"
        ],
        correctAnswer: 2,
        explanation: "If there are fewer than four measured normal points per antler, the H-4 circumference is taken on the main beam halfway between the center of the G-3 point base and the beam tip. (How to Score North American Big Game, p. 129-130)"
    },
    {
        question: "How are circumference measurements taken when an abnormal point arises between normal points?",
        choices: [
            "At the abnormal point",
            "At the narrowest location between normal points on either side of the abnormal point",
            "They are not taken in this case",
            "At the widest point of the abnormal growth"
        ],
        correctAnswer: 1,
        explanation: "When an abnormal point arises between normal points, the circumference measurements are taken at the narrowest location between normal points on either side of the abnormal point. (How to Score North American Big Game, p. 130)"
    },
    {
        question: "What is done if a G-1 point (brow tine) is missing on one antler?",
        choices: [
            "The rack is disqualified",
            "The existing brow tine on the opposite antler is treated as an abnormal point",
            "The existing brow tine is treated as normal and matched against a zero value",
            "Both H-1 and H-2 measurements are taken at the same location"
        ],
        correctAnswer: 2,
        explanation: "If a G-1 point (brow tine) is missing on one antler, treat the existing brow tine on the opposite antler as a normal point, and match it against a zero value for the missing G-1. (How to Score North American Big Game, p. 126)"
    },
    {
        question: "How is the inside spread credit determined?",
        choices: [
            "It's always the actual inside spread measurement",
            "It's the actual inside spread or the length of the longer main beam, whichever is less",
            "It's calculated as 25% of the total score",
            "It's not included in the final score"
        ],
        correctAnswer: 1,
        explanation: "The inside spread credit cannot exceed the length of the longer antler main beam. If the inside spread measurement does exceed the longer main beam, record the longer main beam length as the spread credit. (How to Score North American Big Game, p. 124-125)"
    },
    {
        question: "What is a Coues' whitetail deer?",
        choices: [
            "A large subspecies found in the northern United States",
            "A small mountain-dwelling subspecies found in the American Southwest and Mexico",
            "A hybrid between whitetail and mule deer",
            "An extinct subspecies of whitetail deer"
        ],
        correctAnswer: 1,
        explanation: "The Coues' whitetail is a small mountain-dwelling subspecies found throughout the American Southwest and Mexico. (How to Score North American Big Game, p. 121)"
    },
    {
        question: "How are burr tines or 'beauty points' classified?",
        choices: [
            "As normal points",
            "As abnormal points",
            "They are not counted",
            "As G-1 points"
        ],
        correctAnswer: 1,
        explanation: "Burr tines or beauty points (points arising from the antler burr) are classified as abnormal points. (How to Score North American Big Game, p. 125)"
    },
    {
        question: "What is the correct way to measure a curved antler point?",
        choices: [
            "Along the inside curve",
            "Along the outside curve",
            "As a straight line from base to tip",
            "By averaging the inside and outside measurements"
        ],
        correctAnswer: 1,
        explanation: "Antler points are measured along the outside of their curve in the center of the tine. (How to Score North American Big Game, p. 128)"
    },
    {
        question: "How is the Final Score calculated for a typical whitetail?",
        choices: [
            "Sum of all measurements",
            "Sum of measurements minus differences",
            "Sum of measurements plus abnormal points",
            "Average of right and left antler scores"
        ],
        correctAnswer: 1,
        explanation: "For a typical whitetail, the Final Score is calculated by subtracting the total differences (Column 3) from the subtotal of measurements and spread credit. (How to Score North American Big Game, p. 130-131)"
    },
    {
        question: "What's the difference in scoring between typical and non-typical whitetail deer?",
        choices: [
            "Non-typical deer have more points measured",
            "Typical deer don't include abnormal points in the score",
            "Non-typical deer add abnormal point lengths to the score instead of subtracting differences",
            "There is no difference in scoring"
        ],
        correctAnswer: 2,
        explanation: "The main difference is that for non-typical deer, the total length of abnormal points is added to the score, while for typical deer, it's subtracted as part of the differences. (How to Score North American Big Game, p. 130-131)"
    },
    {
        question: "What should be done if a normal point is broken off to less than an inch long?",
        choices: [
            "Estimate its original length",
            "Ignore it completely",
            "Record it as an abnormal point",
            "Record a zero and note it in the Remarks section"
        ],
        correctAnswer: 3,
        explanation: "If a normal point has been broken off to less than an inch long, record a zero to indicate its condition and note the action in the Remarks section. This preserves the sequence and avoids any artificial penalty for non-symmetry. (How to Score North American Big Game, p. 127)"
    }
];

const QuizApp = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showExplanation, setShowExplanation] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [quizComplete, setQuizComplete] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);

    const handleAnswer = (choiceIndex) => {
        setSelectedAnswer(choiceIndex);
        setShowExplanation(true);
        const correct = choiceIndex === questions[currentQuestion].correctAnswer;
        setIsCorrect(correct);
        if (correct) {
            setScore((prevScore) => prevScore + 1);
        }
    };

    const nextQuestion = () => {
        setShowExplanation(false);
        setSelectedAnswer(null);
        setIsCorrect(null);
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        } else {
            setQuizComplete(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowExplanation(false);
        setSelectedAnswer(null);
        setQuizComplete(false);
        setIsCorrect(null);
    };

    if (quizComplete) {
        return (
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Quiz Complete!</h1>
                <p className="text-xl mb-4">Your final score: {score} out of {questions.length}</p>
                <button
                    onClick={resetQuiz}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Restart Quiz
                </button>
            </div>
        );
    }

    const currentQ = questions[currentQuestion];

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Scoring Whitetail and Coues’ Whitetail Deer Quiz</h1>
            <p className="mb-4">Question {currentQuestion + 1} of {questions.length}</p>
            <p className="text-lg font-semibold mb-4">{currentQ.question}</p>
            <div className="space-y-2">
                {currentQ.choices.map((choice, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={showExplanation}
                        className={`w-full text-left p-2 rounded ${
                            selectedAnswer === index
                                ? index === currentQ.correctAnswer
                                    ? 'bg-green-200'
                                    : 'bg-red-200'
                                : 'bg-gray-100 hover:bg-gray-200'
                        } ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                        {choice}
                    </button>
                ))}
            </div>
            {isCorrect !== null && (
                <p className={`mt-4 text-lg font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                    {isCorrect ? 'Correct!' : 'Incorrect'}
                </p>
            )}
            {showExplanation && (
                <Alert className="mt-4">
                    <AlertTitle>Explanation</AlertTitle>
                    <AlertDescription>
                        {currentQ.explanation}
                    </AlertDescription>
                </Alert>
            )}
            {showExplanation && (
                <button
                    onClick={nextQuestion}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                </button>
            )}
            <p className="mt-4">Current Score: {score} / {currentQuestion + 1}</p>
        </div>
    );
};

ReactDOM.render(<QuizApp />, document.getElementById('root'));
