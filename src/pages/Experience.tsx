import { useState } from "react";
import { experience } from "../data/experiences.ts";

function Experience() {
    const [showMore, setShowMore] = useState(false);
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

    // Get experiences based on showMore state
    const experiencesToShow = showMore ? experience : experience.slice(0, 5);

    const experienceList = experiencesToShow.map((experience) => {
        const {
            logo: companyLogo,
            title: jobName,
            name: organizationName,
            city: cityOfExperience,
            country: countryOfExperience,
            startDate,
            endDate: rawEndDate,
        } = experience;

        const start = new Date(startDate);
        const end =
            rawEndDate === "Present" ? new Date() : new Date(rawEndDate);

        const experienceLocation = `${organizationName}, ${cityOfExperience}, ${countryOfExperience}`;
        // Add 1 month to the end date for duration calculation
        const adjustedEnd = new Date(end);
        adjustedEnd.setMonth(adjustedEnd.getMonth() + 1);

        const totalMonths =
            (adjustedEnd.getFullYear() - start.getFullYear()) * 12 +
            (adjustedEnd.getMonth() - start.getMonth());
        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;
        const yearStr = years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "";
        const monthStr =
            months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "";
        const durationStr =
            yearStr && monthStr
                ? `${yearStr} ${monthStr}`
                : yearStr || monthStr || "";
        const jobDateRange = `${
            monthNames[start.getMonth()]
        } ${start.getFullYear()} - ${
            rawEndDate === "Present"
                ? "Present"
                : `${monthNames[end.getMonth()]} ${end.getFullYear()}`
        }${durationStr ? ` (${durationStr})` : ""}`;

        const experienceBulletpoints = experience.bulletpoints.map(
            (bulletpoint) => (
                <li className="flex items-start">
                    <span className="mr-2 text-gray-500">•</span>
                    <span>{bulletpoint}</span>
                </li>
            )
        );
        const experienceTags = experience.tags.map((tag) => (
            <span
                className="inline-block bg-green-500 px-3 py-1.5 text-xs font-medium text-green-500 mr-2 mb-2 rounded-full"
                style={{ backgroundColor: "rgba(34, 197, 94, 0.3)" }}
            >
                {tag}
            </span>
        ));
        return (
            <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600">
                <div className="flex items-start mb-2">
                    <div className="bg-white rounded-full p-2 mr-4 w-24 h-24 flex-shrink-0 flex items-center justify-center overflow-hidden">
                        <img src={companyLogo} alt="" />
                    </div>
                    <div className="flex-grow">
                        <h3 className="text-2xl font-semibold text-gray-100">
                            {jobName}
                        </h3>
                        <p className="text-lg text-gray-300">
                            {experienceLocation}
                        </p>
                        <p className="text-gray-400">{jobDateRange}</p>
                    </div>
                </div>
                <ul className="space-y-2 text-gray-300 mb-4">
                    {experienceBulletpoints}
                </ul>
                <div className="flex flex-wrap">{experienceTags}</div>
            </div>
        );
    });
    return (
        <>
            <section id="experience" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-100">
                    Experience
                </h2>
                <div className="space-y-6">{experienceList}</div>

                {/* Show/Hide button only if there are more than 5 experiences */}
                {experience.length > 5 && (
                    <div className="flex justify-center mt-8">
                        <button
                            className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors duration-200"
                            onClick={() => setShowMore((s) => !s)}
                        >
                            {showMore
                                ? "Show less"
                                : `See all ${experience.length} experiences`}
                        </button>
                    </div>
                )}
            </section>
        </>
    );
}

export default Experience;
