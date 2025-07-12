import { education } from "../data/education.ts";

function Education() {
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const educationList = education.map((education) => {
        const {
            degree,
            institute: institutionName,
            city: cityOfEducation,
            country: countryOfEducation,
            startDate,
            endDate: rawEndDate,
            logo: institutionLogo,
        } = education;

        const start = new Date(startDate);
        const end =
            rawEndDate === "Present" ? new Date() : new Date(rawEndDate);

        const educationLocation = `${institutionName}, ${cityOfEducation}, ${countryOfEducation}`;
        const educationDuration = `${
            monthNames[start.getMonth()]
        } ${start.getFullYear()} - ${
            rawEndDate === "Present"
                ? "Present"
                : `${monthNames[end.getMonth()]} ${end.getFullYear()}`
        }`;

        const courses = education.courses.map((course) => (
            <li className="text-gray-300">• {course}</li>
        ));
        const educationBulletpoints = education.bulletpoints.map(
            (bulletpoint) => (
                <li className="flex items-start">
                    <span className="mr-2 text-gray-500">•</span>
                    <span>{bulletpoint}</span>
                </li>
            )
        );
        return (
            <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600">
                <div className="flex items-start mb-2">
                    <div className="bg-white rounded-full p-2 mr-4 w-24 h-24 flex-shrink-0 flex items-center justify-center overflow-hidden">
                        <img src={institutionLogo} alt="" />
                    </div>
                    <div className="flex-grow">
                        <h3 className="text-2xl font-semibold text-gray-100">
                            {degree}
                        </h3>
                        <p className="text-lg text-gray-300">
                            {educationLocation}
                        </p>
                        <p className="text-gray-400">{educationDuration}</p>
                    </div>
                </div>
                <ul className="space-y-2 text-gray-300 mb-4">
                    {educationBulletpoints}
                </ul>
                <details className="my-2">
                    <summary className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 448 512"
                            className="mr-2 inline-block details-open:hidden"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                        </svg>
                        <span>View Courses</span>
                    </summary>
                    <ul className="mt-4 ml-4 space-y-2">{courses}</ul>
                </details>
            </div>
        );
    });
    return (
        <>
            <section id="education" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-100">
                    Education
                </h2>
                <div className="space-y-6">{educationList}</div>
            </section>
        </>
    );
}

export default Education;
